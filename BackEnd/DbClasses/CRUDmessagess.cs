namespace BackEnd.DbClasses
{
    
    public class CRUDmessagess
    {
        public static Message []ReadMessagesById(int a)
        {
            var db = new MessageContext();
            var mess = db.Messages
                .Where(b => b.TicketId == a)
                .ToArray();
            return mess;
        }
        public static bool CreateMessage(Message a)
        {
            var db = new MessageContext();
            var mess=db.Messages.ToArray();
            try
            {
                a.Id = mess[mess.Length - 1].Id + 1;
            }
            catch (IndexOutOfRangeException)
            {
                a.Id = 1;
            }
            a.Dataa = DateTime.Now;
            db.Messages.Add(a);
            db.SaveChanges();

            return true;
        }
        
    }
}
