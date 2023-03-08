import React from 'react';
import { useState } from 'react';
import CreateTicket from './createTicket.js'

function UserMenu(props) {
    const [data, setData] = useState({tickets:[],mess:1});

    function handleClick(e) {
        e.preventDefault();
        console.log("dzialama")
        sendData(setData,props)

    }

    function handleClick2(e) {
        e.preventDefault();
        sendData2(setData, props, data.tickets[e.target.dataset.value])

    }

    function handleClick3(e) {
        e.preventDefault();
        setData({tickets:"new"})
    }

    function handleClick4(e) {
        e.preventDefault();
        sendData3(setData, props,data.tickets)
    }

    if (data.tickets === "new") {
        return (
            <div>
             <h2>Welcome {props.user.login}</h2>
            <button className="btn btn2" onClick={handleClick}>Your tickets</button>
                <button className="btn btn2" onClick={handleClick3} style={{ 'marginLeft': "10px" }}>Create new ticket</button>
                <CreateTicket user={props.user} />
        </div >
            );
    }


    let s = []
    if (data.mess === 1) {
        for (var i = 0; i < data.tickets.length; i++) {

            let a;
            if (data.tickets[i].statuss === "open") {
                a = "#00ff33"
            }
            if (data.tickets[i].statuss === "closed") {
                a = "#ff2600"
            }
            s.push(<div style={{ "animationDelay": ((i + 1) / 10).toString() + "s", "borderRightColor": a }} data-value={i} onClick={handleClick2} className="tick" key={i} >{i + 1}{" "}{data.tickets[i].topic}</div>);

        }
    }
    else {
        s.push(<h3 key={0}>Topic</h3>)
        s.push(<div key={1} className="tick2">{data.tickets.topic}</div>)
        s.push(<h3 key={2}>Details</h3>)
        s.push(<div key={3} className="tick2">{data.tickets.describe}</div>)
        s.push(<h3 key={4}>Conversation</h3>)
        var licznik = 5;
        for (var j = 0; j < data.mess.length; j++) {

            console.log(data.mess[j]);
            let a = { "backgroundColor": "#f5c093","textAlign" :"left"};
            if (data.mess[j].userId === null) {
                a = { "backgroundColor": "#93c9f5", "borderColor":"#008cff","textAlign":"right"}
            }
            s.push(<div style={a} className="tick2" key={j + 5}>{data.mess[j].tresc}</div>);
            licznik++;
        }
        if (data.tickets.statuss === "open") {
            s.push(<h3 key={licznik + 1}>Send message</h3>)
            s.push(<textarea style={{ "marginLeft": "27px" }} id="tr" key={licznik + 2} rows="5" cols="37" placeholder="Enter text here" required ></textarea>)
            s.push(<button onClick={handleClick4} key={licznik + 3} style={{ "marginLeft": "55px", "display": "block" }} className="btn" >Send</button >)
        }
    }
    

    return (
        <div>
            <h2>Welcome {props.user.login}</h2>
            <button className="btn btn2" onClick={handleClick}>Your tickets</button>
            <button className="btn btn2" onClick={handleClick3} style={{ 'marginLeft': "10px" }}>Create new ticket</button>
            {s}
        </div>
        );
}

async function sendData(setData, props) {
    

    await fetch('/api/ticket', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(props.user)
    })
        .then((response) => response.json())
        .then((dane) => { setData({tickets:dane,mess:1})})

};

async function sendData2(setData,props,ticket) {

    let obb = props.user;
    obb.TicketId = ticket.id;
    console.log(obb);

    await fetch('/api/message', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obb)
    })
        .then((response) => response.json())
        .then((dane) => { setData({ tickets: ticket,mess:dane }) })

};
async function sendData3(setData,props, ticket) {

    let obb = props.user;
    obb.TicketId = ticket.id;
    obb.Tresc = document.querySelector("#tr").value;
    console.log(obb);

    await fetch('/api/message/crA', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obb)
    })
        .then((response) => response.json())
        .then((dane) => { if (dane === true) { sendData2(setData, props, ticket)} })

};





export default UserMenu;