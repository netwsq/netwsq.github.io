Router.route('/game', function () {
    $('#index').hide();
    $('#div').hide();
    $('#closebtn').animate({ height: 'toggle' }, 20);
    $('#box').animate({ height: 'toggle' }, 600);
    $('#loading').delay(500).animate({ height: 'toggle' });
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'JavaScript/game/gamelist.js';
    document.getElementsByTagName('head')[0].appendChild(script);
});
Router.route('/index', function(){
    flag=0;
    $('#closebtn').animate({ height: 'toggle' }, 20);
    $('#box').animate({ height: 'toggle' }, 600);
    $('#index').delay(600).fadeIn();
});