function computeFactorial(num) {
    var result = 1; 

    for (let i = 2; i <= num; i++) {
        console.log(`result ${result} * ${i} ($(result * i))`);

        result *=i;
        
    }

    return result;
}

function computeFactorial(num) {
    
    if (num === 1) {
        console.log('hitting the base case')
        return 1; 
    } else {
        console.log(`returning ${num} * computeFactorial${num -1}`); 
        return num * computeFactorial(num -1)
    }
} 

computeFactorial(15)