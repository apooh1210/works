/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-15 16:54:10
 * @version $Id$
 */


$(window).scroll(function(event) {
    $('.vrboxgroup').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("fadeIn");
        }
    });
});
$(window).scroll(function(event) {
    $('.title').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("fadeIn");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.banner-item').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideRight");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.product-box').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideLeft");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.info1').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideRight");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.info2').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideLeft");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.news-list').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideLeft");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.link').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideUp");
        }
    });
}); 
$(window).scroll(function(event) {
    $('.icon-link').each(function(event){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 900) {
            $(this).addClass("slideUp");
        }
    });
}); 







