namespace BackEnd
{
    //This class is meant to be a response or request data for this API
    public class ModUsPar
    {
        public int id { get; set; }
        public string? login { get; set; }
        public string? name { get; set; }
        public string? password { get; set; }
        public string type { get; set; }
    }
}
