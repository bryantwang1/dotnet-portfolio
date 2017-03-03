using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using dotnetPortfolioSite.Models;

namespace dotnetPortfolioSite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Projects()
        {
            List<GitProject> projectList = GitProject.GetProjects();
            return View(projectList);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
