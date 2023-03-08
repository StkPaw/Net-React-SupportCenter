using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BackEnd
{
    [Table("Ticket")]
    //this class is model for tickets
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        public DateTime Dataa { get; set; }
        public string Topic { get; set; }
        public string Statuss { get; set; }
        public int UserId { get; set; }
        public int? ModeratorId { get; set; }
        public string? Describe { get; set; }
    }
}
