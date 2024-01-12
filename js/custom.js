$(function(){

    $('.main_visual .main_visual_slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        fade: true,
    });

    $('.main_visual .main_visual_slide').on('afterChange', function(e,s, c) {
        console.log(e, s ,c); 
        $('.main_visual .num span').text('0' + (c + 1));

        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on')
    })


    $('.main_visual .mopen').on('click', function() {
        $(this).toggleClass('on');
    });
    // let st = true;
    
    
    //     if(st) {
    //         $('.main_visual .main_visual_slide').slick('slickPlay');
    //     }  else {
    //         $('.main_visual .main_visual_slide').slick('slickPause');
    //     }

    //     st = !st;
        
    //     });



    $('.main_visual .main_visual_slide').on('init afterChange', function(){
        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });


    
        $('.mopen').on('click', function () {
            $('.gnb').toggleClass('on');
            $(this).find('.hamburger').toggleClass('is-active');
        });


    
    $('.main_content .content_tab .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        $('.main_content .content_tab .tab_menu li a').removeClass('on')
        $('.main_content .content_tab .tab_menu li a').eq(idx).addClass('on')

        console.log(idx); // 0 , 1 , 2
        $('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on');

    });

    AOS.init();

    // window.addEventListener('scroll', ()=> {
    //     let SCT = window.scrollY;
    //     SCT > 0 
    //     ? document.querySelector('.header').classList.add('on')
    //     : document.querySelector('.header').classList.remove('on');
    
    // });


})

