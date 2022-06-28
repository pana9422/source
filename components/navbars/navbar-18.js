const $buttonNavigation = document.querySelector("#header__navigation");
const $contentNavigation = document.querySelector(".header__nav");
$buttonNavigation.addEventListener("click", () => $contentNavigation.classList.toggle("header__nav--open"));