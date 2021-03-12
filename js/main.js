$(document).ready(function () {

    // team slider js

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // testimonial slider js

    $('.slide-text').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        prevArrow: ".testimonial_arrow_left",
        nextArrow: ".testimonial_arrow_right"
    });

    // sticky top js

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".sticky-top");
        if (scrolling >= 100) {
            sticky.addClass("nav-bg");
        } else {
            sticky.removeClass("nav-bg");
        }
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var nav = $(".nav-link");
        if (scrolling >= 100) {
            nav.css("padding", "20px 25px");
        } else {
            nav.css("padding", "35px 25px");
        }
    });

    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // wow js

    new WOW().init();

    // scroll to top js


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var scrollToTop = $(".scroll_to_top");
        if (scrolling >= 100) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // preloader js
    
    $(window).on("load", function(){
        $("#preloader").delay(2000).fadeOut(700);
    });
    
    // our custom js
    
    $(".openNav").click(function(){
        $(".overlay").show(300);
    });
    $(".closeNav").click(function(){
        $(".overlay").hide();
    });
    $(".mobile_menu > .overlay > .overlay_content a").click(function(){
        $(".overlay").hide();
    });

});