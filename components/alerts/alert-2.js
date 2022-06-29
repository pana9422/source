const $btn = document.querySelector('.show-alert');
const $alert = document.querySelector('.alert');

$btn.addEventListener('click', () => {
  $alert.classList.toggle('alert--visible');
});
