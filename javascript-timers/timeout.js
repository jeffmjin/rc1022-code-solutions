var message = document.querySelector('.message');
var timeout = setTimeout(text, 2000);

function time() {
  clearTimeout(timeout);
}

function text() {
  message.textContent = 'Hello There';
  time();
}
