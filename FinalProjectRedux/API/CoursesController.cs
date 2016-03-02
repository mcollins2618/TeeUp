using FinalProjectRedux.Models;
using FinalProjectRedux.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinalProjectRedux.API
{
    public class CoursesController : ApiController
    {
        private IGenericRepository _repo;
        public CoursesController(IGenericRepository repo)
        {
            _repo = repo;
        }

        public IHttpActionResult GetAllCourses()
        {
            var data = _repo.Query<Course>().ToList();
            return Ok(data);
        }

        public IHttpActionResult Get(int id)
        {
            var data = _repo.Find<Course>(id);
            return Ok(data);
        }
    }
}
