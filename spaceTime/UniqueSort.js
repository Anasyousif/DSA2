const uniqSort = function (arr) {
    const breadcrums = {}; 
    const result = []; 

    for (let i = 0; i < arr.length; i++) {
        if (!breadcrums[arr[i]]) {
            result.push(arr[i]);
            breadcrums[arr[i]] = true;
        }
        
    }
    return result.sort((a,b) => a - b); 
}


