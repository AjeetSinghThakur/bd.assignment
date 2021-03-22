using bd.Service.Interfaces;
using bd.services.dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace bd.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProcessController : ControllerBase
    {
        private readonly ILogger<ProcessController> _logger;
        private readonly IProcessService _processService;

        public ProcessController(ILogger<ProcessController> logger, IProcessService processService)
        {
            _logger = logger;
            _processService = processService;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ProcessRequest([FromBody] ProcessVM processVM)
        {
            await _processService.ProcessBatch("1", processVM.BatchSize, processVM.NumberOfBatch);
            return Ok();
        }
    }
}
