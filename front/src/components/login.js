import React, { useState,useEffect } from 'react';
import '../styles/login.css';

function Login (props){

    const [data, setData] = useState(1);
    

    function handleClick(e) {
        e.preventDefault();
        console.log("dzialama")
        sendData(props, setData)
        
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
    
    let errorek=<div></div>
    if (data === 0) { errorek = <div className="errorrek">Login Error</div>}
    return (


        <div >
            <h1>Sign in</h1>
            
            <div className="form-control">
                <input id="em"  type="text" required />
                <label>Email</label>
            </div>

            <div className="form-control">
                <input id="pass"  type="password" required />
                <label>Password</label>
            </div>
            {errorek}
            <button onClick={handleClick} className="btn">Login</button>
            <div className="csDiv">No account? <button className="btn btn1" onClick={() => { props.setSwi({status:"createAcc"}) }}>Sign up!</button></div>

        </div>);







    
};



async function sendData(props,setData) {
    
    await fetch('/api/user', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: 0, Email: document.querySelector("#em").value, Pass: document.querySelector("#pass").value })
    })
        .then((response) => response.json())
        .then((dane) => {
            if (dane.type === "error")
            { setData(0) }
            if(dane.type==="user")
            { props.setSwi({ status: "goodLoginU", user: dane }); };
            if (dane.type === "moderator")
            { props.setSwi({ status: "goodLoginM", user: dane}); };
        });
    
}
export default Login;





