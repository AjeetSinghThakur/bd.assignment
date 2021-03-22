using bd.Service.Interfaces;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace bd.Service
{
    public class ProcessService : IProcessService
    {
        public async Task<string> ProcessBatch(string userID, int x, int y)
        {
            string token = GenerateToken();
            await Task.Run(() =>// This is worker
            {
                for (int index = 0; index < x; index++)
                {
                    ProcessasperBatch(y, token);
                }
            });
            return token;
        }

        private string GenerateToken()
        {
            return Guid.NewGuid().ToString();
        }
        private void ProcessasperBatch(int y, string token)
        {
            //Open the file              
            var stream = File.OpenText(@"D:\Dot.Net Core\bd.assignment\bd.Service\data\data.json");
            //Read the file              
            string st = stream.ReadToEnd();
            try
            {
                var jObject = JObject.Parse(st);
                JArray Status = (JArray)jObject["Status"];

                jObject["Status"] = 1;// in Progress
                jObject["UpdatedBy"] = token;
                Console.WriteLine("Updating Token in file");

                string output = Newtonsoft.Json.JsonConvert.SerializeObject(jObject, Newtonsoft.Json.Formatting.Indented);
                File.WriteAllText(@"D:\Dot.Net Core\bd.assignment\bd.Service\data\data.json", output);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Update Error : " + ex.Message.ToString());
            }

        }
    }
}
