'use strict'

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        draggeble: false,
        waitForAnimate: false,
        variableWidth: false,
        arrows: false,
        dots: false,
        /* autoplay: true,
        autoplaySpeed: 3000, */
        responsive:[
            {
                breakpoint: 770,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 430,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 380,
                settings:{
                    slidesToShow: 1,
                }
            },
        ]

    })
});