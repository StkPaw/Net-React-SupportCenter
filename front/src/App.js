import React,{ useState } from 'react';
import Login from './components/login';
import CreateAccount from './components/createAccount';
import UserMenu from './components/UserMenu';
import ModMenu from './components/ModMenu'


function App() {
    
    const [swi, setSwi] = useState({ status:"login"});
    


    switch (swi.status) {
        case "login":
            return (
                <div>
                    <Login setSwi={setSwi} />
                </div>
            );
            
        case "goodLoginU":
            return (
                <div>
                    <UserMenu user={swi.user} />
                </div>
            );
        case "goodLoginM":
            return (
                <div>
                    
                    <ModMenu user={swi.user}/>
                </div>
            );

        case "createAcc":
            return (
                <div>
                    <CreateAccount setSwi={setSwi} />
                </div>
            );
        case "sucCreAcc":
            return (
                <div>
                    <h1>Account created</h1>
                    <button className="btn" onClick={() => { setSwi({status:"login"})}}>Sign in</button>
                </div>
                )
        default:
            console.log("ee lipa jest")
    }
    }




//    if (logged.status === false) {
//        return (
//            <div>
//                <Login setSwi={setSwi}/>
//            </div>
//        );
//    }
//    else {
//        return (
//            <div>
//                <h1>Zalogowano {logged.user.email}</h1>
//            </div>
//        );
//    }
      
//};
    
export default App;
