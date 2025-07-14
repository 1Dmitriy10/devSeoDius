// ==============слайдер Хиты продаж=================

const swiperBestseller = new Swiper('.stories__slider', {
    // Стрелки
    pagination: {
        el: '.stories__slider-pagination',
    },
    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,

    /*Брек-поинты*/
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 13,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 13,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 13,
        }
    },
})