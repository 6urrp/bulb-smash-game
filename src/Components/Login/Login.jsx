import { useState } from "react";

import "./Login.css";

const Login = ({setHasName}) => {
    const [nameValue, setNameValue] = useState("");

    const nameHandler = (e) => {
        setNameValue(e.target.value);
    }

    const enterHandler = (e) => {
        localStorage.setItem("name", nameValue);
        setHasName(true);
    }

    return (
        <div className="login">
            <div className="login_container">
                <h2 className="login_title">BULB SMASH</h2>
                <label htmlFor="name">
                    <h2 className="login_name">Name</h2>
                    <input onChange={nameHandler} value={nameValue} type="text" id="name" className="login_input-name" />
                </label>
                
                <div className="login_btn-container">
                    <button type="submit" className="login_btn" onClick={enterHandler}>Enter</button>
                </div>
            </div>
        </div>
    )
};

export default Login;