function DNAStrand(dna){
    let dnaKey  = {
      "A" : "T", 
      "T" : "A", 
      "C" : "G", 
       "G" : "C"
    }
    
    let Dnaside = ""; 
    
    for (let i = 0; i < dna.length; i ++){
      Dnaside += dnaKey[dna[i]]; 
    }  
      return Dnaside;
    }