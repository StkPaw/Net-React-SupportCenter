namespace BackEnd.DbClasses
{
    public class CRUDuser
    {
        public static  Userr []ReadUsers()
        {
            var db = new MessageContext();
            var users = db.Userrs.ToArray();
            return users;
        }
        public static Userr ReadUserById(int a)
        {
            var db = new MessageContext();
            var user = db.Userrs
                .Where(b => b.Id == a)
                .Single();
            return user;
        }
        public static bool CreateUsers(Userr a)
        {
            var db = new MessageContext();
            var users = db.Userrs.ToArray();
            for(int i =0;i<users.Length;i++)
            {
                if(users[i].Email== a.Email)
                { return false; }
            }
            a.Id=users[users.Length-1].Id+1;
            db.Userrs.Add(a);
            db.SaveChanges();
            return true;
        }
    }
}
