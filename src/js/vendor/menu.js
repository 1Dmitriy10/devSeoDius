// export class Menu {
//     constructor(options) {
//         let check = document.querySelector(`.${options.class}`)

//         if (!check) {

//             return null;
//         }

//         this.mediaHidden = options.mediaHidden ? options.mediaHidden : '';
//         this.classMenu = document.querySelector(`.${options.class}`);
//         this.blockMenu = document.querySelector(`.${options.class}`);
//         this.items = document.querySelectorAll(`.${options.class}>li`);
//         this.menuItems = [...this.items];
//         this.screenWidth = window.innerWidth;
//         this.typeMenu = options.TypMenu;
//         this.opacityMenuBlock = '';
//         this.opacityMenuWrap = '';
//         this.opacityMenuItems = [];
//         this.checkOpacityItem = options.opacityItem ? this.firstRenderOpacityItem() : options.opacityItem;
//         this.firstRender();
//         this.checkSubMenuWrap = options.solutionForSubmenu ? this.getSolutionForSubmenu() : "";
//         this.arrowSubmenu = options.arrowSubmenu ? options.arrowSubmenu : "";
//         this.addArrowSubmenu();
//         this.hiddenMenu();
//         this.selectTypeMenu();

//     }

//     firstRenderOpacityItem() {
//         this.classMenu.insertAdjacentHTML("beforeend", `
//                     <li class="nav__item-wrap" style="display: none;">
//                         <div class="nav__item-opacity-wrap">
//                             <!-- icon666.com - MILLIONS vector ICONS FREE --><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                                 <g id="ellipsis">
//                                     <path d="m6 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
//                                     <path d="m16 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
//                                     <path d="m26 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
//                                 </g>
//                             </svg>
//                         </div>
//                         <!-- список скрытых элементов меню -->
//                         <ul class="nav__item-opacity"></ul>
//                     </li>
//             `);

//         this.opacityMenuBlock = this.classMenu.querySelector(".nav__item-wrap");
//         this.opacityMenuWrap = this.classMenu.querySelector(".nav__item-opacity");
//     }

//     firstRender() {

//         //начальные координаты элемента меню
//         const positionStart = this.menuItems[0].getBoundingClientRect().top;
//         for (let ix = 0; ix < this.menuItems.length; ix++) {
//             //координаты элемента меню
//             let item = this.menuItems[ix].getBoundingClientRect().top;
//             //если элемент на другой строчке
//             if (item != positionStart) {
//                 this.opacityMenuItems.push(this.menuItems.pop());
//             }
//         }
//         this.renderOpacityBlock();
//         this.watchWidth()


//     }

//     renderOpacityBlock() {
        
//         if (this.opacityMenuItems.length != 0) {
//             this.opacityMenuBlock.style.cssText = `display: flex`;
//             //проверяем на одной ли строке все элементы
//             for (let index = this.menuItems.length - 1; index >= 0; index--) {
//                 const positionStart = this.menuItems[0].getBoundingClientRect().top;
//                 let item = this.opacityMenuBlock.getBoundingClientRect().top;
//                 //если нет, убираем еще один элемент
//                 if (item != positionStart) {
//                     //записываю в скрытый массив
//                     this.opacityMenuItems.push(this.menuItems.pop());
//                     this.renderMenu()
//                 }
//             }
//         } else {
//             if(this.opacityMenuBlock){
//                 this.opacityMenuBlock.style.cssText = `display: none;`
//                             }
//         }
//     }

//     renderMenu() {
//         // отрисовка основного меню
//         this.blockMenu.innerHTML = "";
//         this.menuItems.forEach(el => {
//             if (el.children[1]) {
//                 if (el.children[1].className == 'nav__item-opacity-wrap') {
//                     el.children[1].remove();
//                 }
//             }
//             if (el.children[2]) {
//                 if (el.children[2].className == 'nav__item-opacity-wrap') {
//                     el.children[2].remove();
//                 }
//             }
//             this.blockMenu.insertAdjacentElement("beforeend", el)
//         });
//         this.blockMenu.insertAdjacentElement("beforeend", this.opacityMenuBlock)
//         //отрисовка скрытого меню
//         this.opacityMenuWrap.innerHTML = "";
//         this.opacityMenuItems.forEach(el => {
//             this.opacityMenuWrap.insertAdjacentElement("beforeend", el)
//         });
//     }

//     hiddenMenu() {
//         if (this.mediaHidden) {
//             let mediaOf = window.matchMedia(`(max-width: ${this.mediaHidden})`);
//             if (mediaOf.matches) {
//                 this.classMenu.classList.add("hidden")
//             } else {
//                 this.classMenu.classList.remove("hidden")
//             }
//             window.addEventListener('resize', () => {
//                 let mediaOf = window.matchMedia(`(max-width: ${this.mediaHidden})`);
//                 if (mediaOf.matches) {
//                     this.classMenu.classList.add("hidden")
//                 } else {
//                     this.classMenu.classList.remove("hidden")
//                 }
//             })
//         }
//     }

//     watchWidth() {
//         window.addEventListener('resize', () => {
//             const positionStart = this.menuItems[0].getBoundingClientRect().top;
//             let newWidth = window.innerWidth;
//             for (let index = 0; index < this.menuItems.length; index++) {
//                 let item = this.menuItems[index].getBoundingClientRect().top;
//                 //если элемент перескочил на следующую строчку
//                 if (item != positionStart) {
//                     //записываю в скрытый массив
//                     this.opacityMenuItems.push(this.menuItems.pop());
//                     //удаляю этот элемент из массива
//                     this.renderMenu()
//                 }
//             }
//             //если ширина экрана увеличивается
//             if (newWidth > this.screenWidth) {
//                 for (let index = this.opacityMenuItems.length - 1; index >= 0; index--) {
//                     //добавляю элемент в массив
//                     this.menuItems.push(this.opacityMenuItems.pop());
//                     //отрисовываю
//                     this.renderMenu();

//                     const positionStart = this.menuItems[0].getBoundingClientRect().top;
//                     let item = this.menuItems[this.menuItems.length - 1].getBoundingClientRect().top;
//                     //проверяю помещается ли он на 1 строке
//                     if (item != positionStart) {
//                         //скрыл элемент
//                         this.opacityMenuItems.push(this.menuItems.pop());
//                         this.renderMenu()
//                     }
//                 }
//             }
//             // новая ширина экрана
//             this.screenWidth = window.innerWidth;
//             this.renderOpacityBlock();
//         })
//     }

//     getSolutionForSubmenu() {
//         let subMenuWrap = this.classMenu.querySelector(".sub-menu-wrap")
//         this.opacityMenuItems.forEach(el => {
//             el.addEventListener("mouseenter", function () {
//                 let item = el.querySelector(".sub-menu");
//                 if(subMenuWrap) {
// subMenuWrap.innerHTML = "";
//                 if (item) {
//                     item.addEventListener("mouseenter", function () {
//                         subMenuWrap.innerHTML = "";
//                     });
//                     subMenuWrap.addEventListener("mouseleave", function () {
//                         subMenuWrap.innerHTML = ""
//                     })
//                     subMenuWrap.insertAdjacentElement("beforeend", item.cloneNode(true));
//                 }
//                 }
//             })
//         })
//     }

//     addArrowSubmenu() {
//         let items = this.blockMenu.querySelectorAll('li');
//         for (const el of items) {
//             let check = el.querySelector('.sub-menu');
//             if (check && !el.classList.contains("nav__item-wrap")) {
//                 el.insertAdjacentHTML("beforeend", `
//                     <btn class='drop-menu'>
//                     ${this.arrowSubmenu}
//                     </btn>
//                     `)
//             }

//         }
//     }

//     selectTypeMenu() {
//         let submenu = this.classMenu.querySelectorAll(".sub-menu");
//         switch (this.typeMenu) {
//             case "container":
//                 break;
//             case "full":

//                 getFullMenu(submenu);
//                 break;
//             case "item":
//                 getItemMenu(submenu);
//                 break;
//         }

//         function getFullMenu(submenu) {
//             submenu.forEach(el => {
//                 el.classList.add('full')

//             })
//         }

//         function getItemMenu() {
//             submenu.forEach(el => {
//                 el.classList.add('item')
//                 el.parentElement.classList.add('item')
//             })
//         }
//     }
// }

export class Menu {
    constructor(options) {
        this.classMenu = document.querySelector(`${options.class}`);
        if (!this.classMenu) return null;

        // Инициализация свойств
        this.mediaHidden = options.mediaHidden || '';
        this.blockMenu = this.classMenu;
        this.items = Array.from(this.classMenu.children);
        this.screenWidth = window.innerWidth;
        this.typeMenu = options.TypMenu;
        this.arrowSubmenu = options.arrowSubmenu || "";
        this.hasOpacityItems = options.opacityItem || false;
        this.hasSubmenuSolution = options.solutionForSubmenu || false;

        // Инициализация элементов прозрачности
        if (this.hasOpacityItems) {
            this.initOpacityItems();
        }

        this.firstRender();
        
        if (this.hasSubmenuSolution) {
            this.initSubmenuSolution();
        }

        this.addArrowSubmenu();
        this.setupMediaQueries();
        this.selectTypeMenu();
    }

    initOpacityItems() {
        this.classMenu.insertAdjacentHTML("beforeend", `
            <li class="nav__item-wrap" style="display: none;">
                <div class="nav__item-opacity-wrap">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
                        <path d="m16 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
                        <path d="m26 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
                    </svg>
                </div>
                <ul class="nav__item-opacity"></ul>
            </li>
        `);

        this.opacityMenuBlock = this.classMenu.querySelector(".nav__item-wrap");
        this.opacityMenuWrap = this.classMenu.querySelector(".nav__item-opacity");
        this.opacityMenuItems = [];
    }

    firstRender() {
        if (!this.hasOpacityItems) return;

        const positionStart = this.items[0].getBoundingClientRect().top;
        this.menuItems = this.items.filter(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop !== positionStart) {
                this.opacityMenuItems.push(item);
                return false;
            }
            return true;
        });

        this.updateMenuLayout();
        this.setupResizeObserver();
    }

    updateMenuLayout() {
        if (!this.hasOpacityItems) return;

        if (this.opacityMenuItems.length > 0) {
            this.opacityMenuBlock.style.display = 'flex';
            
            // Проверяем, все ли элементы на одной строке
            for (let i = this.menuItems.length - 1; i >= 0; i--) {
                const positionStart = this.menuItems[0].getBoundingClientRect().top;
                const itemTop = this.opacityMenuBlock.getBoundingClientRect().top;
                
                if (itemTop !== positionStart) {
                    this.opacityMenuItems.push(this.menuItems.pop());
                    this.renderMenu();
                }
            }
        } else if (this.opacityMenuBlock) {
            this.opacityMenuBlock.style.display = 'none';
        }
    }

    renderMenu() {
        if (!this.hasOpacityItems) return;

        // Очищаем и перерисовываем основное меню
        this.blockMenu.innerHTML = '';
        this.menuItems.forEach(item => {
            // Удаляем возможные дубликаты элементов прозрачности
            Array.from(item.children).forEach(child => {
                if (child.classList.contains('nav__item-opacity-wrap')) {
                    child.remove();
                }
            });
            this.blockMenu.appendChild(item);
        });

        // Добавляем блок скрытых элементов
        if (this.opacityMenuBlock) {
            this.blockMenu.appendChild(this.opacityMenuBlock);
        }

        // Очищаем и перерисовываем скрытое меню
        this.opacityMenuWrap.innerHTML = '';
        this.opacityMenuItems.forEach(item => {
            this.opacityMenuWrap.appendChild(item);
        });
    }

    setupMediaQueries() {
        if (!this.mediaHidden) return;

        const mediaQuery = window.matchMedia(`(max-width: ${this.mediaHidden})`);
        const updateVisibility = () => {
            this.classMenu.classList.toggle('hidden', mediaQuery.matches);
        };

        updateVisibility();
        mediaQuery.addListener(updateVisibility);
    }

    setupResizeObserver() {
        if (!this.hasOpacityItems) return;

        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const positionStart = this.menuItems[0]?.getBoundingClientRect().top;
                const newWidth = window.innerWidth;

                // Проверяем элементы на переполнение
                for (let i = 0; i < this.menuItems.length; i++) {
                    const itemTop = this.menuItems[i].getBoundingClientRect().top;
                    if (itemTop !== positionStart) {
                        this.opacityMenuItems.push(this.menuItems.pop());
                        this.renderMenu();
                        break;
                    }
                }

                // Если ширина увеличилась, пробуем вернуть элементы
                if (newWidth > this.screenWidth) {
                    for (let i = this.opacityMenuItems.length - 1; i >= 0; i--) {
                        this.menuItems.push(this.opacityMenuItems.pop());
                        this.renderMenu();

                        const firstItemTop = this.menuItems[0].getBoundingClientRect().top;
                        const lastItemTop = this.menuItems[this.menuItems.length - 1].getBoundingClientRect().top;
                        
                        if (lastItemTop !== firstItemTop) {
                            this.opacityMenuItems.push(this.menuItems.pop());
                            this.renderMenu();
                            break;
                        }
                    }
                }

                this.screenWidth = newWidth;
                this.updateMenuLayout();
            }, 100);
        };

        window.addEventListener('resize', handleResize);
    }

    initSubmenuSolution() {
        const subMenuWrap = this.classMenu.querySelector(".sub-menu-wrap");
        if (!subMenuWrap) return;

        this.opacityMenuItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                const subMenu = item.querySelector(".sub-menu");
                if (!subMenu) return;

                subMenuWrap.innerHTML = "";
                subMenuWrap.appendChild(subMenu.cloneNode(true));

                subMenu.addEventListener("mouseenter", () => {
                    subMenuWrap.innerHTML = "";
                });

                subMenuWrap.addEventListener("mouseleave", () => {
                    subMenuWrap.innerHTML = "";
                });
            });
        });
    }

    addArrowSubmenu() {
        if (!this.arrowSubmenu) return;

        const items = this.blockMenu.querySelectorAll('li:not(.nav__item-wrap)');
        items.forEach(item => {
            if (item.querySelector('.sub-menu')) {
                item.insertAdjacentHTML("beforeend", `
                    <button class="drop-menu" aria-expanded="false">
                        ${this.arrowSubmenu}
                    </button>
                `);
            }
        });
    }

    selectTypeMenu() {
        const submenus = this.classMenu.querySelectorAll(".sub-menu");
        if (!submenus.length) return;

        switch (this.typeMenu) {
            case "full":
                submenus.forEach(menu => menu.classList.add('full'));
                break;
            case "item":
                submenus.forEach(menu => {
                    menu.classList.add('item');
                    menu.parentElement.classList.add('item');
                });
                break;
            // case "container" - ничего не делаем
        }
    }
}