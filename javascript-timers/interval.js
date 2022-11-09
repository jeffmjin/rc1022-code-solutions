var countdown = document.querySelector('.countdown-display');
var interval = setInterval(intervalText, 1000);

var number = 4;
function intervalText() {
  number--;
  if (number > 0) {
    countdown.textContent = number;
  } else if (number === 0) {
    countdown.textContent = '~Earth Beeelooowww Us~';
    clearInterval(interval);
  }
}
