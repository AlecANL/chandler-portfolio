const $listMenu = document.getElementById('list-menu'),
  $iconMenu = document.getElementById('icon-menu'),
  $line = document.getElementById('line');

function showMenu() {
  $line.classList.toggle('active-menu');
  $listMenu.classList.toggle('active');
}

$iconMenu.addEventListener('click', showMenu);
