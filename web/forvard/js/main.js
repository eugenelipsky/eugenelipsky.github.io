$(function(){
    $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 430,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.mobile__menu').on('click', function(){
        $('.header__menu').slideToggle();
    })
});