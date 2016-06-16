using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PlayerWebAPI.Models
{
    public class Player
    {
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Name is required.")]
        [MinLength(3, ErrorMessage = "Minimum length for Name is 3 character")]
        public string FirstName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Name is required.")]
        [MinLength(3, ErrorMessage = "Minimum length for Name is 3 character")]
        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public decimal IPLPrice { get; set; }
    }
}