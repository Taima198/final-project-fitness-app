import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../App';


function WelcomePage(props) {

    const { userEmail, setUserEmail } = useContext(UserContext);
    // setUserEmail(null);
    const redirectToLogin = () => {
        props.history.push('/log-in');
    }
    console.log("welcome page")
    return (
        <div className="mainnn" >
            <div>
                Welcome to out fitness and nutruition suggestion app
                <button onClick={() => redirectToLogin()}>
                    Login
                </button>
            </div>
        </div >
    )
}

export default withRouter(WelcomePage);