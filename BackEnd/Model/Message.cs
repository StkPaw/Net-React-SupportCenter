using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd
{
    //This class is model for messages
    [Table("Messagess")]
    public class Message
    {
        [Key]
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? ModeratorId { get; set; }
        public int TicketId { get; set; }
        public DateTime Dataa { get; set; }
        public string Tresc { get; set; }
    }
}
