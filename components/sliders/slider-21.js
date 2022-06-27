const sliders = document.querySelectorAll('.slider__range');

sliders.forEach(slider => {

    slider.addEventListener("input", () => {
        let val = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.backgroundImage = `linear-gradient(to right, #1b67ad ${val}%, #9acaf7 ${val}%`;
    });

});