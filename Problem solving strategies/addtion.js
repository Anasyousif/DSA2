// Write a function that takes two numbers & returns thier sum. 

//1.Can I restate the problem in my own words. 
// "implement addition"
// //2.What are the inputs that go into the problem. 
// "ints"
// "floats"
// "What about a string for a large number?"
// //3.what are the outputs that should  come from the solution of the problem. 

// //4.Can the outputs be determined from the inputs? in other words , do I have enough information to solve the problem. 

// //5. How Should I label the inportant pieces of the data that are part of the problem.

// ////////// Explore examples

// // Write a function which takes a string and returns counts of each charatecter in the string
// charCount("aaaa")
// charCount("hello")
// progress to more complex examples
// explore examples with invalid inputs.
//Break it down write down the code you need it to solve the problem.

function CharCount(str) {
    // make object to return at end
    var result = []
    // loop over string , for each charatecter
    for (var i = 0; i < str.length; i++){
        var char = str [i].toLowerCase()
         /// if the charaecter is number/letter and os a ke y in an object , add one to count. 
         if(result[char] > 0) {
            result[char]++;
         }
         /// if the charatecter is a number/ letter not in object ad it to object and set value to 1
         else {
            result[char] = 1;
         }
    }
   

    
    /// if charaecter is smoehting else ( space, period , etc.) don't do anything
    // return object
}

////// Refactor & Look back

// function CharCount(str) {
//     var obj = {}; 
//     for (var i = 0; i < str.length; i++){
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0 ) {
//                 obj[char]++;
//             } else {
//                 obj [char] = 1;
//             }
//         }
//     }

//     return obj
// }


function CharCount(str) {
    var obj = {}; 
    for (var char of str){
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            obj[char] == ++obj[char] || 1
        }
    }

    return obj
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0); 
     if (!(code > 47 && code < 58 ) &&  // numeric (0-9)
         !(code > 64 && code < 91 ) &&  // upper alpha (A-z
         !(code > 96 && code < 123 )) {  // lower  alpha (a-z)
        return false; 
         }
    return true;
}

charCodeAt(0)