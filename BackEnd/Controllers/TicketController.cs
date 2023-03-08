using Microsoft.AspNetCore.Mvc;
using BackEnd.DbClasses;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {

        ////post request for creating ticket
        [HttpPost]
        [Route("crA")]
        public bool PostCr(ModUsTickCr a)
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

            Ticket t = new Ticket();
            t.Describe = a.Description;
            t.Topic = a.Topic;
            t.UserId = a.id;
            CRUDticket.CreateTicket(t);
            return true;
        }
        
        //post request returning tickets assinged to given user/mod id
        [HttpPost]
        public Ticket [] Post(ModUsPar a)
        {
            if (a.type == "user")
            {
                Userr user=CRUDuser.ReadUserById(a.id);
                if(user.Pass!=a.password)
                { return null; }
            }
            
            if (a.type == "moderator")
            {
                Moderator mod = CRUDmod.ReadModById(a.id);
                if (mod.Pass != a.password)
                { return null; }
            }




            if (a.type == "user")
            {
                return CRUDticket.ReadticketByUId(a.id);
            }
            else
            {
                return CRUDticket.ReadticketByMId(a.id);
            }
        }

        //post request for moderators that closes given ticket
        [HttpPost]
        [Route("up")]
        public bool PostUp(ModUsTick a)
        {
            Moderator mod = CRUDmod.ReadModById(a.id);
            if (mod.Pass != a.password)
            { return false; }
            

            CRUDticket.UpdateTicketById(a.TicketId);

            return true;
        }
        
        //post request for moderators returning all tickets not assigned to any moderator
        [HttpPost]
        [Route("own")]
        public Ticket [] PostOwn(ModUsPar a)
        {
            Moderator mod = CRUDmod.ReadModById(a.id);
            if (mod.Pass != a.password)
            { return null; }

            return CRUDticket.ReadTicketsByOwn();
            
        }


        ////post request for moderators that assign given ticket to given moderator
        [HttpPost]
        [Route("asg")]

        public bool PostAsg(ModUsTick a)
        {
            Moderator mod = CRUDmod.ReadModById(a.id);
            if (mod.Pass != a.password)
            { return false; }

            CRUDticket.UpdateTicketByOwn(a.TicketId, a.id);

            return true;
        }
    }
}


