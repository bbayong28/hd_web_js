//window.addEventListener('DOMContentLoaded', () => {});
//$(function () { });

//js -> document.querySelector('.Wrap').style.color = 'red'
//jquery -> $('.Wrap').css("color","red")  /  $('.Wrap').css({color:'red'})

//js -> document.querySelectorAll('.top_close_btn').addEventListener('click', function () {});
//jquery -> $('.top_close_btn').on('click', function () {});

    ///////////////////////////////////////////////////
    //여러군데 쓰이는 건 변수에 담아두기
    //화살표 함수 -> document.querySelectorAll('.top_close_btn').addEventListener('click', () => { });
    //document.querySelector('.top_close_btn').addEventListener('click', function () {});
    
    //document.querySelector('.top_close_btn').addEventListener('click', (e) => {
    //    //console.log(this, e.currentTarget) // e.target => i e.currentTarget => xi.close?,.top_close_btn').addEventListener('click', function () {});
    //});

    //const topHandler = function () { 
    //    console.log(11111)
    //}
//
    //document.querySelector('.top_close_btn').addEventListener//('click', topHandler);  
    


window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.top_close_btn').addEventListener('click', function () {
        //this.classList.toggle('on');
        document.querySelector('.TopBanner').classList.add('on');
        document.querySelector('.MainVisual').classList.add('on');
    });

    document.querySelector('.lang strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.lang').classList.toggle('on');
    });

    document.querySelector('.top_search strong').addEventListener('click', function () {
        this.classList.toggle('on');
        document.querySelector('.top_search').classList.toggle('on');
    });


    // scroll event
    // const SEC = document.querySelectorAll('.action');
    // const WT=window.innerHeight;

    // window.addEventListener('scroll', () => {
    //     let sct = window.scrollY;
    //     SEC.forEach(ele => {
    //         let secTop = ele.offsetTop;
    //         let secH = ele.clientHeight;
    //         if (sct > secTop - (WT - secH) / 2 - 200) {
    //             ele.classList.add('on');
    //         };
    //         // sct > secTop - (WT-secH) / 2 - 200 ? ele.classList.add('on') : e.classList.remove('on');
    //     });
    // });




    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');
        SCT > 600
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');

    });

    const slideDots = document.querySelectorAll('.slide_dots li');

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        slideActiveClass: 'on', // .swiper-slide-active 대신 .on을 쓸거임...
        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex; // 0 1 2
                slideDots.forEach(it => it.classList.remove('on'))
                slideDots[count].classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });

    document.querySelector('.MainVisual .slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.MainVisual .slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });


    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });

    const PRS = new Swiper('.portfolio_right_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
    });


    const PLS = new Swiper('.portfolio_left_slide', {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });



    document.querySelector('.Portfolio .slide_handler .next').addEventListener('click', () => {
        PLS.slideNext();
    });
    document.querySelector('.Portfolio .slide_handler .prev').addEventListener('click', () => {
        PLS.slidePrev();
    });

    PLS.controller.control = PRS;
    PRS.controller.control = PLS;

    //출처: https://www.biew.co.kr/entry/Swiper-슬라이드-Swiper-2개-연동과-제어Controller [웹퍼블리싱 - 퍼블리싱 이야기 맑은커뮤니케이션:티스토리]
    //centeredSlides: true,

    const SCBOX = document.querySelectorAll('.Solution .content_box>div');
    const solutionDots = document.querySelectorAll('.solution_dots li'); //li들 -> 유사배열 forEach는 쓸 수 있지만 map은 쓸 수 없다
    const SCS = new Swiper('.Solution .center_slider', {
        loop: true,
        // slidesPerView: 2,
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: "auto",
        //width: 1200,
        slideActiveClass: 'on', // .swiper-slide-active 대신 .on을 쓸거임...
        on: {
            slideChangeTransitionEnd: function () {
                let count = this.realIndex; // 0 1 2 3 4 
                SCBOX.forEach(it => it.classList.remove('on'))
                SCBOX[count].classList.add('on');
                solutionDots.forEach(el => el.classList.remove('on'));
                solutionDots[count].classList.add('on');
                document.querySelector('.solution_slider_num').innerHTML = "0" + (this.realIndex + 1) + "<span>  / 0" + SCBOX.length;
            }
        }

    });


    document.querySelector('.Solution .slide_handler .next').addEventListener('click', () => {
        SCS.slideNext();
    });
    document.querySelector('.Solution .slide_handler .prev').addEventListener('click', () => {
        SCS.slidePrev();
    });



    solutionDots.forEach((it, idx) => {
        it.addEventListener("click", () => {
            //console.log(idx)
            //두개 순서바뀌면 안됨
            solutionDots.forEach(el => el.classList.remove('on'));//클릭했을 때 순회하면서 배버리고
            it.classList.add('on');// 자기자신에 on을 붙여라
            SCS.slideTo(idx); //li들과 슬라이드 연결해주기       
            console.log(SCS.realIndex)
        })
    });


    document.querySelector('#FL').addEventListener('change', e => {
        //console.log(e.target.value)
        let lnk = e.target.value;
        lnk && window.open(lnk)
        //if (lnk) window.open(lnk)
    });


    document.querySelector('.to_top').addEventListener('click', function () {
        //window.scrollTo({ top: 0, behavior: 'smooth' })//window.scrollTo({ top: 0, behavior: 'smooth' });//scrollTo 는 window.open()과 같은 메소드(함수)다.
        gsap.to(window, { duration: 0.5, scrollTo: 0 });

    });


    const LINK_LI = document.querySelectorAll('.ft_top .right li');
    const LINK_CON = document.querySelectorAll('.ft_top .content .link');

    console.log(LINK_LI, LINK_CON);



    // if ($(this).hasClass('on')) {
    //     $(this).removeClass('on');
    //     $('.Footer .ft_top .content>ul').eq(idx).removeClass('on')
    // } else {
    //     $(this).addClass('on').siblings().removeClass('on');
    //     $('.Footer .ft_top .content>ul').eq(idx).addClass('on').siblings().removeClass('on');
    // }


    LINK_LI.forEach((it, idx) => {
        it.addEventListener('click', () => {
            if (it.classList.contains('on')) {
                it.classList.remove('on');
                LINK_CON[idx].classList.remove('on');
            } else {
                LINK_LI.forEach(el => el.classList.remove('on'));
                it.classList.add('on');
                LINK_CON.forEach(el => el.classList.remove('on'));
                LINK_CON[idx].classList.add('on');
            }
        })
    });

    console.log(document.cookie);

    const COOKIE = document.cookie;
    if (!COOKIE) {
        document.querySelector('.popup').style.display = 'block';
    }

    document.querySelector('.popup button').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none';
    });

    // function setCookie(cname, cvalue, exdays) {
    //     const d = new Date();
    //     d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //     let expires = "expires="+ d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //   }

    // setCookie('name', 'popup', 1)

    document.querySelector('.popup input').addEventListener('change', () => {
        // setCookie('name', 'popup', 1)
        const date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "name=popup;" + expires + ";path=/";
        document.querySelector('.popup').style.display = 'none';
    });
});
