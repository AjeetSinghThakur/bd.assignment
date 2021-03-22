using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BatchProcess
{
    class Program
    {
        static void Main(string[] args)
        {
            BatchProcess objBatchProcess = new BatchProcess("0", 2, 2);
            dynamic o = objBatchProcess.ProcessBatch("100", 2, 1);
        }
    }
}
