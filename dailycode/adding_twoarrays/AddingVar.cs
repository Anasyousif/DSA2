
namespace AddingTwoVariablesTogther
{
    internal class AddingTwoVaraibles
    {
        static void Main(string[] args)

        {
            Console.WriteLine("Enter a number");
            Console.Write("Enter the first number");
            int firstnumber = int.Parse(Console.ReadLine());
            Console.Write("Enter a second number");
            int secondnumber = int.Parse(Console.ReadLine());
            int biggerNumber = firstnumber; 
            if (secondnumber > firstnumber)
            {
                biggerNumber = secondnumber;
            }
            Console.WriteLine("bigger number is {0}",biggerNumber);
        }
    }
}


