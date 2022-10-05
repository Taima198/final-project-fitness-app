import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../App';
import { useEffect } from 'react';

function LoginForm(props) {
    const [errorMessage13, setErrorMessage13] = React.useState("");
    const [errorMessage14, setErrorMessage14] = React.useState("");
    console.log(" login page")
    const { userEmail, setUserEmail } = useContext(UserContext);
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })
    useEffect(() => {
        // ...
        console.log("user email ::" + userEmail)
    }, [userEmail]);
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }



    const handleSubmitClick = async (e) => {
        e.preventDefault();
        console.log(state.email);
        const payload = {
            "id": '',
            "userName": '',
            "email": state.email,
            "password": state.password
        }
        console.log('hey', JSON.stringify(payload))
        var response;

        try {


            response = await axios.post(`http://localhost:8080/client/login`, payload)
            console.log("response:")
            if (response.status == 200) {
                console.log("login successfully:)")

                // const { userEmail, setUserEmail } = useContext(UserContext);
                // setUserEmail((prevState) => ({
                //     userEmail: state.email
                // }))
                // console.log("email :: " + userEmail)
                console.log("state.email " + state.email)
                setUserEmail(state.email)
                console.log("email :: " + userEmail)
                redirectToHome();
            }
            else if (response.status == 400) {

                console.log("you can't login...")
            }
        }
        catch (error) {
            // console.log("error::" + error.response.data.error)

            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                setErrorMessage14(error.response.data)
            }
            // console.log("error::" + response.status)
        }



    }
    const redirectToHome = () => {
        props.history.push('/home');
        //props.updateTitle('Home');
        console.log("ittttttt isss redirect to home");
    }
    const redirectToRegister1 = () => {
        props.history.push('/register');
        //props.updateTitle('Register');
        console.log("ittttttt isss redirect to register");
    }
    // const userEmail = useContext(UserContext);
    // console.log("email:: " + userEmail);
    return (
        <div className="out-card">
            <div className="form-login-container">
                <form>
                    <p className="header-login-page">Login page</p>
                    <div className="feild">

                        <p className="login-para">Email address : </p>
                        <input type="email"
                            className="form-controll"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={state.email}
                            onChange={handleChange}
                        />
                        <div className="positive-error">
                            {errorMessage13 && <div className="error"> {errorMessage13} </div>}
                        </div>
                    </div>

                    <div className="feild">
                        <p className="login-para">Password :</p>
                        <input type="password"
                            className="form-controll"
                            id="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="form-check">
                    </div>
                    <div className="positive-error">
                        {errorMessage14 && <div className="error"> {errorMessage14} </div>}
                    </div>
                    <button
                        type="submit"
                        className="bbtn"
                        onClick={handleSubmitClick}
                    >Submit</button>
                </form>

                <div className="btnn" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="registerMessage">
                    <span className="already-account-mgs">Dont have an account? </span>
                    <br></br>
                    <span className="loginText" onClick={() => redirectToRegister1()}>Register</span>
                </div>
                {/* <div className="mt-2">
                        <span className="mainPageText" onClick={() => redirectToHome()}>Click me to go to home page</span>
                    </div> */}
            </div>
        </div>

    )
}

export default withRouter(LoginForm);