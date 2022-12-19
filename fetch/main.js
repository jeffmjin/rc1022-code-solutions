fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => {
    console.log('fetch:', result);
  })
