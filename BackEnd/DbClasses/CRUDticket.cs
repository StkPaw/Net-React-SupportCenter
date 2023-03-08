namespace BackEnd.DbClasses
{
    public class CRUDticket
    {
        public static Ticket[] ReadticketByUId(int id)
        {
            var db = new MessageContext();
            var ticket = db.Tickets
                .Where(b=>b.UserId==id)
                .ToArray();
            return ticket;
        }
        public static Ticket[] ReadticketByMId(int id)
        {
            var db = new MessageContext();
            var ticket = db.Tickets
                .Where(b => b.ModeratorId == id)
                .ToArray();
            return ticket;
        }
        public static void CreateTicket(Ticket t)
        {
            var db=new MessageContext();
            var ticket = db.Tickets.ToArray();
            t.Id = ticket[ticket.Length - 1].Id + 1;
            t.Dataa = DateTime.Now;
            t.Statuss = "open";
            t.ModeratorId = null;
            db.Tickets.Add(t);
            db.SaveChanges();
            

        }
        public static Ticket [] ReadTicketsByOwn()
        {
            var db=new MessageContext ();
            var ticket =db.Tickets
                .Where(b=>b.ModeratorId==null)
                .ToArray();
            return ticket;
        }
        public static void UpdateTicketById(int i)
        {
            var db = new MessageContext();
            var ticket = db.Tickets
                .Where(b => b.Id == i)
                .Single();
            ticket.Statuss = "closed";
            db.SaveChanges();
        }
        public static void UpdateTicketByOwn(int tickId,int modId)
        {
            var db=new MessageContext();
            var ticket = db.Tickets
                .Where(b => b.Id == tickId)
                .Single();
                ticket.ModeratorId=modId;
            db.SaveChanges ();
        }
    }
}
