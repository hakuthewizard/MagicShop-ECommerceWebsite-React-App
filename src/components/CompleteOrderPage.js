import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import './CompleteOrderForm.css';

//in progress
const CompleteOrderForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);
const [forUserMessage, setForUserMessage] = useState("");

    const wizardNameRef = useRef();
    const userPasswordRef = useRef();


   

    const submitHandler = (event) => {
        const wizardName = wizardNameRef.current.value;
        const password = userPasswordRef.current.value;
        event.preventDefault();
        if (password.length < 8) {
            setForUserMessage("password must be at least 8 characters");
            setTimeout(() => {
                setForUserMessage("");
            },3000);
        } else if (wizardName.length > 0 && password.length > 0) {
            localStorage.setItem('isLoggedIn', true);
            setIsLoggedIn(true);
            setForUserMessage("logged in! welcome to the magic world")
            window.location.href = '/magicshoppingcart';

        } else {
        
            setForUserMessage("all fields are required");
            setTimeout(() => {
                setForUserMessage("");
            },3000);
        }
    }

    return (
        <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={submitHandler}>
            <label>Wizard UserName</label>
            <input ref={wizardNameRef}/>
            <label>Password</label>
            <input ref={userPasswordRef} type='password'/>
            <button className="login-btn">Login</button>
        </form>
        {forUserMessage  && <p className='usermessage'>{forUserMessage }</p>}
        </div>
    )
}
export default CompleteOrderForm;