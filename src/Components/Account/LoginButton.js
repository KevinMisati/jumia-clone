import React from 'react'
import classes from "./LoginButton.module.css"
import Button from "../UI/Button"

const LoginButton = () => {
    return (
        <div className={classes["login-button"]}>
            <div>
                <Button name="Login" />
            </div>
          
            <div><p>or</p></div>
            <button className={classes["create-account"]}>create an account</button>
            <div>
                <span>Account</span>
                <span>Orders </span>
                <span>Saved Items</span>
            </div>
        </div>
        
    )
}

export default LoginButton
