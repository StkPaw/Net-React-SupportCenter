import React, { useEffect,useState} from 'react';
import '../styles/login.css';

function CreateAccount(props) {


    const [data, setData] = useState(1);


    function handleClick(e) {
        e.preventDefault();
        if ((document.querySelector("#pass").value === document.querySelector("#rpass").value) && checkEm(document.querySelector("#em").value))
        { sendData(props, setData) }
        else {
            setData(0);
        }

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

    let errorek = <div></div>
    if (data === 0) { errorek = <div className="errorrek">Register Error</div> }

    return (
        <div>
            <h1>Sign up</h1>

            <div className="form-control">
                <input id="em" type="text" required />
                <label>Email</label>
            </div>

            <div className="form-control">
                <input id="pass" type="password" required />
                <label>Password</label>
            </div>

            <div className="form-control">
                <input id="rpass" type="password" required />
                <label>Repeat password</label>
            </div>
            {errorek}
            <button onClick={handleClick} className="btn">Register</button>
        </div>);



    async function sendData(props,setData) {


        await fetch('/api/user/crA', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: 0, Email: document.querySelector("#em").value, Pass: document.querySelector("#pass").value })
        })
            .then((response) => response.json())
            .then((dane) => {
                if (dane === false) { setData(0) }
                else { props.setSwi({ status: "sucCreAcc"}); };
            });

    }

    function checkEm(email) {

        var re = /\S+@\S+\.\S+/;
        return re.test(email);

        
    }

}

export default CreateAccount;