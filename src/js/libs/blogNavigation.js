export function blogNavigation() {
    function getLinkSidbar() {
    
        let pageUrl = window.location.href;
        let media = window.matchMedia('(max-width: 992px)')


        if (pageUrl.includes('/dz.contacc2.beget.tech/blog/')) {
            let block = $(".blog-article__aside-nav-list");
            let arrLink = $(".blog-article>h2");

            arrLink.each(function () {
                if ($(this).attr("id") != "") {
                    let name = $(this).text();
                    if (name != "") {
                        let id = translit(name);
                        $(this).attr("id", `${id}`)
                    }
                }
            })




            arrLink.each(function () {
                block.append(`
                        <li class="aside__list-item">
                        <a href="#${$(this).attr("id")}" class="aside__list-link">${$(this).text()}</a>
                        </li>
                        `)
            })

            $(".aside__list-link").on("click", function (event) {
                event.preventDefault();
                let id = $(this).attr('href')
                $(`${id}`)[0].scrollIntoView();
            })
        }

        if (media.match) {

        } else {
            $(".nav_show").on("click", function () {
                $(".news-aside__title-wrap").toggleClass("active")
                $(".news-aside").toggleClass("show");
            })
        }



    };
    getLinkSidbar();

    function translit(word) {
        var answer = '';
        var converter = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
            'ш': 'sh', 'щ': 'sch', 'ь': '_', 'ы': 'y', 'ъ': '_',
            'э': 'e', 'ю': 'yu', 'я': 'ya', ' ': '_',

            'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
            'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
            'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
            'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
            'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
            'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '_', 'Ы': 'Y', 'Ъ': '_',
            'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
        };

        for (var i = 0; i < word.length; ++i) {
            if (converter[word[i]] == undefined) {
                answer += word[i];
            } else {
                answer += converter[word[i]];
            }
        }

        return answer;
    }
};
blogNavigation();