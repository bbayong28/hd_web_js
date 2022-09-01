//window.addEventListener('DOMContentLoaded', () => {});
//$(function () { });

//js -> document.querySelector('.Wrap').style.color = 'red'
//jquery -> $('.Wrap').css("color","red")  /  $('.Wrap').css({color:'red'})

//js -> document.querySelectorAll('.top_close_btn').addEventListener('click', function () {});
//jquery -> $('.top_close_btn').on('click', function () {});

window.addEventListener('DOMContentLoaded', () => {

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

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');
    });



    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        on: {
            init: function () {
                console.log(this.slides.length - 2);
                const current = document.querySelector('.swiper-slide-active');
                current.classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });
    
    const tatalslide = document.querySelectorAll('.swiper-slide');
    const slideDots = document.querySelectorAll('.slide_dots li');

    MAINSLIDE.on('slideChangeTransitionEnd', function () {
        //1. 번호찍는거
        //2. 지금 슬라이드에 class 붙이는거
        const current = document.querySelector('.swiper-slide-active');
        tatalslide.forEach(it => it.classList.remove('on'));
        current.classList.add('on')
        console.log(tatalslide, current, this.realIndex);
        let count = this.realIndex; // 0 1 2
        slideDots.forEach(it => it.classList.remove('on'))
        slideDots[count].classList.add('on');
        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
    });

    document.querySelector('.slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });

    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });


    // slideDots.forEach((it, idx) => {
    //     it.addEventListener('click', () => {
    //         console.log(idx);
    //         MAINSLIDE.slideTo(idx + 1, 600);
    //     slideDots.forEach((ele) => {
    //         ele.classList.remove("on");
    //     });
    //     it.classList.add("on");
    //     });
    // });







    ///////////////////////////////////////////////////

});

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

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');

    });

    const MAINSLIDE = new Swiper('.main_slider', {
        loop: true,
        on: {
            init: function () {
                console.log(this.slides.length - 2);
                const current = document.querySelector('.swiper-slide-active');
                current.classList.add('on');
                document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
            }
        }
    });

    const tatalslide = document.querySelectorAll('.swiper-slide');
    const slideDots = document.querySelectorAll('.slide_dots li');

    MAINSLIDE.on('slideChangeTransitionEnd', function () {
        const current = document.querySelector('.swiper-slide-active');
        tatalslide.forEach(it => it.classList.remove('on'));
        current.classList.add('on')
        console.log(tatalslide, current, this.realIndex);
        let count = this.realIndex; // 0 1 2
        slideDots.forEach(it => it.classList.remove('on'))
        slideDots[count].classList.add('on');
        document.querySelector('.main_slider_num').innerHTML = (this.realIndex + 1) + " / <span>" + (this.slides.length - 2);
    });

    document.querySelector('.slide_handler .next').addEventListener('click', () => {
        MAINSLIDE.slideNext();
    });
    document.querySelector('.slide_handler .prev').addEventListener('click', () => {
        MAINSLIDE.slidePrev();
    });

    slideDots.forEach((it, idx) => {
        it.addEventListener('click', () => {
            console.log(idx);
            MAINSLIDE.slideTo(idx + 1, 600)
        })
    });






});