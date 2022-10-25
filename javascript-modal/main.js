var $modal = document.querySelector('#open-modal');
var $popUp = document.querySelector('#display');
var $popUpButton = document.querySelector('#close-modal');

$modal.addEventListener('click', handleModal);
$popUpButton.addEventListener('click', handleExit);

function handleModal(event) {
  if (event.target.className === 'modal') {
    $popUp.className = 'display';
  }
}

function handleExit(event) {
  if (event.target.className === 'pop-up-button') {
    $popUp.className = 'no-display';
  }
}
