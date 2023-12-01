// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr2[i]) {
      results.push(arr1[i]);
      i++;
    } else {
        results.push(arr2[j])
        j++; 
    }
  }
  while(j < arr1.length){
    results.push(arr1[i])
    i++; 
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results
}

merge([100,200], [1,2,3,4,5,6])

/// acutual merge sort

function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2); 
    let left = mergeSort(arr.slice(mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort