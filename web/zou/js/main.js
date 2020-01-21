$(function(){
    $("#steps-slider").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        enableFinishButton: false,
        enablePagination: false,
        enableAllSteps: true,
        cssClass: "style",
        titleTemplate: "#title#",
        currentStep: false

    });

    $('.review__slider-items').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        swipe: true,
      });
});