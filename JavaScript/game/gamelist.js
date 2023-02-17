let games = [{
    "name": "Dark Souls 3",
    "src": "dark_souls_3",
    "format": "torrent"
}, {
    "name": "Elden Ring",
    "src": "elden_ring",
    "format": "torrent"
}, {
    "name": "Sekiro: Shadow Die Twice",
    "src": "sekiro",
    "format": "torrent"
}, {
    "name": "Astroneer",
    "src": "astroneer",
    "format": "torrent"
}, {
    "name": "Slay the Spire",
    "src": "slay_the_spire",
    "format": "torrent"
}, {
    "name": "A Dance of Fire and Ice",
    "src": "a_dance_of_fire_and_ice",
    "format": "torrent"
}, {
    "name": "Terraria",
    "src": "terraria",
    "format": "torrent"
}, {
    "name": "Terraria(Android)",
    "src": "terraria_android",
    "format": "torrent"
}, {
    "name": "Ori and the Blind Forest",
    "src": "ori_and_the_blind_forest",
    "format": "torrent"
}, {
    "name": "Ori and the Will of the Wisps",
    "src": "ori_and_the_will_of_the_wisps",
    "format": "torrent"
}, {
    "name": "Hollow Knight",
    "src": "hollow_knight",
    "format": "torrent"
}, {
    "name": "Raft",
    "src": "raft",
    "format": "torrent"
}, {
    "name": "Subnautica",
    "src": "subnautica",
    "format": "torrent"
}, {
    "name": "Subnautica: Below Zero",
    "src": "subnautica_below_zero",
    "format": "torrent"
}, {
    "name": "Dead Cells",
    "src": "dead_cells",
    "format": "torrent"
}, {
    "name": "Cyberpunk 2077",
    "src": "cyberpunk_2077",
    "format": "torrent"
}, {
    "name": "Death Stranding",
    "src": "death_stranding",
    "format": "torrent"
}, {
    "name": "Detroit: Become Human",
    "src": "detroit_become_human",
    "format": "torrent"
}, {
    "name": "Devil May Cry V",
    "src": "devil_may_cry_5",
    "format": "torrent"
}, {
    "name": "Grand Theft V",
    "src": "gta5",
    "format": "torrent"
}, {
    "name": "Dying Light 2: Stay Human",
    "src": "dying_light_2",
    "format": "torrent"
}, {
    "name": "Forza Horizon 4",
    "src": "forza_horizon_4",
    "format": "torrent"
}, {
    "name": "Forza Horizon 5",
    "src": "forza_horizon_5",
    "format": "torrent"
}, {
    "name": "Ghostrunner",
    "src": "ghostrunner",
    "format": "torrent"
}, {
    "name": "Nier: Automata",
    "src": "nier_automata",
    "format": "torrent"
}, {
    "name": "Red Dead Redemption 2",
    "src": "red_dead_redemption_2",
    "format": "torrent"
}, {
    "name": "The Elder Scrolls V: Skyrim",
    "src": "elder_scrolls_skyrim",
    "format": "torrent"
}, {
    "name": "Spider-Man: Miles Morales",
    "src": "marves_spider_man_miles_morales",
    "format": "torrent"
}, {
    "name": "God of War 4",
    "src": "god_of_war",
    "format": "torrent"
}, {
    "name": "Call of Duty: Modern Warfare 2",
    "src": "call_of_duty_modern_warfare_2",
    "format": "torrent"
},{
    "name": "Battlefield 1",
    "src": "battlefield_1",
    "format": "torrent"
},{
    "name": "Mortal Kombat 11",
    "src": "mortal_kombat_11",
    "format": "torrent"
}
]
for (i = 0; i < games.length; i++) {
    pic = "game/game_icon/" + games[i].src + ".jpg";
    if (typeof (games[i].website) == "undefined") {
        address = "game/game_resource/" + games[i].src + "." + games[i].format;
    } else {
        address = games[i].website;
    }
    document.getElementById("div").innerHTML += '<div class="download" onclick="contect(&#39' + games[i].src + '&#39)">' + '<div>' + '<img class="downloadimg" src=' + pic + '>' + '<h3 class="downloadp">' + games[i].name + '</h3>' + '<a href="' + address + '">' + '<button class="btn" style="float:right">' + 'Download' + '</button>' + '</div>' + '</div>';
}

$('.downloadimg').ready(function () {
    $('#loading').animate({
        height: 'toggle'
    });
    $('#div').delay(1000).fadeIn('slow');
});