using System.ComponentModel;

namespace AddingNumbersnegativeandPositive
{
    internal class AddingNumbers
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the first number");
            int a = int.Parse(Console.ReadLine());
            Console.Write("Enter the second number");
            int b = int.Parse(Console.ReadLine());
            Console.Write("Enter a third  number");
            int c = int.Parse(Console.ReadLine());
            if (a < 0 && b < 0 && c < 0) Console.WriteLine("-");
            else if (a >= 0 && b >= 0 && c >= 0) Console.WriteLine("+");
            else if (a < 0 && b < 0 && c >= 0) Console.WriteLine("+");
            else if (a < 0 && b >= 0 && c < 0) Console.WriteLine("+");
            else if (a >= 0 && b < 0 && c < 0) Console.WriteLine("+");
            else if (a < 0 && b >= 0 && c >= 0) Console.WriteLine("-");
            else if (a >= 0 && b < 0 && c >= 0) Console.WriteLine("-");
            else if (a >= 0 && b >= 0 && c < 0) Console.WriteLine("-");
            Console.WriteLine("Hello, World!");
        }
    }
}
