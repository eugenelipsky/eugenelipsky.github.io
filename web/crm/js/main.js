$(function () {
    $('.header__hero-slide').slick({
        arrows: false,
        dots: true
    });

    $('.resources__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false
                }
            }
        ]
    });
    $(window).resize(function(){
        $('.quotes__slider')[0].slick.refresh();
    });

    $('.quotes__slider').slick({
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.faq__accordion').accordion({
        "transitionSpeed": 500,
        singleOpen: true
    });

    $('.menu__list-mobile').on('click', function () {
        $('.menu__list').slideToggle();
    });
});

