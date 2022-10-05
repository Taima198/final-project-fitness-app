import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../App';

function ContactUs(props) {
    console.log(" contact us page")

    const { userEmail, setUserEmail } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [errorMessage1, setErrorMessage1] = React.useState("");


    const [state, setState] = useState({
        message: '',
        successMessage: null
    })
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
            "clientEmail": userEmail,
            "id": "",
            "message": state.message
        }
        if (!state.message) {
            setErrorMessage("SORRY, we haven't get your message yet...")
            setErrorMessage1("")
        }
        else {
            setErrorMessage("")
            setErrorMessage1("Thanks for your feedback!")
        }
        // const response = await axios.post(`http://localhost:5000/Clients/create_user`, payload)
        console.log('hey', JSON.stringify(payload))
        var response;

        try {

            console.log("eshee");
            response = await axios.post(`http://localhost:8080/client/contact-us`, payload)
            console.log("response:")

            if (response.status == 200) {
                console.log("client info sent to server:)" + response.status);

            }
            else if (response.status == 400) {
                console.log("client info haven't sent to server..." + response.status);
            }
        }
        catch (error) {
            // console.log("error::" + error.response.data.error)

            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
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
        props.history.push('/register1');
        //props.updateTitle('Register');
        console.log("ittttttt isss redirect to register");
    }
    return (
        <div className="login-card hv-center">
            <div className="out-card">
                <div className="form-login-container out-cardd">
                    <form >
                        <p className="para"><br></br>We are glad to know your feedback :</p>
                        <div className="feildss">
                            <textarea placeHolder="Write your feedback here :)" id="message" className="messagee"
                                value={state.message}
                                onChange={handleChange}
                                rows="4" cols="50">

                            </textarea>
                            <div className="feild2">
                                {errorMessage && <div className="error"> {errorMessage} </div>}
                            </div>
                            <div className="positive-error">
                                {errorMessage1 && <div className="error"> {errorMessage1} </div>}
                            </div>
                        </div>
                        <div className="feilda">
                            <button
                                type="submit"
                                className="bbtn"
                                onClick={handleSubmitClick}
                            >Submit</button>
                        </div>
                    </form>

                    <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                        {state.successMessage}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ContactUs);