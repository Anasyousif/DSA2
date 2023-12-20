var uniqueInOrder=function(iterable){
    var  arr = []; 
    for(var i=0; i< iterable.length;i++){
      // check if there is back to back letter 
      if (iterable[i] !== iterable[i+1]) {
        
        // if not , push current value
        arr.push(iterable[i])
      }
    }
    return arr;
  }