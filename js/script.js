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
        autoplay: true,
        autoplaySpeed: 3000,
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

    //header-scroll
    $(window).bind('mousewheel', function(event){
        /* if(event.originalEvent.wheelDelta >= 0){
            console.log(scrollY)
            console.log($('.header')[0].getBoundingClientRect().top)
        }
        else{ }*/
        console.log(scrollY)
        console.log($('.header')[0].getBoundingClientRect().top)
        if(scrollY - 63 > $('.header')[0].getBoundingClientRect().top){
            $('.header').addClass('_header-scroll')
        }else{
            $('.header').removeClass('_header-scroll')
        }

        
    })

    //categories-item-flip
    
    let list = $('.categories__item')
    for(let i=0; i<list.length; i++){
        $(list[i]).click(function(){
            $(list[i]).toggleClass('_item__flip')
            for(let j=0; j<list.length; j++){
                    if(j===i){
                        continue
                    }else{
                        if($(list[j]).hasClass('_item__flip')){
                            $(list[j]).removeClass('_item__flip')
                        }
                    }
                    
            }
        })
    }

    //menu-active
    $('.burger').click(function(){
        $('.burger, .menu, .logo-wrapper').toggleClass('_menu__active')
        $('body').toggleClass('_lock')
    })

    //ScrollTo
    $('.menu__link').click(function(event){
        onMenuLinkClick(event)
        moveUnderline(event)
    })
    function onMenuLinkClick(e){
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = $(menuLink.dataset.goto)[0]
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight
            
            if($('.burger').hasClass('_menu__active')){
                $('.burger').removeClass('_menu__active')
                $('.menu').removeClass('_menu__active')
                $('.logo-wrapper').removeClass('_menu__active')
                $('body').removeClass('_lock')

            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
        }
        e.preventDefault()
    }
    function moveUnderline(e){
        console.log(document.documentElement.clientWidth)
        if(document.documentElement.clientWidth > 770){
            console.log(e.target)
            console.log($(e.target))
            console.log($('.header__btn'))
            if(!$(e.target).hasClass('header__btn')){
                $('.menu__underline').addClass('_menu__underline__active')
                $('._menu__underline__active').css({
                    'transform':'translate('+ ($(e.target)[0].getBoundingClientRect().left - $('.menu-list')[0].getBoundingClientRect().left) +'px, 0)',
                    'width': $(e.target).innerWidth() + 'px'
                })
            }
        }
        
        
    }   

    //footer spoiler
    $('.footer-info__title').click(function(event){
        $('.footer-info__title').not($(this)).removeClass('_footer__item__active')
        $('.footer-info__text__block').not($(this).next()).slideUp(300)

        $(this).toggleClass('_footer__item__active').next().slideToggle(300)
    })
});


