$(document).ready(function() {

    $('nav a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        } else {
            $('html, body').animate({'scrollTop': 0});
        }
        e.preventDefault();
    });

    var item1wave = $('#item1wave').wavify({
        bones: 3,
        amplitude: 100,
        color: 'url(#wave-gradient1)',
        speed: .25,
        container: '#realme3pro-wave'
    });

    var item2wave = $('#item2wave').wavify({
        bones: 3,
        amplitude: 100,
        color: 'url(#wave-gradient2)',
        speed: .25,
        container: '#realme3-wave'
    });

    var item3wave = $('#item3wave').wavify({
        bones: 3,
        amplitude: 100,
        color: 'url(#wave-gradient3)',
        speed: .25,
        container: '#realmec2-wave'
    });
    
    $('.welcome-discount').click(function() {
        $('html, body').animate({'scrollTop': $('.item').eq(0).offset().top});
    });

});

$(window).on('load resize scroll', function() {
    var curScroll = $(window).scrollTop();
    var curHeight = $(window).height();

    $('nav li').removeClass('active');
    $('nav li').eq(0).addClass('active');
    $('nav a').each(function(e) {
        var curLink = $(this);
        var curBlock = $(curLink.attr('href'));
        if (curBlock.length > 0 && ((curScroll + curHeight / 2) > curBlock.offset().top)) {
            $('nav li.active').removeClass('active');
            curLink.parent().addClass('active');
        }
    });

});