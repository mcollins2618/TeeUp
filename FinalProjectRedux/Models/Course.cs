using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FinalProjectRedux.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Holes { get; set; }
        public double Par { get; set; }
        [Range (1, 5)]
        public int PriceScale { get; set; }
        public virtual string ImageUrl { get; set; }



    }
}