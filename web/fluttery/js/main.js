$(function(){

    $('.menu__list-mobile').on('click', function (event) {
        event.stopPropagation();
        $('.menu__list').slideToggle();
        $(".menu__list").on('click', function (event) {
            event.stopPropagation();
        });
        $(this).toggleClass('active');
    })

    $(document).on('click', function () {
        $('.menu__list').hide();
        $('.menu__list-mobile').removeClass('active');
    });


});