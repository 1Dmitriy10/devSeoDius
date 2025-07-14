
// export class Masonry {

//     constructor(wrap) {

//         let check = document.querySelector(`.${wrap.class}`)
//         if (!check) {
//             return null;
//         }
//         // обертка
//         this.wrap = document.querySelector(`.${wrap.class}`);
//         // массив элементов
//         this.arrItems = [...this.wrap.children];
//         // Кол-во колонок 
//         this.cols = wrap.cols;
//         // Кол-во колонок 
//         this.countCols = 0;
//         // отступ по горизонтали
//         this.rowGap = wrap.rowGap;
//         // отступ по вертикали
//         this.colGap = wrap.colGap;
//         // брейкпоинты
//         this.breakpoints = wrap.breakpoints;
//         // первая строчка
//         this.firstRow = [];

//         this.setStyle()
//         this.checkMediaWidth()
//     }

//     setStyle() {
//         this.wrap.style.display = 'flex';
//         this.wrap.style.flexWrap = `wrap`;


//         this.arrItems.forEach(el => {
//             el.classList.add("fit-content")
//         })

//     }

//     checkMediaWidth() {
//         let count = Object.keys(this.breakpoints).length;
//         let arrBreakpoints = [];
//         let nowBreakpoint = "";

//         for (const key in this.breakpoints) {
//             arrBreakpoints.push(key)
//         }

//         arrBreakpoints = arrBreakpoints.reverse();

//         arrBreakpoints.forEach(el => {
//             var media = window.matchMedia(`(max-width: ${el}px)`)

//             if (media.matches) { // Если медиа запрос совпадает
//                 nowBreakpoint = el;
//             }
//         });

//         if (!this.breakpoints[nowBreakpoint]) {
//             this.countCols = this.cols;
//         } else {
//             this.countCols = this.breakpoints[nowBreakpoint];
//         }

//         this.switchCols()
//     }

//     switchCols() {
//         if (this.countCols == 1) {
//             this.arrItems.forEach(el => {
//                 el.style.cssText = `flex:0 1 calc(100%);`
//             })
//             this.wrap.style.rowGap = `${this.rowGap}px`;
//             this.wrap.style.columnGap = `${this.colGap}px`;
//         } else {
//             this.wrap.style.rowGap = `${this.rowGap}px`;
//             this.wrap.style.columnGap = `${this.colGap}px`;
//             this.arrItems.forEach(el => {
//                 el.style.cssText = `flex:0 1 calc((100% - ${this.countCols - 1} * ${this.colGap}px) / ${this.countCols});`
//             })

//             this.renderMasonry();
//         }
//     }

//     renderMasonry() {

//         for (let index = 0; index < this.countCols; index++) {
//             this.firstRow.push(this.wrap.children[index])
//         }

//         this.firstRow.forEach(el => {
//             el.dataset.height = `${el.offsetTop + el.offsetHeight}`;
//         })

//         for (let index = this.countCols; index < this.arrItems.length; index++) {
//             let oldHeight = this.arrItems[index - this.countCols].dataset.height
//             let newHeight = this.arrItems[index].offsetTop

//             this.arrItems[index].style.cssText = `margin-top:${(oldHeight - newHeight) + this.rowGap}px;
//                 flex:0 1 calc((100% - ${this.countCols - 1} * ${this.colGap}px) / ${this.countCols});
//              `

//             this.arrItems[index].dataset.height = `${this.arrItems[index].offsetTop + this.arrItems[index].offsetHeight}`;
//         }
//     }
// }

export class Masonry {
    constructor(wrap) {
        this.wrap = document.querySelector(`${wrap.class}`);
        if (!this.wrap) return null;

        // Инициализация свойств
        this.arrItems = Array.from(this.wrap.children);
        this.cols = wrap.cols || 3;
        this.countCols = 0;
        this.rowGap = wrap.rowGap || 0;
        this.colGap = wrap.colGap || 0;
        this.breakpoints = wrap.breakpoints || {};
        this.firstRow = [];
        this.resizeObserver = null;

        this.init();
    }

    init() {
        this.setStyles();
        this.setupResponsiveBehavior();
    }

    setStyles() {
        this.wrap.style.display = 'flex';
        this.wrap.style.flexWrap = 'wrap';
        this.wrap.style.rowGap = `${this.rowGap}px`;
        this.wrap.style.columnGap = `${this.colGap}px`;

        this.arrItems.forEach(el => {
            el.classList.add('fit-content');
        });
    }

    setupResponsiveBehavior() {
        this.updateColumnsCount();
        
        // Используем ResizeObserver для отслеживания изменений размеров
        this.resizeObserver = new ResizeObserver(() => {
            this.updateColumnsCount();
        });
        
        this.resizeObserver.observe(this.wrap);
    }

    updateColumnsCount() {
        const breakpoints = Object.keys(this.breakpoints)
            .map(Number)
            .sort((a, b) => b - a); // Сортируем по убыванию

        let activeBreakpoint = null;
        
        // Находим первый подходящий брейкпоинт
        for (const breakpoint of breakpoints) {
            if (window.innerWidth <= breakpoint) {
                activeBreakpoint = breakpoint;
            }
        }

        this.countCols = activeBreakpoint 
            ? this.breakpoints[activeBreakpoint] 
            : this.cols;

        this.applyLayout();
    }

    applyLayout() {
        if (this.countCols === 1) {
            this.arrItems.forEach(el => {
                el.style.flex = '0 1 100%';
                el.style.marginTop = '';
            });
        } else {
            this.arrItems.forEach(el => {
                el.style.flex = `0 1 calc((100% - ${this.countCols - 1} * ${this.colGap}px) / ${this.countCols})`;
                el.style.marginTop = '';
            });
            this.applyMasonryLayout();
        }
    }

    applyMasonryLayout() {
        // Очищаем предыдущие данные
        this.firstRow = [];
        
        // Получаем первую строку элементов
        for (let i = 0; i < this.countCols && i < this.arrItems.length; i++) {
            this.firstRow.push(this.arrItems[i]);
            this.arrItems[i].dataset.height = `${this.arrItems[i].offsetHeight}`;
        }

        // Применяем masonry эффект для остальных элементов
        for (let i = this.countCols; i < this.arrItems.length; i++) {
            const targetIndex = i - this.countCols;
            const targetHeight = parseFloat(this.arrItems[targetIndex].dataset.height);
            const currentTop = this.arrItems[i].offsetTop;
            
            // Вычисляем разницу в высоте и применяем margin-top
            const marginTop = (targetHeight - currentTop) + this.rowGap;
            this.arrItems[i].style.marginTop = `${marginTop}px`;
            
            // Сохраняем новую высоту с учетом margin
            this.arrItems[i].dataset.height = `${this.arrItems[i].offsetHeight + marginTop}`;
        }
    }

    // Метод для ручного обновления при динамическом изменении содержимого
    update() {
        this.arrItems = Array.from(this.wrap.children);
        this.updateColumnsCount();
    }

    // Очистка при уничтожении
    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
}

