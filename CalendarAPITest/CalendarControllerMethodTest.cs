using System;
using CalendarAPI;
using CalendarAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace CalendarAPITest
{
    public class CalendarControllerMethodTest
    {
        private CalendarController calendarApiController;

        public CalendarControllerMethodTest()
        {
            //mocking the logger dependency object
            var logger = Mock.Of<ILogger<CalendarController>>();
            calendarApiController = new CalendarController(logger);
        }

        [Fact]
        public void Get_WhenCalled_ReturnsBooleanResult()
        {
            var boolResult = calendarApiController.SendEmail();
            Assert.IsType<bool>(boolResult);
        }
    }
}
