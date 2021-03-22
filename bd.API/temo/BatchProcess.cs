using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BatchProcess
{
    public class BatchProcess
    {
        #region Variables

        private string userID; 

        public string UserID   
        {
            get { return userID; }   
            set { userID = value; }  
        }

        private int numberOfBatch; 

        public int NumberOfBatch   
        {
            get { return numberOfBatch; }   
            set { numberOfBatch = value; }  
        }

        private int batchSize; 

        public int BatchSize   
        {
            get { return batchSize; }   
            set { batchSize = value; }  
        }

        #endregion

        #region Constructor
        public BatchProcess(string _userID, int X, int Y)
        {
            this.BatchSize = Y;
            this.NumberOfBatch = X;
        }

        #endregion

        #region Public Method

        public async Task<string> ProcessBatch(string userID, int X, int Y)
        {
            string token = string.Empty;

            try
            {
                token = GenerateToken();

                await Task.Run(() =>// This is worker
                {
                    for (int index = 0; index < X; index++)
                    {
                        ProcessasperBatch(Y, token);
                    }
                });
            }
            catch(Exception ex)
            {
                Console.WriteLine("Update Error : " + ex.Message.ToString());
            }

            Console.ReadKey();
            return token;
        }


        #endregion


        #region Private Method

        private void ProcessasperBatch(int Y, string token)
        {
            Console.ReadKey();
            //Open the file              
            var stream = File.OpenText(@"C:\Mushtaq\Study\BatchProcess\BatchProcess\BatchProcess\data.json");
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
                File.WriteAllText(@"C:\Mushtaq\Study\BatchProcess\BatchProcess\BatchProcess\data.json", output);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Update Error : " + ex.Message.ToString());
            }

        }

        private string GenerateToken()
        {
            string toke = string.Empty;

            try
            {
                toke = Guid.NewGuid().ToString();
            }
            catch(Exception ex)
            {

            }

            return toke;
        }

        #endregion

    }
}
