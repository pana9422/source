const $button = document.querySelectorAll(".btn");

$button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const $icon = btn.querySelector(".btn__icon");
        btn.classList.add("btn--loading");

        setTimeout(() => {
            btn.classList.remove("btn--loading");
        }, 5000);
    });
});