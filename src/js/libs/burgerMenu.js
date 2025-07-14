import { BurgerMenu } from "../vendor/burgerMenu.js";

let mobMenu = new BurgerMenu({
    /*---Класс кнопки для открывания меню---*/
    openBtn: ".mob-nav-btn",
    /*---Класс кнопки для закрытия меню (если кнопка для откр/закр одна - то оставить пустой)---*/
    closeBtn: ".mob-nav__exit",
    /*---Иконка стрелки спойлера (svg или <i>)---*/
    arrowIcon: `
    <i class="icon-menu-down"></i>
    `,
    /*---Скорость анимации появления меню (0.3)---*/
    menuAnimationTime: "",
    /*---Скорость анимации спойлеров (0.3)---*/
    spoilersAnimationTime: "",
    /*---Режим аккордиона---*/
    spoilersAccordion: false,
    /*---Сторона открывания меню horizontal/vertical---*/
    openingSide: "horizontal",
    /*---Разрешение при котором появиться меню---*/
    mediaShow: "700px"

})