import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useContext } from 'react';
import './WelcomePage.css';
import { UserContext } from '../../App';


function WelcomePage(props) {

    const { userEmail, setUserEmail } = useContext(UserContext);
    // setUserEmail(null);
    const redirectToLogin = () => {
        props.history.push('/log-in');
    }

    const redirectToRegister = () => {
        props.history.push('/register');
    }
    console.log("welcome page")
    return (
        <div className="mainnn" >
            <div className="welcome-container  button-46">
                <div className="welcome-header" role="button">
                    Welcome to out fitness and nutruition suggestion app!<br></br>
                    <p className="small-text">don't have an account? <u className="reg" onClick={() => redirectToRegister()}>Register</u></p>
                </div>

            </div>
            <div className="aaa">
                <button className="bbtnn" onClick={() => redirectToLogin()}>
                    Login
                </button>
            </div>
        </div>

    )
}

export default withRouter(WelcomePage);