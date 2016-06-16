using System.Collections.Generic;
using System.Data.Entity;

namespace PlayerWebAPI.Models
{
    public class PlayerWebAPIContextInitializer : DropCreateDatabaseAlways<PlayerWebAPIContext>
    {
        protected override void Seed(PlayerWebAPIContext context)
        {
            var players = new List<Player>
            {
                new Player() { FirstName = "Sachin", LastName="Tendulkar", DateOfBirth = new System.DateTime(1978,4,22), IPLPrice = 1.5m },
                new Player() { FirstName = "Ramesh", LastName="Tendulkar", DateOfBirth = new System.DateTime(1978,4,22), IPLPrice = 1.5m },
                new Player() { FirstName = "Arjun", LastName="Tendulkar", DateOfBirth = new System.DateTime(1978,4,22), IPLPrice = 1.5m },
                new Player() { FirstName = "Arjun", LastName="Rampal", DateOfBirth = new System.DateTime(1978,4,22), IPLPrice = 1.5m },
                new Player() { FirstName = "Arjun", LastName="Kapoor", DateOfBirth = new System.DateTime(1978,4,22), IPLPrice = 1.5m },
                new Player() { FirstName = "Virat", LastName="Kohli", DateOfBirth = new System.DateTime(1978,4,22), IPLPrice = 1.5m }
            };
            players.ForEach(p => context.Players.Add(p));
            context.SaveChanges();

            base.Seed(context);
        }
    }
}