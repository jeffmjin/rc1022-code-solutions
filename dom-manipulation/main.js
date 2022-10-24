var $button = document.querySelector('.hot-button');
var $click = document.querySelector('.click-count');

$button.addEventListener('click', handleClick);

var number = 0;
var color;
function handleClick(event) {
  number++;
  if (number < 4) {
    color = 'cold';
  } else if (number < 7) {
    color = 'cool';
  } else if (number < 10) {
    color = 'tepid';
  } else if (number < 13) {
    color = 'warm';
  } else if (number < 16) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }

  $click.textContent = 'Clicks: ' + number;
  $button.className = 'hot-button ' + color;
}
