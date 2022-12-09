const takeAChance = require('./take-a-chance');

const chanceResult = takeAChance('Jeff');

chanceResult.then((resolve) => {
  console.log("Hooray, you're so lucky, Jeff!");
});

chanceResult.catch((error) => {
  console.error(error.message);
});
