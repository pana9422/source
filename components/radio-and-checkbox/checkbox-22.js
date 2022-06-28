const checkbox = document.querySelector('.checkbox');
const checkIcon = document.querySelector('.checkbox__i');
const checkTxt = document.querySelector('.checkbox__txt');

const circleCheckIcon = document.querySelector('.circle-checkbox__i');

const toggleState = () => {
    if ( !checkbox.classList.contains('checkbox--checked') && !checkbox.classList.contains('checkbox--mix') ) {
        // checked state
        checkbox.classList.add('checkbox--checked');
        checkIcon.classList.replace('fa-square', 'fa-check-square');
        checkTxt.textContent = 'Selected';

    } else if (checkbox.classList.contains('checkbox--checked')) {
        // mix state
        checkbox.classList.replace('checkbox--checked', 'checkbox--mix');
        checkIcon.classList.replace('fa-check-square', 'fa-minus-square');
        checkTxt.textContent = 'Mixed selection';

    } else if (checkbox.classList.contains('checkbox--mix')) {
        checkbox.classList.remove('checkbox--mix');
        checkIcon.classList.replace('fa-minus-square', 'fa-square');

        checkTxt.textContent = 'Nothing selected';
    }

}

checkbox.addEventListener('click', toggleState);