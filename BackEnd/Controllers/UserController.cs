using Microsoft.AspNetCore.Mvc;
using BackEnd.DbClasses;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {


        //post request creating new user
        [HttpPost]
        [Route("crA")]
        public bool PostCR(Userr a)
        {
            
            
            return CRUDuser.CreateUsers(a);
            
        }

        //post request that login user/mod
        [HttpPost]
        public ModUs PostLo(Userr a)
        {

             Userr [] users=CRUDuser.ReadUsers();
             Moderator [] mods=CRUDmod.ReadMods();

            for (int i = 0; i < mods.Length; i++)
            {
                if (mods[i].Loginn == a.Email && users[i].Pass == a.Pass)
                {
                    

                    return new ModUs(mods[i]);
                }
            }

            for (int i=0;i<users.Length;i++)
            {
                if(users[i].Email==a.Email && users[i].Pass== a.Pass)
                {
                     new ModUs(users[i]);
                    
                    return new ModUs(users[i]);
                }
            }
            
            return new ModUs("error");
        }

    }
}