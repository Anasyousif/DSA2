// ES5
function swap(arr,index1 , index2) {
    var temp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = temp; 
}

// ES2015
const swap = (arr, idex1 , idex2 ) => {
    [arr[idex1], arr[idex2]] = [arr[idex2], arr[idex1]]
}