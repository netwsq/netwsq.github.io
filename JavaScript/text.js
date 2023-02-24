Router.route('/game', function () {
    $('#index').hide();
    $('#div').hide();
    $('#closebtn').fadeIn();
    $('#box').fadeIn();
    $('#loading').delay(500).animate({ height: 'toggle' });
    flag=0;
    $('#div').empty();
    for (i = 0; i < games.length; i++) {
    pic = "game/game_icon/" + games[i].src + ".jpg";
    if (typeof (games[i].website) == "undefined") {
        address = "game/game_resource/" + games[i].src + "." + games[i].format;
    } else {
        address = games[i].website;
    }
    document.getElementById("div").innerHTML += '<div class="download" onclick="contect(&#39' + games[i].src + '&#39)">' + '<div>' + '<img class="downloadimg" onload="showlist(&#39games&#39)" src=' + pic + '>' + '<h3 class="downloadp">' + games[i].name + '</h3>' + '<a href="' + address + '">' + '<button class="btn" style="float:right">' + 'Download' + '</button>' + '</div>' + '</div>';
}

});
Router.route('/adobe', function(){
    $('#index').hide();
    $('#div').hide();
    $('#closebtn').fadeIn();
    $('#box').fadeIn();
    $('#loading').delay(500).animate({ height: 'toggle' });
    flag=0;
    $('#div').empty();
    for (i = 0; i < adobes.length; i++) {
    pic = "adobe/adobe_icon/" + adobes[i].src + ".png";
    if (typeof (adobes[i].website) == "undefined") {
        address = "adobe/adobe_resource/" + adobes[i].src + "." + adobes[i].format;
    } else {
        address = adobes[i].website;
    }
    document.getElementById("div").innerHTML += "<div class='download' onclick='contect()'>" + '<div>' + '<img class="downloadimg" onload="showlist(&#39adobes&#39)" src=' + pic + '>' + '<h3 class="downloadp">' + adobes[i].name + '</h3>' + '<a href="' + address + '">' + '<button class="btn" style="float:right">' + 'Download' + '</button>' + '</div>' + '</div>';
}
});
Router.route('/index', function(){
    flag=0;
    $('#closebtn').fadeOut();
    $('#box').fadeOut();
    $('#index').delay(600).fadeIn("slow");
    if($('#loading').is(":show")){
        $('#loading').animate({ height: 'toggle' });
    }

});