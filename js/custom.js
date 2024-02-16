$(function () {

    $('.main_visual .main_visual_slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        fade: true,
    });

    $('.main_visual .main_visual_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.main_visual .num span').text('0' + (c + 1));

        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on')
    })


    $('.main_visual .mopen').on('click', function () {
        $(this).toggleClass('on');
    });


    $('.main_visual .main_visual_slide').on('init afterChange', function () {
        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });


    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    });

    $('.main_tema .tema_box .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.main_tema .tema_box .tab_menu li').removeClass('on')
        $('.main_tema .tema_box .tab_menu li').eq(idx).addClass('on')

        console.log(idx); // 0 , 1 , 2
        $('.main_tema  .tab_content li').removeClass('on');
        $('.main_tema  .tab_content li').eq(idx).addClass('on');

    });


    $('.main_tema  .tab_content li .tab_slide ').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });


    AOS.init();

    $('.main_content .content_tab .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        $('.main_content .content_tab .tab_menu li a').removeClass('on')
        $('.main_content .content_tab .tab_menu li a').eq(idx).addClass('on')

        console.log(idx); // 0 , 1 , 2
        $('.main_content .tab_content li').removeClass('on');
        $('.main_content .tab_content li').eq(idx).addClass('on');

    });



})

