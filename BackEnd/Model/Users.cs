using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BackEnd
{
    [Table("Userr")]
    //this class is model for users
    public class Userr
    {
        [Key]
        public int Id { get; set; }
        public string? Email { get; set; }
        public string? Pass { get; set; }
    }
}