import React, { useState } from 'react';
import axios from 'axios';
import '../RegisterationForm/RegisterationForm.css';
import { withRouter } from "react-router-dom";
import { useContext } from 'react';

import { UserContext } from '../../App';
import { useEffect } from 'react';

function UserProfile(props) {
    const { userEmail, setUserEmail } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [errorMessage2, setErrorMessage2] = React.useState("");
    useEffect(() => {
        // ...
        console.log("user email ::" + userEmail)
    }, [userEmail]);
    const genderOptions = [
        { value: '', text: '--Gender--' },
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
    ];
    const fitnessGoalOptions = [
        { value: '', text: '--fitness goal--' },
        { value: 'Bulk', text: 'bulk' },
        { value: 'fit', text: 'fit' },
        { value: 'maintenance', text: 'maintenance' },
    ];
    const fitnessLevelOptions = [
        { value: '', text: '--fitness level--' },
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
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPass(pass) {
        return /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(pass);
    }

    const handleChangeSelect = (e) => {
        const { id, value } = e.target
        if (id === 'gender')
            setSelectedGender(e.target.value);
        else if (id === 'fitnessGoal')
            setSelectedGoal(e.target.value);
        else if (id === 'fitnessLevel')
            setSelectedLevel(e.target.value);
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const payload = {
            "email": userEmail,
            "userName": state.userName,
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
        if (!isValidEmail(state.email)) {
            setErrorMessage2("Incorrect email adress!")
        }
        if (!isValidPass(state.password)) {
            setErrorMessage("Weak password!, password must contain: 8 characters length,2 letters in Upper Case,1 Special Character (!@#$&*),2 numerals (0-9),3 letters in Lower Case")
        }
        if (state.password === state.confirmPassword) {
            if (state.password.length < 4) {
                setErrorMessage("Weak password, try another one!")
            }
        } else {
            setErrorMessage("Passwords do not match!")
        }
        console.log('heyaaaaaaaaaaaaaaaaaa', JSON.stringify(payload))


        try {
            const response = await axios.post(`http://localhost:8080/client/addRegForm
            `, payload)
            console.log("response::" + response.status)

            if (response.status == 200) {
                console.log("updated successfully:)")
                setUserEmail(state.email)
                alert("wohoooooo");
            }
            else if (response.status == 500) {
                console.log("not update ...")

            }
        }
        catch (error) {
            // console.log("error::" + error.response.data.error)
            alert("wohooooooeeee");
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
        props.history.push('/login');
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
        <div className="outter_card login-card hv-center">
            <form className="form-register-container">
                <div className="feild">
                    <p className="para">Update your user name :</p>
                    <input type="text"
                        id="userName"
                        className="form-controll"
                        placeholder="Enter user name"
                        value={state.userName}
                        onChange={handleChange}
                    />
                </div>

                <div className="feild">
                    <p className="para">Update your height :</p>
                    <input type="number"
                        className="form-controll"
                        id="height"
                        aria-describedby="emailHelp"
                        placeholder="Enter height"
                        value={state.height}
                        onChange={handleChange}
                    />
                </div>
                <div className="feild">
                    <p className="para">Update your weight :</p>
                    <input type="number"
                        className="form-controll"
                        id="weight"
                        aria-describedby="emailHelp"
                        placeholder="Enter weight"
                        value={state.weight}
                        onChange={handleChange}
                    />
                </div>
                <div className="feild">
                    <p className="para">Update your fitness level :</p>
                    <select value={selectedLevel} onChange={handleChangeSelect} id="fitnessLevel" className="fitnessLevel">
                        {fitnessLevelOptions.map(option => (
                            <option className="optionss" key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="feild">
                    <p className="para">Update your fitness goal :</p>
                    <select value={selectedGoal} onChange={handleChangeSelect} id="fitnessGoal" className="fitnessGoal">
                        {fitnessGoalOptions.map(option => (
                            <option className="optionss" key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="feild">
                    <p className="para">Update your training days per week :</p>
                    <input type="number" value={state.trainingFrequency} onChange={handleChange} id="trainingFrequency" className="quantity" min="1" max="7" />

                </div>

                <div className="feild">
                    <p className="para">Update deficincies :<br></br>
                        <input id="iron" value={state.iron} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="iron"> Iron</label><br></br>
                        <input id="vitC" value={state.vitC} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="vitC"> Vitamin C</label><br></br>
                        <input id="vitD" value={state.vitD} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="vitD"> Vitamin D</label><br></br>
                        <input id="omega3" value={state.omega3} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="omaga3"> Omega 3</label><br></br>
                        <input id="vitB12" value={state.vitB12} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="vitB12"> Vitamin B12</label><br></br>
                        <input id="calcium" value={state.calcium} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="calcium"> Calcium</label><br></br>
                        <input id="potasium" value={state.potasium} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="potasium"> Potasium</label><br></br>
                        <input id="magnisum" value={state.magnisum} onChange={handleCheckboxChange} type="checkbox" />
                        <label for="magnisum"> Magnisum</label><br></br>
                    </p>
                </div>

                <div className="feild3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >
                        Update profile
                    </button>
                </div>

                <div className="alert alert-success mt" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>

            </form>
        </div>
    )
}

export default withRouter(UserProfile);