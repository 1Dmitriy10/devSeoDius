{/* 
    если буллеты не нужны скрыть их через css
    <div class="keen-slider">
        <div class="keen-slider__slide">1</div>
        <div class="keen-slider__slide">2</div>
        <div class="keen-slider__slide">3</div>
        <div class="keen-slider__slide">4</div>
        <div class="keen-slider__slide">5</div>
        <div class="keen-slider__slide">6</div>
    </div> 
*/}

import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

const slider = new KeenSlider('.keen-slider', {
    // кол-во слайдеров и отступ между ними [есть еще "auto"]
    loop: true,
    slides: {
        // центрирование слайда
        // origin: "center",
        perView: 3,
        spacing: 20,
    },
    // // Бесконечная прокрутка

    // Брейкпоинты
    breakpoints: {
        '(min-width: 500px)': {
            // loop: false,
        },

    },
},
    [
        // Автоплей
        (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 2000)
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
        // Навигация
        (slider) => {

            let wrapper, dots, arrowLeft, arrowRight

            function markup(remove) {
                wrapperMarkup(remove)
                dotMarkup(remove)
                arrowMarkup(remove)
            }

            function removeElement(elment) {
                elment.parentNode.removeChild(elment)
            }
            function createDiv(className) {
                var div = document.createElement("div")
                var classNames = className.split(" ")
                classNames.forEach((name) => div.classList.add(name))
                return div
            }

            function arrowMarkup(remove) {
                if (remove) {
                    removeElement(arrowLeft)
                    removeElement(arrowRight)
                    return
                }
                arrowLeft = createDiv("arrow arrow--left")
                arrowLeft.addEventListener("click", () => slider.prev())
                arrowRight = createDiv("arrow arrow--right")
                arrowRight.addEventListener("click", () => slider.next())

                wrapper.appendChild(arrowLeft)
                wrapper.appendChild(arrowRight)
            }

            function wrapperMarkup(remove) {
                if (remove) {
                    var parent = wrapper.parentNode
                    while (wrapper.firstChild)
                        parent.insertBefore(wrapper.firstChild, wrapper)
                    removeElement(wrapper)
                    return
                }
                wrapper = createDiv("navigation-wrapper")
                slider.container.parentNode.appendChild(wrapper)
                wrapper.appendChild(slider.container)
            }

            function dotMarkup(remove) {
                if (remove) {
                    removeElement(dots)
                    return
                }
                dots = createDiv("dots")
                slider.track.details.slides.forEach((_e, idx) => {
                    var dot = createDiv("dot")
                    dot.addEventListener("click", () => slider.moveToIdx(idx))
                    dots.appendChild(dot)
                })
                wrapper.appendChild(dots)
            }

            function updateClasses() {
                var slide = slider.track.details.rel
                if (arrowLeft) {
                    slide === 0
                        ? arrowLeft.classList.add("arrow--disabled")
                        : arrowLeft.classList.remove("arrow--disabled")
                }
                if (arrowRight) {
                    slide === slider.track.details.slides.length - 1
                        ? arrowRight.classList.add("arrow--disabled")
                        : arrowRight.classList.remove("arrow--disabled")
                }

                if (dots) {
                    Array.from(dots.children).forEach(function (dot, idx) {
                        idx === slide
                            ? dot.classList.add("dot--active")
                            : dot.classList.remove("dot--active")
                    })
                }

            }

            slider.on("created", () => {
                markup()
                updateClasses()
            })
            slider.on("optionsChanged", () => {
                markup(true)
                markup()
                updateClasses()
            })
            slider.on("slideChanged", () => {
                updateClasses()
            })
            slider.on("destroyed", () => {
                markup(true)
            })
        }

    ]
);
