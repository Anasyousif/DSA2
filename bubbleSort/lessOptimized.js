// function bubbleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//       }
//       var temp = arr[j]
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//     }
//   }
//   return arr
// }
// bubbleSort([37,45,29,8])

// without issues

// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i--) {
//       for (var j = 0; j < i -1 ; j++) {
//         if (arr[j] > arr[j + 1]) {
//         }
//         var temp = arr[j]
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//     return arr
//   }
//   bubbleSort([37,45,29,8])

// with NoSwaps

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);