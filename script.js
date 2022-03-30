$('.carousel .carousel-item').each(function () {
    let minPerSlide = 4;
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (let i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

let menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle"),
    content = document.querySelector(".menu-content"),
    lang_switch_ru = document.querySelector(".lang-switch-ru"),
    lang_switch_en = document.querySelector(".lang-switch-en"),
    language = document.querySelector(".language");

function toggleSwitch() {
    lang_switch_ru.classList.toggle("switch-active");
    lang_switch_en.classList.toggle("switch-active");
}

function toggleToggle() {
    toggle.classList.toggle("menu-open");
}

function toggleMenu() {
    if (document.querySelector(".hidden")) {
        menu.classList.toggle("active");
        setTimeout(() => {
            content.classList.toggle("hidden")
        }, 500)
        setTimeout(() => {
            content.classList.toggle("anim-opacity")
        }, 600)
    } else {
        content.classList.toggle("anim-opacity");
        setTimeout(() => {
            content.classList.toggle("hidden")
            menu.classList.toggle("active")
        }, 300)
    }
}

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);
language.addEventListener("click", toggleSwitch, false);