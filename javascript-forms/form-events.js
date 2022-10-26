function handleFocus(event) {
  console.log('focus event');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var $name = document.getElementById('user-name');
var $email = document.getElementById('user-email');
var $message = document.getElementById('user-message');

$name.addEventListener('focus', handleFocus);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);

$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);

$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
