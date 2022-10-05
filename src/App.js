import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm1 from './components/RegisterationForm/RegesterationForm1';
import Home from './components/Home/Home';
import UserProfile from './components/userProfile/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Routes, Route, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './components/pages';
import Header from './components/Header/Header';
import ContactUs from './components/contactUs/ContactUs';
// import { withRouter } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
export const UserContext = React.createContext(null);

function App(props) {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  // 1234
  const [userEmail, setUserEmail] = useState(null);
  // const location = useLocation();
  //for hiding header on login/register page
  const Layout = ({ hideHeaderPaths = [] }) => {
    const { pathname } = useLocation();
  }



  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${require("../src/components/images/victor.jpg")})` }}>
        {/* {!hideHeaderPaths.includes(pathname) && <Header />} */}
        {/* <Outlet /> */}
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
          {/* <UserContext.Provider value={}> */}
          <Header />
          {/* {location.pathname !== '/exclusion-path' && <Header />} */}
          <Switch>
            <div className="container d-flex align-items-center flex-column">
              {/* <Route path='/'>
              <Empty showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route> */}
              {/* <Route path='/home'>
                <Home showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route> */}
              {/* <Route path='/register1'>
                <RegistrationForm1 showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route>
              <Route path='/login'>
                <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route>
              <Route path='/userProfile'>
                <UserProfile showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route>
              <Route path='/contactUs'>
                <ContactUs showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route> */}
            </div>
          </Switch>
        </UserContext.Provider>
        {/* </UserContext.Provider> */}

      </div>

    </Router>
  );
}

export default App;