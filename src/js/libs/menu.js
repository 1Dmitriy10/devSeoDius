import { Menu } from "../vendor/menu.js"

let menu = new Menu({
    /*Класс меню */
    class: '.nav-list',
    /*Добавление не помещающихся элементов меню в специальный контейнер*/
    opacityItem: true,
    /*Тип меню full,container,item*/
    TypMenu: "item",
    /*Обертка для подменю скрытых элементов
    Разместить в нужном месте <div class="sub-menu-wrap"></div>*/
    solutionForSubmenu: true,
    /*Когда скрыть меню*/
    mediaHidden: "768px",
    /*Стрелка для выпадающего меню (svg/i)*/
    arrowSubmenu: `
            <i class="icon-menu-down"></i>
`
})

let menuSticky = new Menu({
    /*Класс меню */
    class: '.nav-list-sticky',
    /*Добавление не помещающихся элементов меню в специальный контейнер*/
    opacityItem: true,
    /*Тип меню full,container,item*/
    TypMenu: "item",
    /*Обертка для подменю скрытых элементов
    Разместить в нужном месте <div class="sub-menu-wrap-sticky"></div>*/
    solutionForSubmenu: true,
    /*Когда скрыть меню*/
    mediaHidden: "768",
    /*Стрелка для выпадающего меню (svg/i)*/
    arrowSubmenu: `
            <i class="icon-menu-down"></i>
`
})

