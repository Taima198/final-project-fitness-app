import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, withRouter
} from "react-router-dom";

import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegisterationForm/RegesterationForm1';
import UserProfile from '../userProfile/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "../welcomePage/WelcomePage";
import Home from "../Home/Home";
import LogIn from "../LoginForm/LoginForm";
import ContactUs from "../contactUs/ContactUs";
import { useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { useContext } from 'react';

import { UserContext } from '../../App';

import './Header.css';

function Header(props) {
  const { userEmail, setUserEmail } = useContext(UserContext);

  useEffect(async () => {
    // ...
    try {
      const payload = {
        "date": "12.12.12",
        "email": userEmail
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

  const setUserEmailFun = () => {
    setUserEmail(null);
  }

  if (!userEmail) {
    console.log("okkkkkkkkkkkkkkkkkkkkkkk")

    return (
      <Router>
        <div className="header">
          <Navbar className="navbar navbar-dark bg-dark">
            <Container fluid>
              <Navbar.Brand as={Link} to='/welcome-page'>Fitness & Nutrition App</Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '120px' }}
                  collapse navbar-collapse
                >
                  <Nav.Link as={Link} to='/welcome-page'>
                    {/* <BsPerson /> */}
                  </Nav.Link>
                  <Nav.Link as={Link} to='/log-in'>Log in
                    {/* <BsPerson /> */}
                  </Nav.Link>
                  <Nav.Link as={Link} to='/register'>Register
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/welcome-page">
              <WelcomePage />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/log-in">
              <LogIn />
            </Route>
            <Route path="/register">
              <RegistrationForm />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  else {
    return (
      <Router>
        <div className="header">
          <Navbar className="navbar navbar-dark bg-dark">
            <Container fluid>
              <Navbar.Brand as={Link} to='/home'>Fitness & Nutrition App</Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '120px' }}
                  collapse navbar-collapse
                >

                  <Nav.Link as={Link} to='/welcome-page' onClick={() => setUserEmailFun()}>Log out
                    {/* <BsPerson /> */}
                  </Nav.Link>
                  <Nav.Link as={Link} to='/userProfile'>Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to='/contactUs'>Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            {/* <Route path="/">
            <Empty />
          </Route> */}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/log-in">
              <LogIn />
            </Route>
            <Route path="/welcome-page">
              <WelcomePage />
            </Route>
            <Route path="/register">
              <RegistrationForm />
            </Route>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

}
export default withRouter(Header);