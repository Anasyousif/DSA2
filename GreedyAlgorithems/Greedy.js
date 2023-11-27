// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25

const  makeChange = (coins, amount) =>{
    coins.sort((a,b) => b - a ); 
    let coinTotal = 0;
    let i = 0; 
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i]; 
            coinTotal ++; 


        } else {
            i++
        }
    }

    return coinTotal; 
}

makeChange([5, 10, 25] , 50);

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.

let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange2 = (value, i) => {
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

makeChange(10);