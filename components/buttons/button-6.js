const $button = document.querySelectorAll(".btn");

$button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const $icon = btn.querySelector(".btn__icon");
        btn.classList.add("btn--loading");
        $icon.classList.replace("fa-link", "fa-spinner");

        setTimeout(() => {
            btn.classList.remove("btn--loading");
            $icon.classList.replace("fa-spinner", "fa-link");
        }, 5000);
    });
});