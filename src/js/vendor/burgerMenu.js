// import $ from 'jquery';

// export class BurgerMenu {
//     constructor(menu) {
//         let check = document.querySelector(".mob-nav");

//         if (!check) {
//             return null;
//         }

//         this.mediaShow = menu.mediaShow ? menu.mediaShow : '';
//         this.menu = document.querySelector(`.${menu.openBtn}`);
//         this.openBtn = menu.openBtn;
//         this.closeBtn = menu.closeBtn ? menu.closeBtn : menu.openBtn;
//         this.menuAnimationTime = menu.menuAnimationTime ? menu.menuAnimationTime : 0.5;
//         this.spoilersAnimationTime = menu.spoilersAnimationTime ? menu.spoilersAnimationTime : 0.3;
//         this.spoilersAccordion = menu.spoilersAccordion ? menu.spoilersAccordion : false;
//         this.openingSide = menu.openingSide ? menu.openingSide : "horizontal";
//         this.arrowIcon = menu.arrowIcon;
//         this.menu = document.querySelector(".mob-nav");
//         this.setEvents();
//         this.getIconForSpoilers();
//         this.setTimeAnimations();
//         this.getSpoilersMenu();
//         this.showMenu();

//     }

//     setEvents() {
//         let openBtn = document.querySelector(`.${this.openBtn}`);
//         let closeBtn = document.querySelector(`.${this.closeBtn}`);

//         if (closeBtn.className == openBtn.className) {
//             openBtn.addEventListener("click", () => {
//                 this.togleMenu(openBtn);
//             })

//         } else {
//             openBtn.addEventListener("click", () => {
//                 this.openMenu(openBtn);
//             })

//             closeBtn.addEventListener("click", () => {
//                 this.closeMenu();
//             })
//         }
//     }

//     openMenu(openBtn) {
//         this.menu.classList.add("active");
//         openBtn.style.cssText = 'z-index:0';
//     }

//     closeMenu() {
//         this.menu.classList.remove("active")
//     }

//     togleMenu(openBtn) {
//         openBtn.style.cssText = `z-index:101`;
//         openBtn.classList.toggle("active")
//         this.menu.classList.toggle("active")
//     }

//     getIconForSpoilers() {
//         let menuItems = document.querySelectorAll(".mob-nav-item");
//         for (const el of menuItems) {
//             let subMenu = el.querySelector(".spoiler-content-menu");

//             if (subMenu) {
//                 el.insertAdjacentHTML("beforeend", this.renderArrow())
//             }

//         }
//     }

//     renderArrow() {
//         return `
//         <btn class='_spoiler-js-menu'>
//                     ${this.arrowIcon}
//                      </btn>
//         `
//     }

//     setTimeAnimations() {
//         this.menu.style.cssText = `
//         transition: ${this.menuAnimationTime}s
//         `
//         this.setOpeningSide();
//     }

//     setOpeningSide() {
//         if (this.openingSide == "horizontal") {
//             this.menu.classList.add("horizontal")
//         } else {
//             this.menu.classList.add("vertical")
//         }

//     }

//     // getSpoilersMenu() {
//     //     let timeAnimation = (this.spoilersAnimationTime * 1000);
//     //     let accordion = this.spoilersAccordion;
//     //     //Первый спойлер активный
//     //     // let firstOpen = false;

//     //     $('.spoiler-content-menu').slideUp();
//     //     //Первый спойлер активный
//     //     // if (firstOpen) {
//     //     //     $('details').first().attr("open", "");
//     //     //     $('.spoiler-content-menu').first().slideDown(timeAnimation);

//     //     // }

//     //     $('._spoiler-js-menu').click(function (e) {
//     //         //режим аккордеона
//     //         if (accordion) {
//     //             if ($(this).attr('class') == '_spoiler-js-menu active') {
//     //                 $('.spoiler-content-menu').slideUp(timeAnimation);
//     //                 $(this).removeClass('active');
//     //             } else {
//     //                 $('.spoiler-content-menu').slideUp(timeAnimation).css("display", "none");
//     //                 $('._spoiler-js-menu').removeClass('active');
//     //                 $(this).siblings('.spoiler-content-menu').slideDown(timeAnimation);
//     //                 $(this).addClass('active');
//     //             }


//     //             //основной режим    
//     //         } else {

//     //             if ($(this).attr('class') == '_spoiler-js-menu active') {
//     //                 let spoiler = $(this).parent();
//     //                 $(this).removeClass('active');
//     //                 $(this).siblings('.spoiler-content-menu').slideUp(timeAnimation);


//     //             } else {
//     //                 $(this).siblings('.spoiler-content-menu').slideDown(timeAnimation);
//     //                 $(this).addClass('active');
//     //             }
//     //         }
//     //     });
//     // }

// getSpoilersMenu() {
//     const timeAnimation = this.spoilersAnimationTime * 1000;
//     const accordion = this.spoilersAccordion;

//     // Закрываем все спойлеры (аналог slideUp)
//     document.querySelectorAll('.spoiler-content-menu').forEach(content => {
//         this.slideUp(content, timeAnimation);
//     });

//     // Назначаем обработчики клика
//     document.querySelectorAll('._spoiler-js-menu').forEach(spoiler => {
//         spoiler.addEventListener('click', (e) => {
//             const content = spoiler.parentElement.querySelector(".spoiler-content-menu");
//             console.log(spoiler)
            
//             // Режим аккордеона
//             if (accordion) {
//                 if (spoiler.classList.contains('active')) {
//                     // Закрываем все спойлеры
//                     document.querySelectorAll('.spoiler-content-menu').forEach(item => {
//                         this.slideUp(item, timeAnimation);
//                     });
//                     spoiler.classList.remove('active');
//                 } else {
//                     // Закрываем все, затем открываем текущий
//                     document.querySelectorAll('.spoiler-content-menu').forEach(item => {
//                         this.slideUp(item, timeAnimation);
//                         item.style.display = 'none'; // Аналог .css("display", "none")
//                     });
//                     document.querySelectorAll('._spoiler-js-menu').forEach(item => {
//                         item.classList.remove('active');
//                     });
//                     this.slideDown(content, timeAnimation);
//                     spoiler.classList.add('active');
//                 }
//             }
//             // Основной режим
//             else {
//                 if (spoiler.classList.contains('active')) {
//                     spoiler.classList.remove('active');
//                     this.slideUp(content, timeAnimation);
//                 } else {
//                     this.slideDown(content, timeAnimation);
//                     spoiler.classList.add('active');
//                 }
//             }
//         });
//     });
// }

// // Методы slideUp и slideDown (если их нет в классе)
// slideUp(element, duration) {
//         const height = element.scrollHeight;
//         element.style.overflow = 'hidden';
//         element.style.height = `${height}px`;
//         element.style.transition = `height ${duration}ms ease`;

//         setTimeout(() => {
//             element.style.height = '0';
//         }, 10);

//         setTimeout(() => {
//             element.style.display = 'none';
//             element.style.height = '';
//             element.style.overflow = '';
//             element.style.transition = '';
//         }, duration + 10);
//     }

// slideDown(element, duration) {
//         element.style.display = 'block';
//         const height = element.scrollHeight;
//         element.style.overflow = 'hidden';
//         element.style.height = '0';
//         element.style.transition = `height ${duration}ms ease`;

//         setTimeout(() => {
//             element.style.height = `${height}px`;
//         }, 10);

//         setTimeout(() => {
//             element.style.display = 'block';
//             element.style.height = '';
//             element.style.overflow = '';
//             element.style.transition = '';
//         }, duration + 10);
//     }

//     showMenu() {
//         if (this.mediaShow) {
//             let mediaShow = window.matchMedia(`(max-width: ${this.mediaShow})`);
//             let btn = document.querySelector(`.${this.openBtn}`)
//             if (mediaShow.matches) {
//                 btn.classList.add("show")
//             } else {
//                 btn.classList.remove("show")
//             }
//             window.addEventListener('resize', () => {
//                 let mediaShow = window.matchMedia(`(max-width: ${this.mediaShow})`);
//                 let btn = document.querySelector(`.${this.openBtn}`)
//                 if (mediaShow.matches) {
//                     btn.classList.add("show")
//                 } else {
//                     btn.classList.remove("show")
//                 }
//             })
//         }
//     }
// }

export class BurgerMenu {
    constructor(menu) {
        if (!document.querySelector(".mob-nav")) return null;

        this.mediaShow = menu.mediaShow || '';
        this.openBtn = menu.openBtn;
        this.closeBtn = menu.closeBtn || menu.openBtn;
        this.menuAnimationTime = menu.menuAnimationTime || 0.5;
        this.spoilersAnimationTime = menu.spoilersAnimationTime || 0.3;
        this.spoilersAccordion = menu.spoilersAccordion || false;
        this.openingSide = menu.openingSide || "horizontal";
        this.arrowIcon = menu.arrowIcon;
        this.menu = document.querySelector(".mob-nav");

        this.init();
    }

    init() {
        this.setEvents();
        this.getIconForSpoilers();
        this.setTimeAnimations();
        this.getSpoilersMenu();
        this.showMenu();
    }

    setEvents() {
        const openBtn = document.querySelector(`${this.openBtn}`);
        const closeBtn = document.querySelector(`${this.closeBtn}`);

        if (closeBtn.className === openBtn.className) {
            openBtn.addEventListener("click", () => this.toggleMenu(openBtn));
        } else {
            openBtn.addEventListener("click", () => this.openMenu(openBtn));
            closeBtn.addEventListener("click", () => this.closeMenu());
        }
    }

    openMenu(openBtn) {
        this.menu.classList.add("active");
        openBtn.style.zIndex = '0';
    }

    closeMenu() {
        this.menu.classList.remove("active");
    }

    toggleMenu(openBtn) {
        openBtn.style.zIndex = '101';
        openBtn.classList.toggle("active");
        this.menu.classList.toggle("active");
    }

    getIconForSpoilers() {
        document.querySelectorAll(".mob-nav-item").forEach(el => {
            if (el.querySelector(".spoiler-content-menu")) {
                el.insertAdjacentHTML("beforeend", this.renderArrow());
            }
        });
    }

    renderArrow() {
        return `<btn class='_spoiler-js-menu'>${this.arrowIcon}</btn>`;
    }

    setTimeAnimations() {
        this.menu.style.transition = `${this.menuAnimationTime}s`;
        this.setOpeningSide();
    }

    setOpeningSide() {
        this.menu.classList.add(this.openingSide === "horizontal" ? "horizontal" : "vertical");
    }

    getSpoilersMenu() {
        const timeAnimation = this.spoilersAnimationTime * 1000;
        const spoilers = document.querySelectorAll('._spoiler-js-menu');

        document.querySelectorAll('.spoiler-content-menu').forEach(content => {
            this.slideUp(content, timeAnimation);
        });

        spoilers.forEach(spoiler => {
            spoiler.addEventListener('click', () => {
                const content = spoiler.parentElement.querySelector(".spoiler-content-menu");
                
                if (this.spoilersAccordion) {
                    this.handleAccordion(spoiler, content, timeAnimation);
                } else {
                    this.handleDefault(spoiler, content, timeAnimation);
                }
            });
        });
    }

    handleAccordion(spoiler, content, timeAnimation) {
        const isActive = spoiler.classList.contains('active');
        
        document.querySelectorAll('.spoiler-content-menu').forEach(item => {
            this.slideUp(item, timeAnimation);
            if (isActive) item.style.display = 'none';
        });
        
        document.querySelectorAll('._spoiler-js-menu').forEach(item => {
            item.classList.remove('active');
        });
        
        if (!isActive) {
            this.slideDown(content, timeAnimation);
            spoiler.classList.add('active');
        }
    }

    handleDefault(spoiler, content, timeAnimation) {
        if (spoiler.classList.contains('active')) {
            spoiler.classList.remove('active');
            this.slideUp(content, timeAnimation);
        } else {
            this.slideDown(content, timeAnimation);
            spoiler.classList.add('active');
        }
    }

    slideUp(element, duration) {
        const height = element.scrollHeight;
        element.style.cssText = `
            overflow: hidden;
            height: ${height}px;
            transition: height ${duration}ms ease;
        `;

        setTimeout(() => {
            element.style.height = '0';
        }, 10);

        setTimeout(() => {
            element.style.cssText = 'display: none';
        }, duration + 10);
    }

    slideDown(element, duration) {
        element.style.display = 'block';
        const height = element.scrollHeight;
        element.style.cssText = `
            overflow: hidden;
            height: 0;
            transition: height ${duration}ms ease;
        `;

        setTimeout(() => {
            element.style.height = `${height}px`;
        }, 10);

        setTimeout(() => {
            element.style.cssText = 'display: block';
        }, duration + 10);
    }

    showMenu() {
        if (!this.mediaShow) return;

        const checkVisibility = () => {
            const btn = document.querySelector(`${this.openBtn}`);
            btn?.classList.toggle("show", window.matchMedia(`(max-width: ${this.mediaShow})`).matches);
        };

        checkVisibility();
        window.addEventListener('resize', checkVisibility);
    }
}

