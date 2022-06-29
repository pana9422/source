const $inputs = document.querySelectorAll('.input-float__input');

$inputs.forEach($el => {
  const $label = $el.parentElement.querySelector('.input-float__label');

  $el.addEventListener('change', e => {
    if (e.target.value) {

      $label.style.transform = 'translateY(-170%)';
      $label.style.fontSize = '14px';
    } else {
      $label.style.transform = '';
      $label.style.fontSize = '';
    };
  });
});
