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
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Projects()
        {
            var client = new RestClient("https://api.github.com/");
            var request = new RestRequest("zen");
            client.AddDefaultHeader("Authorization", "token " + EnvironmentVariables.AuthToken);
            request.AddHeader("User-Agent", "Epicoduc Portfolio Project");
            var response = new RestResponse();
            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            //JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(response.Content);
            ViewBag.myString = response.Content.ToString();
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public static Task<IRestResponse> GetResponseContentAsync(RestClient theClient, RestRequest theRequest)
        {
            var tcs = new TaskCompletionSource<IRestResponse>();
            theClient.ExecuteAsync(theRequest, response => {
                tcs.SetResult(response);
            });
            return tcs.Task;
        }
    }
}
