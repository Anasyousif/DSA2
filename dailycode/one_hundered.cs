using System;

 public static void Main (string[] args){
    for(int i = 2; i < 102; i++){
        if(i % 2 == 0) 
        Console.WriteLine("{0}, {1}",i,(i+1)*(-1))
    }
 }