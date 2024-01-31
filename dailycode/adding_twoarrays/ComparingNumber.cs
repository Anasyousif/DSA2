namespace BiggestofIntefgers
{
    internal class BiggestofIntegers
    {
        static void Main(string[] args)
            
        {
            Console.Write("Enter first number");
            int a = int.Parse(Console.ReadLine());
            Console.Write("Enter second number");
            int b = int.Parse(Console.ReadLine());
            Console.Write("Enter third number");
            int c = int.Parse(Console.ReadLine());
            if (a > b) Console.WriteLine("A is the bigger number");
            else if (a < b) Console.WriteLine("B is the bigger number");
            else if (a > c) Console.WriteLine("A is the bigger number");
            else if (a < c) Console.WriteLine("C is the bigger number");
            else if (b > c) Console.WriteLine("B is the bigger number");
            else if (b < c) Console.WriteLine("C is the bigger number");
        }
        
    }
}
