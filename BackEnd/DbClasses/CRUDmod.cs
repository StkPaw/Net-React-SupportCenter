namespace BackEnd.DbClasses
{
    public class CRUDmod
    {
        public static Moderator[] ReadMods()
        {
            var db = new MessageContext();
            var mods = db.Mods.ToArray();
            return mods;
        }
        public static Moderator ReadModById(int a)
        {
            var db = new MessageContext();
            var mod = db.Mods
                .Where(b => b.Id == a)
                .Single();
            return mod;
        }
    }
}
