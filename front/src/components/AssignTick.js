import React, { useState,useEffect } from 'react'

function AssignTick(props) {

    const [data, setData] = useState({ tickets: [], mess: 1 });

    useEffect(() => {
        fetch('/api/ticket/own', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(props.user)
        })
            .then((response) => response.json())
            .then((dane) => { setData({ tickets: dane, mess: 1 }) })
    }, []);

    function handleClick(e) {
        e.preventDefault();
        setData({ tickets: data.arch,mess:1 })

    }

    function handleClick2(e) {
        e.preventDefault();
        sendData2(setData, props, data.tickets[e.target.dataset.value],data.tickets)

    }

    function handleClick3(e) {
        e.preventDefault();
        sendData(setData,props,data.tickets)
    }

    let s = [];
    if (data.mess === 1) {
        for (var i = 0; i < data.tickets.length; i++) {


            s.push(<div style={{ "animationDelay": ((i + 1) / 10).toString() + "s" }} data-value={i} onClick={handleClick2} className="tick" key={i} >{i + 1}{" "}{data.tickets[i].topic}</div>);

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
            let a = { "backgroundColor": "#f5c093", "textAlign": "left" };
            if (data.mess[j].userId === null) {
                a = { "backgroundColor": "#93c9f5", "borderColor": "#008cff", "textAlign": "right" }
            }
            s.push(<div style={a} className="tick2" key={j + 5}>{data.mess[j].tresc}</div>);
            licznik++;
        }
        s.push(<button key={licznik + 3} onClick={handleClick3} style={{ "marginLeft": "55px", "display": "block" }} className="btn" >Assign to Yourself</button >)
        s.push(<button key={licznik + 4} onClick={handleClick} style={{ "marginLeft": "55px", "display": "block" }} className="btn" >Back to List</button >)
    }


    return (s);
}
    async function sendData2(setData, props, ticket,tickets) {

        let obb = props.user;
        obb.TicketId = ticket.id;
        console.log(obb);

        await fetch('/api/message', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obb)
        })
            .then((response) => response.json())
            .then((dane) => { setData({ tickets: ticket, mess: dane,arch:tickets }) })

    };

async function sendData(setData, props, ticket) {

    let obb = props.user;
    obb.TicketId = ticket.id;
    console.log(obb);

    await fetch('/api/ticket/asg', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obb)
    })
        .then((response) => response.json())
        .then((dane) => {
            fetch('/api/ticket/own', {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(props.user)
            })
            .then((response) => response.json())
            .then((dane) => { setData({ tickets: dane, mess: 1 }) }) })

};
export default AssignTick;