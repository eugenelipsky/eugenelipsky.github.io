$(function () {
    $('.rooms__slider').slick({
        arrows: true,
        dots: true,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        waitForAnimate: true,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.room__slider').slick({
        arrows: false,
        asNavFor: '.room__slider-thumbs',
    });
    $('.room__slider-thumbs').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.room__slider',
        focusOnSelect: true,
    });

    var prog = 'input[type="checkbox"]';
    var $submit = $(".apply__filter").hide();
    $(document).on("change", prog, function () {
        console.log($(prog).is(":checked"))
        $submit.toggle($(prog).is(":checked"));
    });

    setTimeout(function () {
        $('input[type="checkbox"], select').styler();
    }, 100);


    $('.tooltip').tooltipster({
        theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
    });

    $('.menu__responsive').on('click', function () {
        $('.menu__list').slideToggle();
        $('.menu__responsive').toggleClass('active');
    })

    $('.menu__responsive-footer').on('click', function () {
        $('.footer__menu-list').slideToggle();
        $('.menu__responsive-footer').toggleClass('active');
    })

    $('.mobile__filter-btn').on('click', function () {
        $('.catalog__sidebar').slideToggle();
        $('.catalog__content, .header').addClass('blur__overlay');
    });

    $('.close__button').on('click', function () {
        $('.catalog__sidebar').hide();
        $('.catalog__content, .header').removeClass('blur__overlay');
    });

    $(".menu__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


