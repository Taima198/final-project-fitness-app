import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import axios from 'axios'
import DatePicker from 'sassy-datepicker';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { HiOutlinePlus } from 'react-icons/hi';
import { useContext } from 'react';

import { UserContext } from '../../App';
import { useEffect } from 'react';
// import { loadingIndicatorCSS } from 'react-select/dist/declarations/src/components/indicators';
function Home(props) {
    const { userEmail, setUserEmail } = useContext(UserContext);
    const [loading, setLoading] = useState(false)
    console.log(" home page")
    const [errorMessage1, setErrorMessage1] = React.useState("");
    const [errorMessage2, setErrorMessage2] = React.useState("");
    const [errorMessage3, setErrorMessage3] = React.useState("");
    const [errorMessage4, setErrorMessage4] = React.useState("");
    const [errorMessage5, setErrorMessage5] = React.useState("");
    const [errorMessage6, setErrorMessage6] = React.useState("");
    const [errorMessage7, setErrorMessage7] = React.useState("");
    const [errorMessage8, setErrorMessage8] = React.useState("");
    const [errorMessage9, setErrorMessage9] = React.useState("");
    const [errorMessage10, setErrorMessage10] = React.useState("");
    const [errorMessage11, setErrorMessage11] = React.useState("");
    const [errorMessage12, setErrorMessage12] = React.useState("");

    const onChange = (date) => {
        console.log(date.toString());

    }
    useEffect(async () => {
        // ...
        try {
            const payload = {
                "date": "12.12.12",
                "email": userEmail
            }

            const response = await axios.post(`http://localhost:8080/client/get-suggestions`, payload)

            if (response.status == 200) {
                var s = ""
                for (var i = 0; i < response.data.length; i++) {
                    s = s + "\r\n" + response.data[i] + "\r\n";
                    console.log("rep", response.data[i])
                }
                console.log("s :: ", s)
                if (loading == false) {
                    setLoading(true)
                    setState({ suggestion: s })
                    console.log("suggestions:: ", state.suggestion)

                }


                // setUserEmail(state.email)
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
            }
            // console.log("error::" + response.status)
        }
        console.log("user email ::" + userEmail)
    });
    const divVitaminListStyle = {
        margin: 100,
        width: 300

    }
    function redirectToLogin() {
        props.history.push('/login');
    }
    const [state, setState] = useState({
        iron_2: false,
        vitC_2: false,
        vitD_2: false,
        vitB12_2: false,
        omega3_2: false,
        calcium_2: false,
        potasium_2: false,
        magnisum_2: false,
        successMessage_2: null,
        chest: false,
        back: false,
        shoulders: false,
        core: false,
        legs: false,
        glutes: false,
        triceps: false,
        biceps: false,
        running_startTime: "",
        running_endTime: "",
        swimming_startTime: "",
        swimming_endTime: "",
        hiit_startTime: "",
        hiit_endTime: "",
        miss_startTime: "",
        miss_endTime: "",
        jogging_startTime: "",
        jogging_endTime: "",
        cross_startTime: "",
        cross_endTime: "",
        protien_intake: "",
        carbs_intake: "",
        fats_intake: "",
        suggestion: "okk",
        day_event: "i trained legs today"
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleCheckboxChange2 = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'iron-2':
                state.iron_2 = !state.iron_2;
                break;
            case 'vitC-2':
                state.vitC_2 = !state.vitC_2;
                break;
            case 'vitD-2':
                state.vitD_2 = !state.vitD_2;
                break;
            case 'vitB12-2':
                state.vitB12_2 = !state.vitB12_2;
                break;
            case 'omega3-2':
                state.omega3_2 = !state.omega3_2;
                break;
            case 'calcium-2':
                state.calcium_2 = !state.calcium_2;
                break;
            case 'potasium-2':
                state.potasium_2 = !state.potasium_2;
                break;
            case 'magnisum-2':
                state.magnisum_2 = !state.magnisum_2;
                break;

        }
    };
    const handleCheckboxChange3 = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'chest':
                state.chest = !state.chest;
                break;
            case 'back':
                state.back = !state.back;
                break;
            case 'shoulders':
                state.shoulders = !state.shoulders;
                break;
            case 'core':
                state.core = !state.core;
                break;
            case 'legs':
                state.legs = !state.legs;
                break;
            case 'glutes':
                state.glutes = !state.glutes;
                break;
            case 'biceps':
                state.biceps = !state.biceps;
                break;
            case 'triceps':
                state.triceps = !state.triceps;
                break;

        }
    };
    const handleSubmitClick_weightTraining = async (e) => {
        e.preventDefault();
        const payload = {
            "clientEmail": userEmail,
            "id": "",
            "chest": state.chest,
            "back": state.back,
            "shoulders": state.shoulders,
            "core": state.core,
            "legs": state.legs,
            "glutes": state.glutes,
            "triceps": state.triceps,
            "biceps": state.biceps
        }
        console.log('weightsssss::', JSON.stringify(payload))
        var response;

        try {

            console.log("eshee");
            response = await axios.post(`http://localhost:8080/client/update-weight-training`, payload)
            console.log("response:")

            if (response.status == 200) {
                console.log("client info sent to server:)" + response.status);
                setErrorMessage8("Info already submitted succesfully!")


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
    const handleSubmitClick_cardio = async (e) => {
        e.preventDefault();
        const payload = {
            "clientEmail": userEmail,
            "id": "",
            "running_startTime": state.running_startTime,
            "running_endTime": state.running_endTime,
            "swimming_startTime": state.swimming_startTime,
            "swimming_endTime": state.swimming_endTime,
            "hiit_startTime": state.hiit_startTime,
            "hiit_endTime": state.hiit_endTime,
            "miss_startTime": state.miss_startTime,
            "miss_endTime": state.miss_endTime,
            "cross_startTime": state.cross_startTime,
            "cross_endTime": state.cross_endTime,
            "jogging_startTime": state.jogging_startTime,
            "jogging_endTime": state.jogging_endTime
        }
        console.log('cardiooooo::', JSON.stringify(payload))
        var response;

        try {

            console.log("eshee");
            response = await axios.post(`http://localhost:8080/client/update-cardio-training`, payload)
            console.log("response:")

            if (response.status == 200) {
                console.log("client info sent to server:)" + response.status);
                if (state.running_startTime)
                    setErrorMessage1("Info submitted succesfully!");
                else if (state.swimming_startTime)
                    setErrorMessage2("Info submitted succesfully!");
                else if (state.hiit_startTime)
                    setErrorMessage3("Info submitted succesfully!");
                else if (state.miss_startTime)
                    setErrorMessage4("Info submitted succesfully!");
                else if (state.jogging_startTime)
                    setErrorMessage5("Info submitted succesfully!");
                else if (state.cross_startTime)
                    setErrorMessage6("Info submitted succesfully!");


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

    const handleSubmitClick_supplements = async (e) => {
        e.preventDefault();
        const payload = {
            "clientEmail": userEmail,
            "id": "",
            "iron_2": state.iron_2,
            "vitC_2": state.vitC_2,
            "vitD_2": state.vitD_2,
            "vitB12_2": state.vitB12_2,
            "omega3_2": state.omega3_2,
            "calcium_2": state.calcium_2,
            "potasium_2": state.potasium_2,
            "magnisum_2": state.magnisum_2,
        }


        console.log('suplemetssssss:: ', JSON.stringify(payload))
        var response;

        // setErrorMessage("Info submitted succesfully!")

        try {

            console.log("eshee");
            response = await axios.post(`http://localhost:8080/client/update-suppliments`, payload)
            console.log("response:")

            if (response.status == 200) {
                console.log("client info sent to server :)" + response.status);
                setErrorMessage7("Info submitted succesfully!")

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



    const handleSubmitClick_nutrition = async (e) => {
        e.preventDefault();
        const payload = {
            "clientEmail": userEmail,
            "id": "",
            "protien_intake": state.protien_intake,
            "carbs_intake": state.carbs_intake,
            "fats_intake": state.fats_intake
        }
        console.log('nutritionnnn::', JSON.stringify(payload))
        var response;

        try {

            console.log("eshee");
            response = await axios.post(`http://localhost:8080/client/update-nutrition-intake`, payload)
            console.log("response:")

            if (response.status == 200) {
                console.log("client info sent to server:)" + response.status);
                setErrorMessage9("Info submitted succesfully!")


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

    return (
        <div className="main" >
            <div className="split left">
                <Popup className="main-popup" trigger={<DatePicker onChange={onChange} />} modal nested>
                    <div className="calender-pop-up">
                        <p>Sports:</p>
                        <div className="sport-con">
                            <Popup trigger={<button className="bbtn">Weights Training</button>} modal nested>
                                <div className="weights-pop-up">
                                    <p>What body parts have you trained today?</p>
                                    <input id="chest" value={state.chest} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="chest"> Chest</label><br></br>
                                    <input id="back" value={state.back} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="back"> Back</label><br></br>
                                    <input id="shoulders" value={state.shoulders} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="shoulders"> Shoulders</label><br></br>
                                    <input id="core" value={state.core} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="core"> Core</label><br></br>
                                    <input id="legs" value={state.legs} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="legs"> legs</label><br></br>
                                    <input id="glutes" value={state.glutes} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="glutes"> Glutes</label><br></br>
                                    <input id="triceps" value={state.triceps} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="triceps"> triceps</label><br></br>
                                    <input id="biceps" value={state.biceps} onChange={handleCheckboxChange3} type="checkbox" />
                                    <label for="biceps"> Biceps</label><br></br>

                                    <button type="submit" onClick={handleSubmitClick_weightTraining} className="btnn">Submit</button>
                                    <div className="positive-error">
                                        {errorMessage8 && <div className="error"> {errorMessage8} </div>}
                                    </div>
                                </div>
                            </Popup>
                            <Popup trigger={<button className="bbtn">Cardio</button>} modal nested>
                                <div className="cardio-pop-up">
                                    <form className="cardio-form">
                                        <p className="paraa">Insert running session time :</p>
                                        <div className="time">
                                            start time :
                                            <input type="time"
                                                className="form-co"
                                                id="running_startTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.running_startTime}
                                                onChange={handleChange}
                                            /></div>
                                        <div className="time">
                                            end time :
                                            <input type="time"
                                                className="form-co"
                                                id="running_endTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.running_endTime}
                                                onChange={handleChange}
                                            /></div>
                                        <div className="positive-error">
                                            {errorMessage1 && <div className="error"> {errorMessage1} </div>}
                                        </div>
                                        <button className="btnnn"
                                            type="submit"
                                            onClick={handleSubmitClick_cardio}>
                                            Submit
                                        </button>

                                    </form>

                                    <form className="cardio-form">
                                        <p className="paraa">Insert swimming session time :</p>
                                        <div className="time">
                                            start time :
                                            <input type="time"
                                                className="form-co"
                                                id="swimming_startTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.swimming_startTime}
                                                onChange={handleChange}
                                            /></div>
                                        <div className="time">
                                            end time :
                                            <input type="time"
                                                className="form-co"
                                                id="swimming_endTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.swimming_endTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="positive-error">
                                            {errorMessage2 && <div className="error"> {errorMessage2} </div>}
                                        </div>
                                        <button className="btnnn"
                                            type="submit"
                                            onClick={handleSubmitClick_cardio}>
                                            Submit</button>
                                    </form>
                                    <form className="cardio-form">
                                        <p className="paraa">Insert HIIT session time :</p>

                                        <div className="time">
                                            start time :
                                            <input type="time"
                                                className="form-co"
                                                id="hiit_startTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.hiit_startTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="time">
                                            end time :
                                            <input type="time"
                                                className="form-co"
                                                id="hiit_endTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.hiit_endTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="positive-error">
                                            {errorMessage3 && <div className="error"> {errorMessage3} </div>}
                                        </div>
                                        <button className="btnnn"
                                            type="submit"
                                            onClick={handleSubmitClick_cardio}>
                                            Submit</button>
                                    </form>
                                    <form className="cardio-form">
                                        <p className="paraa">Insert MISS session time :
                                        </p>
                                        <div className="time">
                                            start time :
                                            <input type="time"
                                                className="form-co"
                                                id="miss_startTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.miss_startTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="time">
                                            end time :
                                            <input type="time"
                                                className="form-co"
                                                id="miss_endTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.miss_endTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="positive-error">
                                            {errorMessage4 && <div className="error"> {errorMessage4} </div>}
                                        </div>
                                        <button className="btnnn"
                                            type="submit"
                                            onClick={handleSubmitClick_cardio}>
                                            Submit
                                        </button>
                                    </form>
                                    <form className="cardio-form">
                                        <p className="paraa">Insert jogging session time :
                                        </p>
                                        <div className="time">
                                            start time :
                                            <input type="time"
                                                className="form-co"
                                                id="jogging_startTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.jogging_startTime}
                                                onChange={handleChange}
                                            /></div>
                                        <div className="time">
                                            end time :<input type="time"
                                                className="form-co"
                                                id="jogging_endTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.jogging_endTime}
                                                onChange={handleChange}
                                            /> </div>
                                        <div className="positive-error">
                                            {errorMessage5 && <div className="error"> {errorMessage5} </div>}
                                        </div>
                                        <button className="btnnn"
                                            type="submit"
                                            onClick={handleSubmitClick_cardio}>
                                            Submit</button>
                                    </form>
                                    <form className="cardio-form">
                                        <p className="paraa">Insert Cross session time :
                                        </p>
                                        <div className="time">
                                            start time :
                                            <input type="time"
                                                className="form-co"
                                                id="cross_startTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.cross_startTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="time">
                                            end time :
                                            <input type="time"
                                                className="form-co"
                                                id="cross_endTime"
                                                aria-describedby="runningTime"
                                                placeholder="how many time did you run"
                                                value={state.cross_endTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="positive-error">
                                            {errorMessage6 && <div className="error"> {errorMessage6} </div>}
                                        </div>
                                        <button className="btnnn"
                                            type="submit"
                                            onClick={handleSubmitClick_cardio}>
                                            Submit</button>
                                    </form>
                                </div>
                            </Popup>
                        </div>


                        <br></br>
                        <div className="nutrition-con">
                            <p className="nutrition-feild" >Nutrition:    </p>
                            <Popup trigger={<button className="bbtn">Supplements</button>} modal nested>
                                <div className="vit-popup">
                                    <p>Whitch supplements have you took today?</p>
                                    <input id="iron-2" value={state.iron_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="iron-2"> Iron</label><br></br>
                                    <input id="vitC-2" value={state.vitC_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="vitC-2"> Vitamin C</label><br></br>
                                    <input id="vitD-2" value={state.vitD_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="vitD-2"> Vitamin D</label><br></br>
                                    <input id="omega3-2" value={state.omega3_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="omega3-2"> Omega 3</label><br></br>
                                    <input id="vitB12-2" value={state.vitB12_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="vitB12-2"> Vitamin B12</label><br></br>
                                    <input id="calcium-2" value={state.calcium_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="calcium-2"> Calcium</label><br></br>
                                    <input id="potasium-2" value={state.potasium_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="potasium-2"> Potasium</label><br></br>
                                    <input id="magnisum-2" value={state.magnisum_2} onChange={handleCheckboxChange2} type="checkbox" />
                                    <label for="magnisum-2"> Magnisum</label><br></br>

                                    <button className="btnn"
                                        type="submit"
                                        onClick={handleSubmitClick_supplements}>
                                        Submit</button>
                                    <div className="positive-error">
                                        {errorMessage7 && <div className="error"> {errorMessage7} </div>}
                                    </div>
                                </div>
                            </Popup>
                            <Popup trigger={<button className="bbtn">Nutrition</button>} modal nested>
                                <div className="nut-popup">
                                    <p>Submit your nutritional benefits per day:</p>
                                    <div>
                                        <label for="protien">What's your total protien intake today?</label><br></br>
                                        <input className="nutrition-supplements-feild"
                                            id="protien_intake"
                                            type="number"
                                            placeholder="How many protien in grams"
                                            value={state.protien_intake}
                                            onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label for="carbs">What's your total carbs intake today?</label><br></br>
                                        <input className="nutrition-supplements-feild"
                                            id="carbs_intake"
                                            type="number"
                                            placeholder="How many carbs in grams"
                                            value={state.carbs_intake}
                                            onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label for="fats">What's your total fats intake today?</label><br></br>
                                        <input className="nutrition-supplements-feild"
                                            id="fats_intake"
                                            type="number"
                                            placeholder="How many fats in grams"
                                            value={state.fats_intake}
                                            onChange={handleChange} />
                                    </div>

                                    <button className="btnn"
                                        type="submit"
                                        onClick={handleSubmitClick_nutrition}>Submit</button>
                                </div>
                                <div className="positive-error">
                                    {errorMessage9 && <div className="error"> {errorMessage9} </div>}
                                </div>
                            </Popup>
                        </div>
                        <br></br>


                    </div>
                </Popup>
                {/* <p className="outputOfTheDayFeild">
                    {state.day_event}
                </p> */}

            </div>
            {/* </Popup>
            </div > */}

            <div className="split right">
                <form>
                    <label>
                        suggestions of the day:

                        <p className="outputOfTheDayFeild">
                            {state.suggestion}
                        </p>

                    </label>
                </form>
            </div>

        </div >
    )
}

export default withRouter(Home);