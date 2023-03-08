import React, { useState,useEffect} from 'react'

function CreateTicket(props) {


    const [data, setData] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        sendData(props, setData);
    }

    useEffect(() => {

        const labels = document.querySelectorAll('.form-control label');

        labels.forEach(label => {
            label.innerHTML = label.innerText
                .split('')
                .map((letter, idx) => `<span style="
        transition-delay: ${idx * 50}ms
      ">${letter}</span>`)
                .join('');
        });
    }, []);



    if (data === true) {
        return (<h3 style={{ "textAlign": "center", "color":"#03fc35" }} >Sucessfull ticket creation</h3>)
    }
    if (data === false) {
        return (<h3 style={{ "textAlign": "center", "color":"#fc2003" }} >Error ticket creation</h3>)
    }

    return (
        <div>
            <h3 style={{"textAlign":"center"}} >Create ticket</h3>

            <div style={{ "marginLeft": "55px","marginBottom":"40px" }} className="form-control">
                <input id="em" type="text" required />
                <label>Topic</label>
            </div>

            <div style={{ "marginLeft": "27px" }} className="form-control">
                <textarea id="pass" rows="5" cols="37" placeholder="Enter details here" required ></textarea>
                
            </div>

            
            <button onClick={handleClick} style={{"marginLeft":"55px"}} className="btn">Create</button>
        </div>);


}

async function sendData(props,setData) {


    let a = props.user;
    a.Topic = document.querySelector("#em").value;
    a.Description = document.querySelector("#pass").value;

    await fetch('/api/ticket/crA', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(a)
    })
        .then((response) => response.json())
        .then((dane) => {setData(dane)});

}
export default CreateTicket;
