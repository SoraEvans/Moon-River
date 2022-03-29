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
  toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
}

function toggleMenu() {
  menu.classList.toggle("active");
}

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);
