

namespace BackEnd
{
    //This class is meant to be a response or request for this API
    public class ModUs:ModUsPar
    {

       
        public ModUs(object a)
        {
            if (a is Userr)
            {
                
                id = ((Userr)a).Id;
                login = ((Userr)a).Email;
                password = ((Userr)a).Pass;
                type = "user";
            }
            else
            {
                if (a is Moderator)
                {
                    id = ((Moderator)a).Id;
                    login = ((Moderator)a).Loginn;
                    password = ((Moderator)a).Pass;
                    name = ((Moderator)a).Namee;
                    type = "moderator";
                }
                else
                { type = "error"; }
            }
        }

        
    }
}
