using System; 

class Two_numbers
{
    static void Main(){
       float a  = 0.0000003; 
       float b =  0.0000003;
       bool equal = Math.Abs(a - b) < 0.000001;
       Console.WriteLine(equal); 
    }
}