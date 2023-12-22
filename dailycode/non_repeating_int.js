function firstNonRepeatingLetter(s) {
    let array = [... s.toLowerCase()]
    
    let result = array.find((char) => array.indexOf(char) === array.lastIndexOf(char))
      
    
    return result ?  s[array.indexOf(result)] : ""
    }  