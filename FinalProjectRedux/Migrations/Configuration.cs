namespace FinalProjectRedux.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;
    internal sealed class Configuration : DbMigrationsConfiguration<FinalProjectRedux.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FinalProjectRedux.Models.ApplicationDbContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            var user = userManager.FindByName("mcollins2618@gmail.com");

            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = "mcollins2618@gmail.com",
                    Email = "mcollins2618@gmail.com",
                    FirstName = "Matt",
                    LastName = "Collins",
                };

                userManager.Create(user, "password123!");
                userManager.AddClaim(user.Id, new Claim("Admin", "true"));


            }

            #region
            Course[] courses = new Course[]
            {
                new Course {
                Id = 1,
                Name = "Oak Creek Golf Course",
                PriceScale = 3,
                Par = 72,
                Description = "In true Tom Fazio form, Oak Creek Golf Club beckons the competitive spirit of golf players at all levels. Each of the 18 holes throughout this Orange County golf course presents new challenges amid tapered fairways, scenic greens, beautiful lakes and bull-nose carved bunkers. With dense and dynamic flora, Oak Creek creates a sanctuary not only for your playing experience but for a variety of birds and other fauna as well.",
                ImageUrl = "http://i.imgur.com/7mryaK4.png"
            },
            new Course {
                Id = 2,
                Name = "Pelican Hills Golf Course",
                PriceScale = 3,
                Par = 72,
                Description ="Babe Ruth signed baseball",
                ImageUrl="http://b-i.forbesimg.com/davidseideman/files/2014/01/Babe-Ruth-signed-baseball-300x300.jpg"
            },
            new Course {
                Id = 3,
                Name = "Black Gold Golf Course",
                PriceScale = 2,
                Par = 72,
                Description = "Slightly Used Peanut Butter - Creamy",
                ImageUrl="http://ecx.images-amazon.com/images/I/51NPGHHYFHL._SY300_QL70_.jpg"
            }
            };
            #endregion

            #region Scores


            Score[] scores = new Score[]
            {
                new Score {
                Id = 1,
                DatePlayed = "02/12/2016",
                CourseName = "Oak Creek Golf Course",
                GolfersName = "Matt Collins",
                FinalScore = 72,
                Par = 72,
                User = user
            },
                new Score {
                Id = 2,
                DatePlayed = "01/27/2016",
                CourseName = "Fullerton Golf Course",
                GolfersName = "Matt Collins",
                FinalScore = 76,
                Par = 72,
                User = user
            },
                new Score {
                Id = 3,
                DatePlayed = "01/03/2016",
                CourseName = "Coyote Hills Golf Club",
                GolfersName = "Matt Collins",
                FinalScore = 79,
                Par = 72,
                User = user
            },
                 new Score {
                Id = 4,
                DatePlayed = "01/10/2016",
                CourseName = "Pellican Hill Golf Resort",
                GolfersName = "Matt Collins",
                FinalScore = 78,
                Par = 72,
                User = user
            },
                  new Score {
                Id = 5,
                DatePlayed = "01/12/2016",
                CourseName = "Oak Creek Golf Course",
                GolfersName = "Matt Collins",
                FinalScore = 70,
                Par = 72,
                User = user
            },
                   new Score {
                Id = 6,
                DatePlayed = "01/13/2016",
                CourseName = "Black Gold Golf Course",
                GolfersName = "Nick Madden",
                FinalScore = 68,
                Par = 72,
                User = user
            },
                    new Score {
                Id = 7,
                DatePlayed = "02/03/2016",
                CourseName = "Monarch Beach Golf Links",
                GolfersName = "Steve Wulff",
                FinalScore = 81,
                Par = 72,
                User = user
            },
                     new Score {
                Id = 8,
                DatePlayed = "02/14/2016",
                CourseName = "Strawberry Farms Golf Course",
                GolfersName = "Jesse May",
                FinalScore = 90,
                Par = 72,
                User = user
            },
                      new Score {
                Id = 9,
                DatePlayed = "02/17/2016",
                CourseName = "San Juan Hills Golf Club",
                GolfersName = "Matt Collins",
                FinalScore = 84,
                Par = 72,
                User = user
            },
                       new Score {
                Id = 10,
                DatePlayed = "01/29/2015",
                CourseName = "Black Gold Golf Course",
                GolfersName = "Matt Collins",
                FinalScore = 95,
                Par = 72,
                User = user
            },

            };
            context.Scores.AddOrUpdate(s => s.Id, scores);
            #endregion
        }
    }
}
