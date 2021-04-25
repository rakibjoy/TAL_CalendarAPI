using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CalendarAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalendarController : ControllerBase
    {
        
        private readonly ILogger<CalendarController> _logger;

        public CalendarController(ILogger<CalendarController> logger)
        {
            _logger = logger;
        }
        /// <summary>
        /// This is a dummy method just to show the communication between front end and back end code
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public bool SendEmail()
        {
            return true;
        }
    }
}
