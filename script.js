console.log(`50. \n
Вёрстка соответствует макету. Ширина экрана 768px +26 \n
Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n
На ширине экрана 768рх реализовано адаптивное меню - +12 `);

(function () {
  const navBurgerButton = document.querySelector(".burger_menu");
  const menu = document.querySelector(".navigation");

  const firstMenuLine = document.querySelector(".menu_button_first_line");
  const secondMenuLine = document.querySelector(".menu_button_second_line");
  const thirdMenuLine = document.querySelector(".menu_button_third_line");
  const menuLinks = document.querySelectorAll(".navigation_link");

  navBurgerButton.addEventListener("click", () => {
    menu.classList.toggle("navigation_active");
    navBurgerButton.classList.toggle("burger_menu_active");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelector(".navigation")
        .classList.remove("navigation_active");
      document
        .querySelector(".burger_menu")
        .classList.remove("burger_menu_active");
    }
  });
  document.getElementById("menu").addEventListener("click", (event) => {
    event._isClickWithInMenu = true;
  });
  document.getElementById("navButton").addEventListener("click", (event) => {
    event._isClickWithInMenu = true;
  });
  document.body.addEventListener("click", (event) => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".navigation").classList.remove("navigation_active");

    document
      .querySelector(".burger_menu")
      .classList.remove("burger_menu_active");
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      menu.classList.remove("navigation_active");

      document
        .querySelector(".burger_menu")
        .classList.remove("burger_menu_active");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains(".burger_menu") &&
      e.target.closest(".navigation_link")
    ) {
      menu.classList.remove("navigation_active");

      document
        .querySelector(".burger_menu")
        .classList.remove("burger_menu_active");
    }
  });
})();
