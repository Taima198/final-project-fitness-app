import React, { useState } from 'react';
import axios from 'axios';
import './RegisterationForm.css';
import { withRouter } from "react-router-dom";
import { useContext } from 'react';

import { UserContext } from '../../App';
import { useEffect } from 'react';

function RegistrationForm1(props) {
    const { userEmail, setUserEmail } = useContext(UserContext);
    const [errorMessage15, setErrorMessage15] = React.useState("");
    const [errorMessage16, setErrorMessage16] = React.useState("");
    const [errorMessage17, setErrorMessage17] = React.useState("");
    const [errorMessage18, setErrorMessage18] = React.useState("");
    const [errorMessage19, setErrorMessage19] = React.useState("");
    const [errorMessage20, setErrorMessage20] = React.useState("");
    const [errorMessage21, setErrorMessage21] = React.useState("");
    const [errorMessage22, setErrorMessage22] = React.useState("");
    const [errorMessage23, setErrorMessage23] = React.useState("");
    const [errorMessage25, setErrorMessage25] = React.useState("");
    const [errorMessage24, setErrorMessage24] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState("");
    const [errorMessage2, setErrorMessage2] = React.useState("");
    useEffect(() => {
        console.log("user email ::" + userEmail)
    }, [userEmail]);
    const genderOptions = [
        { value: '', text: ' -- Gender -- ' },
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
    ];
    const fitnessGoalOptions = [
        { value: '', text: ' -- Fitness goal -- ' },
        { value: 'Bulk', text: 'bulk' },
        { value: 'fit', text: 'fit' },
        { value: 'maintenance', text: 'maintenance' },
    ];
    const fitnessLevelOptions = [
        { value: '', text: ' -- Fitness level -- ' },
        { value: 'Begginer', text: 'Begginer' },
        { value: 'Advanced', text: 'Advanced' },
        { value: 'Intermedate', text: 'Intermedate' },
    ];
    const [selectedGender, setSelectedGender] = useState(genderOptions[0].value);
    const [selectedGoal, setSelectedGoal] = useState(fitnessGoalOptions[0].value);
    const [selectedLevel, setSelectedLevel] = useState(fitnessLevelOptions[0].value);

    const [state, setState] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        birthdayDate: "",
        height: "",
        weight: "",
        fitnessLevel: "",
        fitnessGoal: "",
        trainingFrequency: "",
        iron: false,
        vitC: false,
        vitD: false,
        vitB12: false,
        omega3: false,
        calcium: false,
        potasium: false,
        magnisum: false,
        successMessage: null
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    // function isValidPass(pass) {
    //     return /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(pass);
    // }

    const handleChangeSelect = (e) => {
        const { id, value } = e.target
        if (id == 'gender')
            setSelectedGender(e.target.value);
        else if (id == 'fitnessGoal')
            setSelectedGoal(e.target.value);
        else if (id == 'fitnessLevel')
            setSelectedLevel(e.target.value);
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const payload = {
            "userName": state.userName,
            "email": state.email,
            "password": state.password,
            "gender": state.gender,
            "birthdayDate": state.birthdayDate,
            "height": state.height,
            "weight": state.weight,
            "fitnessLevel": state.fitnessLevel,
            "fitnessGoal": state.fitnessGoal,
            "trainingFrequency": state.trainingFrequency,
            "iron": state.iron,
            "vitC": state.vitC,
            "vitD": state.vitD,
            "vitB12": state.vitB12,
            "omega3": state.omega3,
            "calcium": state.calcium,
            "potasium": state.potasium,
            "magnisum": state.magnisum
        }
        if (!state.userName)
            setErrorMessage15("Missing user name...")
        if (!state.email)
            setErrorMessage16("Missing email address...")
        if (!state.password)
            setErrorMessage17("Missing password name...")
        if (state.password != state.confirmPassword)
            setErrorMessage18("Passwords don't match...")
        if (!state.fitnessGoal)
            setErrorMessage19("Missing fitness goal...")
        if (!state.fitnessLevel)
            setErrorMessage20("Missing fitness level...")
        if (!state.birthdayDate)
            setErrorMessage21("Missing birthday date...")
        if (!state.trainingFrequency)
            setErrorMessage22("Missing training frequency...")
        if (!state.gender)
            setErrorMessage23("Missing gender...")
        if (!state.height)
            setErrorMessage24("Missing height...")
        if (!state.weight)
            setErrorMessage25("Missing weight...")
        // if (!isValidPass(state.password)) {
        //     setErrorMessage("Weak password!, password must contain: 8 characters length,2 letters in Upper Case,1 Special Character (!@#$&*),2 numerals (0-9),3 letters in Lower Case")
        // }
        console.log('heyaaaaaaaaaaaaaaaaaa', JSON.stringify(payload))

        try {


            const response = await axios.post(`http://localhost:8080/client/addRegForm
    `, payload)
            console.log("response::" + response.status)
            if (response.status == 200) {
                console.log("welcome to the new user :)")
                setUserEmail(state.email)

                redirectToHome();
            }
            else if (response.status == 400) {
                console.log("already have an account...")
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
        // props.updateTitle('Home');
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.history.push('/log-in');
    }
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'iron':
                state.iron = !state.iron;
                break;
            case 'vitC':
                state.vitC = !state.vitC;
                break;
            case 'vitD':
                state.vitD = !state.vitD;
                break;
            case 'vitB12':
                state.vitB12 = !state.vitB12;
                break;
            case 'omega3':
                state.omega3 = !state.omega3;
                break;
            case 'calcium':
                state.calcium = !state.calcium;
                break;
            case 'potasium':
                state.potasium = !state.potasium;
                break;
            case 'magnisum':
                state.magnisum = !state.magnisum;
                break;

        }
    };
    return (
        <div className="outter_card  login-card mt-2 hv-center">
            <form className="form-register-container">
                <h1 className="header-login-page">Registeration Page</h1>
                <div className="feild">
                    <p className="para">Create user name :</p>
                    <input type="text"
                        id="userName"
                        className="form-controll"
                        placeholder="Enter your name"
                        value={state.userName}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage15 && <div className="error"> {errorMessage15} </div>}
                    </div>
                </div>

                <div className="feild">
                    <p className="para">Create email address :</p>
                    <input type="email"
                        className="form-controll"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage16 && <div className="error"> {errorMessage16} </div>}
                    </div>
                </div>


                <div className="feild">
                    <p className="para">Create password :</p>
                    <input type="password"
                        className="form-controll"
                        id="password"
                        placeholder="Insert password"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage17 && <div className="error"> {errorMessage17} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">Confirm password :</p>
                    <input type="password"
                        className="form-controll"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage18 && <div className="error"> {errorMessage18} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">Select your gender :</p>
                    <select value={selectedGender} onChange={handleChangeSelect} id="gender" className="gender">
                        {genderOptions.map(option => (
                            <option className="optionss" key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}

                    </select>
                    <div className="feild2">
                        {errorMessage23 && <div className="error"> {errorMessage23} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">Set your birthday date :</p>
                    <input type="date"
                        className="form-controll"
                        id="birthdayDate"
                        placeholder="Enter your birthday date"
                        value={state.birthdayDate}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage21 && <div className="error"> {errorMessage21} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">What's your height ? (cm)</p>
                    <input type="number"
                        className="form-controll"
                        id="height"
                        aria-describedby="emailHelp"
                        placeholder="Enter your height"
                        value={state.height}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage24 && <div className="error"> {errorMessage24} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">What's your weight ? (kg)</p>
                    <input type="number"
                        className="form-controll"
                        id="weight"
                        aria-describedby="emailHelp"
                        placeholder="Enter your weight"
                        value={state.weight}
                        onChange={handleChange}
                    />
                    <div className="feild2">
                        {errorMessage25 && <div className="error"> {errorMessage25} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">What's your fitness level ? </p>
                    <select value={selectedLevel} onChange={handleChangeSelect} id="fitnessLevel" className="fitnessLevel">
                        {fitnessLevelOptions.map(option => (
                            <option className="optionss" key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}


                    </select>
                    <div className="feild2">
                        {errorMessage20 && <div className="error"> {errorMessage20} </div>}
                    </div>
                </div>

                <div className="feild">
                    <p className="para">What's your fitness goal ? </p>
                    <select value={selectedGoal} onChange={handleChangeSelect} id="fitnessGoal" className="fitnessGoal">
                        {fitnessGoalOptions.map(option => (
                            <option className="optionss" key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                    <div className="feild2">
                        {errorMessage19 && <div className="error"> {errorMessage19} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">What's your training days per week ? </p>
                    <input type="number" value={state.trainingFrequency} onChange={handleChange} id="trainingFrequency" className="quantity" min="1" max="7" />
                    <div className="feild2">
                        {errorMessage22 && <div className="error"> {errorMessage22} </div>}
                    </div>
                </div>
                <div className="feild">
                    <p className="para">Deficincies: </p>
                    <input className="checked" id="iron" value={state.iron} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="iron"> Iron</label><br></br>
                    <input className="checked" id="vitC" value={state.vitC} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="vitC"> Vitamin C</label><br></br>
                    <input className="checked" id="vitD" value={state.vitD} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="vitD"> Vitamin D</label><br></br>
                    <input className="checked" id="omega3" value={state.omega3} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="omaga3"> Omega 3</label><br></br>
                    <input className="checked" id="vitB12" value={state.vitB12} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="vitB12"> Vitamin B12</label><br></br>
                    <input className="checked" id="calcium" value={state.calcium} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="calcium"> Calcium</label><br></br>
                    <input className="checked" id="potasium" value={state.potasium} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="potasium"> Potasium</label><br></br>
                    <input className="checked" id="magnisum" value={state.magnisum} onChange={handleCheckboxChange} type="checkbox" />
                    <label for="magnisum"> Magnisum</label><br></br>

                </div>

                <div className="feild3">
                    <button
                        type="submit"
                        className="bbtn"
                        onClick={handleSubmitClick}
                    >
                        Submit
                    </button>
                </div>

                <div className="alert alert-success mt" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="feild-last">
                    <span onClick={() => redirectToLogin()}>Already have an account?</span>
                </div>
            </form>
        </div>
    )
}

export default withRouter(RegistrationForm1);