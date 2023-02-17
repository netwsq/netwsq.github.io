adobes = [{
    "name": "Adobe Acrobat",
    "src": "acrobat",
    "format": "torrent"
},{
    "name": "Adobe After Effects",
    "src": "after_effects",
    "format": "torrent"
},{
    "name": "Adobe Animate",
    "src": "animate",
    "format": "torrent"
},{
    "name": "Adobe Audition",
    "src": "audition",
    "format": "torrent"
},{
    "name": "Adobe Bridge",
    "src": "bridge",
    "format": "torrent"
},{
    "name": "Adobe Character Animator",
    "src": "character_animator",
    "format": "torrent"
},{
    "name": "Adobe Dreamweaver",
    "src": "dreamweaver",
    "format": "torrent"
},{
    "name": "Adobe Illustrator",
    "src": "illustrator",
    "format": "torrent"
},{
    "name": "Adobe Incopy",
    "src": "incopy",
    "format": "torrent"
},{
    "name": "Adobe InDesign",
    "src": "indesign",
    "format": "torrent"
},{
    "name": "Adobe Lightroom Classic",
    "src": "lightroom_classic",
    "format": "torrent"
},{
    "name": "Adobe Media Encoder",
    "src": "media_encoder",
    "format": "torrent"
},{
    "name": "Adobe Photoshop",
    "src": "photoshop",
    "format": "torrent"
},{
    "name": "Adobe Prelude",
    "src": "prelude",
    "format": "torrent"
},{
    "name": "Adobe Premiere",
    "src": "premiere",
    "format": "torrent"
},{
    "name": "Adobe XD",
    "src": "xd",
    "format": "torrent"
}]
flag=0;
for (i = 0; i < adobes.length; i++) {
    pic = "adobe/adobe_icon/" + adobes[i].src + ".png";
    if (typeof (adobes[i].website) == "undefined") {
        address = "adobe/adobe_resource/" + adobes[i].src + "." + adobes[i].format;
    } else {
        address = adobes[i].website;
    }
    document.getElementById("div").innerHTML += "<div class='download' onclick='contect()'>" + '<div>' + '<img class="downloadimg" onload="showlist()" src=' + pic + '>' + '<h3 class="downloadp">' + adobes[i].name + '</h3>' + '<a href="' + address + '">' + '<button class="btn" style="float:right">' + 'Download' + '</button>' + '</div>' + '</div>';
}
function showlist(){
    flag++;
    if( flag == adobes.length ){
        $('#loading').animate({height: 'toggle'});
        $('#div').delay(1000).fadeIn('slow');
        console.log(flag);
    }
}