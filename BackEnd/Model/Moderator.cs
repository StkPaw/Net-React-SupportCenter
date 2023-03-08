using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BackEnd
{
    //This class is model for moderators
    [Table("Moderator")]
    public class Moderator
    {
        [Key]
        public int Id { get; set; }
        public string Loginn { get; set; }
        public string Namee { get; set; }
        public string Pass { get; set; }

    }
}
