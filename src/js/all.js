$(document).ready(function(){

    $('.motor-slide').click(function() {
        $('.motor-slide').removeClass('on').addClass('off');
        $(this).removeClass('off').addClass('on');
    });

    $('.icon-ok').click(function() {
        $('.home-page').toggleClass('on');
        $('.list-page').toggleClass('on');
    });

    $('.more-map').click(function() {
        $('.map').toggleClass('on');
    });

});