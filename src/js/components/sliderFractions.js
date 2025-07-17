export function sliderFractions() {
    let slider = document.querySelector(".how-we-work__slider");
    let count = 1;
    if(!slider){return null};

    let itemsWrap = slider.querySelectorAll(".how-we-work__card-fraction");

    itemsWrap.forEach(el=>{
        el.innerHTML = `${count}`;
        count++;
    })
};
sliderFractions();