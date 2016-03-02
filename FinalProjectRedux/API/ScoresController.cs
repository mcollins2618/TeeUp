
using FinalProjectRedux.Models;
using FinalProjectRedux.Repositories;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace FinalProjectRedux.API
{
    public class ScoresController : ApiController
    {

        private IGenericRepository _repo; /*= new GenericRepository();*/
        
        public ScoresController(IGenericRepository repo)
        {
            _repo = repo;
        }

        


        public IHttpActionResult GetAllScores()
        {
            var userId = this.User.Identity.GetUserId();
            var data = _repo.Query<Score>().Where(s => s.UserId == userId).ToList();

            return Ok(data);
        }

        [Route("api/scores/{id}")]
        public IHttpActionResult GetIndScore(int id)
        {
            var userId = this.User.Identity.GetUserId();
            var data = _repo.Query<Score>().Where(s => s.UserId == userId && s.Id == id).FirstOrDefault();

            return Ok(data);
        }

        public IHttpActionResult PostScore(Score scoreToAdd)
        {
            var userId = this.User.Identity.GetUserId();
            if (userId == null)
            {
                return Unauthorized();
            }
            if (ModelState.IsValid)
            {
                //Creating a new score
                if (scoreToAdd.Id == 0)
                {
                    scoreToAdd.UserId = userId;
                    _repo.Add<Score>(scoreToAdd);
                    _repo.SaveChanges();
                    return Ok(scoreToAdd);

                }
                else
                {
                    
                    var originalScore = _repo.Find<Score>(scoreToAdd.Id);
                    originalScore.GolfersName = scoreToAdd.GolfersName;
                    originalScore.CourseName = scoreToAdd.CourseName;
                    originalScore.DatePlayed = scoreToAdd.DatePlayed;
                    originalScore.Par = scoreToAdd.Par;
                    originalScore.FinalScore = scoreToAdd.FinalScore;
                    

                    _repo.SaveChanges();
                    return Ok(scoreToAdd);
                }
            }

            return BadRequest();


        }

        public IHttpActionResult DeleteScore(int id)

        {
            var userId = this.User.Identity.GetUserId();
            if (userId == null)
            {
                return Unauthorized();
            }
            _repo.Delete<Score>(id);
            _repo.SaveChanges();
            return Ok();
        }
    }
}
