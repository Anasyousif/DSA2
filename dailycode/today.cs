using System;
namespace IntroToCsharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer("Anas 2");
            var result =customer.GetName();
            System.Console.WriteLine(result);
        }
    }
    public class Customer
    {
        private string  Name { get; set; }
        public Customer(string name)
        {
            Name= name;
        }
        public string GetName( )
        {
            return "Hello, "+Name;
        }
    }
}
