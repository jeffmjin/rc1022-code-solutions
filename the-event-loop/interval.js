let num = 3;
const newInterval = setInterval(() => {
  if (num > 0) {
    console.log(num);
    num--;
  } else if (num === 0) {
    console.log('Blast Off!');
    clearInterval(newInterval);
  }
}, 1000);
