var $div = document.querySelector('div');
var $light = document.querySelector('button');

$light.addEventListener('click', handleClick);

var button = 0;
function handleClick(event) {
  button++;
  if (button % 2 !== 0) {
    $div.className = 'off';
    $light.className = 'off';
  } else {
    $div.className = 'on';
    $light.className = 'on';
  }
}
