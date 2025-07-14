// ==============слайдер Наша=================

const swiperLife = new Swiper('.life__slider', {
    // Стрелки
    pagination: {
        el: '.life__slider-pagination',
    },
    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,

    /*Брек-поинты*/
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 13,
        }
    },
})