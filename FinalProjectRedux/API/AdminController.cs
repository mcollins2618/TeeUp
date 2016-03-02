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
    public class AdminController : ApiController
    {
        private IGenericRepository _repo;

        public AdminController(IGenericRepository repo)
        {
            _repo = repo;
        }

        [Authorize]
        public IHttpActionResult GetApplicationUsers()
        {
            var applicationUsers = _repo.Query<ApplicationUser>().ToList();
            return Ok(applicationUsers);
        }
    }
}

