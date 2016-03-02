using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FinalProjectRedux.Models
{
    public class Score
    {
        public int Id { get; set; }
        public string DatePlayed { get; set; }
        public string GolfersName { get; set; }
        public string CourseName { get; set; }
        public int Par { get; set; }
        public int FinalScore { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

    }
}