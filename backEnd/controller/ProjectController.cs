using Microsoft.AspNetCore.Mvc;

namespace backend.controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {

        [HttpGet("GetProject")]
        public async Task<IActionResult> GetProject()
        {
            return Ok("Project Returned SuccessFull");
        }
    }
}