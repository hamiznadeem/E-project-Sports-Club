
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 6,
    centeredSlides: false,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1500:{
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1200:{
            slidesPerView: 5,
            spaceBetween: 0,
        },
        // when window width is <= 992px
        992: {
            spaceBetween: 0,
            slidesPerView: 4,
        },
        // when window width is <= 768px
        768: {
            spaceBetween: 0,
            slidesPerView: 3,
        },
        // when window width is <= 576px
        576: {
            spaceBetween: 0,
            slidesPerView: 2,
        },
        476: {
            spaceBetween: 0,
            slidesPerView: 2,
        },
        365: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
    }
});
