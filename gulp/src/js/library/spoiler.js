// ======================================================Спойлер===================================
/*
<details>
    <summary class="_spoiler-js">Заголовок 1</summary>
    <p class="spoiler-content">
        Контент 1
    </p>
</details>
*/
export function spoiler() {
    //скорость анимации
    let timeAnimation = 300;
    //режим аккордеона
    let accordion = true;
    //Первый спойлер активный
    let firstOpen = true;

    $('.spoiler-content').slideUp();
    //Первый спойлер активный
    if (firstOpen) {
        $('details').first().attr("open", "");
        $('.spoiler-content').first().slideDown(timeAnimation);

    }

    $('._spoiler-js').click(function (e) {
        //режим аккордеона
        if (accordion) {

            if ($(this).parent().attr('open')) {
                e.preventDefault();
                let spoiler = $(this).parent();
                setTimeout(function () {
                    console.log($(this).parent())
                    spoiler.removeAttr('open');
                }, timeAnimation);
                $(this).removeClass('active');
                $('.spoiler-content').slideUp(timeAnimation);

            } else {
                $('details').removeAttr('open');
                $('summary').removeClass('active');
                $('.spoiler-content').slideUp(timeAnimation);
                $(this).siblings('.spoiler-content').slideDown(timeAnimation);
                $(this).addClass('active');
            }
            //основной режим    
        } else {

            if ($(this).parent().attr('open')) {
                e.preventDefault();
                let spoiler = $(this).parent();
                $(this).removeClass('active');
                $(this).siblings('.spoiler-content').slideUp(timeAnimation);
                setTimeout(function () {
                    spoiler.removeAttr('open');
                }, timeAnimation);

            } else {
                $(this).siblings('.spoiler-content').slideDown(timeAnimation);
                $(this).addClass('active');
            }
        }
    });
}
spoiler()
