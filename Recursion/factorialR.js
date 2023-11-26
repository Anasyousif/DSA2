const memoize = (fn) => {
    let cache = {}; 
    return(...args) => {
        if (n in cache) {
            console.log('Fetching from cache', n); 
            return cache[n]
        }else{
            console.log('calculating result', n);
            let result = fn(n);
            cache[n] = result; 
            return result
        }

    }
}

const factorial = memoize(
    (x) => {
        if(x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
); 

console.log(factorial(5)); // calculated
console.log(factorial(5)); // calculated for 6 and cached for 5