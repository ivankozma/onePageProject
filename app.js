$(function () {

    /*fixed header - фиксированный блок навигации при прокрутке*/ 
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function() {
        introH = intro.innerHeight();
        scrollPos=$(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });


    /*smooth scroll - плавный скрол от навигации*/ 
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset-100
        }, 1700);
    });
});

   /*Nav Toggle - мобильная менюшка*/ 
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
   });

      /*slider - слайдер https://kenwheeler.github.io/slick/*/ 

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });