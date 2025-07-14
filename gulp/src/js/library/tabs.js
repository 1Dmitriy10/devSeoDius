// ================табы==================

let tabs = document.querySelectorAll("._tabs-js");



tabs.forEach(el => {
    el.addEventListener("click", (ev) => {
        let count = 1;
        let countTabs = 1;
        let titles = el.children[0].children;
        let items = el.children[1].children;
        for (const el of titles) {
            console.log(el.className)
            if (el.className == "tabs__title" || el.className == "tabs__title active") {
                el.dataset.number = `tab_${count} `;
                count++
            }

        }

        for (const el of items) {

            el.dataset.number = `tab_${countTabs} `;
            countTabs++
        }
        if (ev.target.className === "tabs__title") {
            let number = ev.target.dataset.number;
            getActiveTab(titles, items, number)
        }



    })
});


function getActiveTab(titles, items, number) {
    for (const el of items) {
        let item = el.dataset.number;
        el.classList.remove("active");
        if (number === item) {
            el.classList.add("active")
        }
    }

    for (const el of titles) {
        let item = el.dataset.number;
        el.classList.remove("active");
        if (number === item) {
            el.classList.add("active")
        }
    }
}

