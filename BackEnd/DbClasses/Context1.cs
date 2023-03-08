using Microsoft.EntityFrameworkCore;


namespace BackEnd
{
    //this is our database context and here we put connection string to our sql server
    public class MessageContext : DbContext
    {
        public DbSet<Userr>? Userrs { get; set; }
        public DbSet<Ticket>? Tickets { get; set; }
        public DbSet<Moderator>? Mods { get; set; }
        public DbSet<Message>? Messages { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("workstation id=Support-center-test.mssql.somee.com;packet size=4096;user id=StkPaw_SQLLogin_1;pwd=zhvnrfb36d;data source=Support-center-test.mssql.somee.com;persist security info=False;initial catalog=Support-center-test");
    }
    
}
