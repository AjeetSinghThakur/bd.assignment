using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace bd.Service.Interfaces
{
    public interface IProcessService
    {
        Task<string> ProcessBatch(string userID, int x, int y);
    }
}
