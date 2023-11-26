// Task 1 Write a function , times10 , that takes an argument, n, and mutlplies n times 10.
const times10  = (n) => {n *10};

console.log('task 1')

console.log('times 10 returns', times10(9))
// Task 2 : Use an object to cache the results of your times 10 function
//protip1 : create a function that checks if the value for n has been calculated before. 
//protip2: if the vlaue for n has not been calculated, calciuulate and then save the result in cache object

const cache ={};

const memoTimes10 = (n) => {
 if (n in cache) {
    console.log('Fetching from cache:', n)
    return cache[n];
 } else {
    console.log('Calculating result')
    let result = times10(n)
    cache[n] = result; 
    return result
 }
}

console.log('task 2')

console.log('Task 2 calculated value ', memoTimes10(9))

// Task 3 Clean up your global scope by moving your cache inside your function. 
// protip: Use a closure to return a function that you can call later. 

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
const memoizedClosure = () => {
   let cache = {};
    return (n) => {
       if (n in cache) {
          console.log('Fetching from cache:', n);
          return cache[n];
       }
       else {
          console.log('Calculating result');
          let result = times10(n);
          cache[n] = result;
          return result;
       }
    };
 };
 
 // returned function from memoizedAdd
 const memoClosureTimes10 = memoizedClosure();
 console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
 console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
 console.log('Task 3 cached value:', memoClosureTimes10(10));	// cached

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example. 

const memoize = (cb) =>{
   let cache = {}; 
   return (n, ...args) => {
      if (n in cache) {
         console.log('Fetching from cache:', n);
         return cache[n];
      }
      else {
         console.log('calculating result')
         let result  = cb(n, ...args); // cb9
         cache[n] = result;
         return result;
      }
   }
}

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
// console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
console.log('Task 4 cached value:', memoizedTimes10(9));	// cached

////////////////////////////
function logNumbers(start, end) {
   console.log(`iteratively looping from ${start} until ${end}`); 

   for (let i = start; i <= end; i++) {
      console.log('hitting index', i);
      
   }
}

console.log('~~ LogNumbers ~~')
logNumbers(1,2)

function logNumbersRecursively(start,end) {
   console.log(`recursively looping from ${start} until ${end}`); 

   function recurse(i) {
      console.log('hitting index', i)
   }
}

