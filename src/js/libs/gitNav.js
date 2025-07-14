export function gitNav() {
    let block = document.querySelector(".git-nav-box");
    
    block.addEventListener("click", function() {
        block.classList.toggle("show");
    })
    };
    gitNav();