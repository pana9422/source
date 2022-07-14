const $btn = document.querySelector('.show-alert');
const $close = document.querySelector('.alert__closed')
const $alert = document.querySelector('.alert');

$btn.addEventListener('click', () => {
  $alert.classList.add('alert--visible');
  const time = setTimeout( () => {
    $alert.classList.remove('alert--visible');
  }, 5000)

  $close.addEventListener('click', () => {
    clearTimeout(time)
    $alert.classList.remove('alert--visible');
  })
});