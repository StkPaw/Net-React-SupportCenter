using Microsoft.AspNetCore.Mvc;
using BackEnd.DbClasses;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        //post request for with ticket id returning messages from given ticket
        [HttpPost]
        public Message[] Post(ModUsTick a)
        {
            if (a.type == "user")
            {
                Userr user = CRUDuser.ReadUserById(a.id);
                if (user.Pass != a.password)
                { return null; }
            }

            if (a.type == "moderator")
            {
                Moderator mod = CRUDmod.ReadModById(a.id);
                if (mod.Pass != a.password)
                { return null; }
            }

            return CRUDmessagess.ReadMessagesById(a.TicketId);
        }

        //post request for creating message
        [HttpPost]
        [Route("crA")]
        public bool PostCR(ModUsMess a)
        {


            if (a.type == "user")
            {
                Userr user = CRUDuser.ReadUserById(a.id);
                if (user.Pass != a.password)
                { return false; }
            }

            if (a.type == "moderator")
            {
                Moderator mod = CRUDmod.ReadModById(a.id);
                if (mod.Pass != a.password)
                { return false; }
            }

            Message mess =new Message();
            mess.Tresc = a.Tresc;
            mess.TicketId = a.TicketId;
            if(a.type == "user")
            { 
                mess.UserId = a.id;
                mess.ModeratorId = null;
            
            }
            if(a.type=="moderator")
            {
                mess.UserId = null;
                mess.ModeratorId = a.id;
            }
            CRUDmessagess.CreateMessage(mess);
            return true;
        }
    }
}
