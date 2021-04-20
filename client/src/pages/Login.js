
import React, {useState} from "react"
import { Form, FormControl, InputGroup, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Cards from "../components/Cards/Cards"
// import { Card } from "reactstrap";
import { Link } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css'
import API from "../utils/user"


import "./css/login.css"

//MEDITATION page info..//
export default function Login () {


  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    API.getUser({
      username: loginUsername,
      password: loginPassword
    
    })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      });

  }

  
  return (
    <div className ="container mt-5 mb-5 loginboxForm">

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {/* <Form >  */}
            {/* <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required /> 
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group> */}
         <div className ="container">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="email"
                aria-label="Session Name"
                aria-describedby="basic-addon2"
                type= "email"
                onChange={e => setLoginUsername(e.target.value)}
              // value={isName}

              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="password"
                aria-label="Session Name"
                aria-describedby="basic-addon2"
                type ="password"
                onChange={e => setLoginPassword(e.target.value)}
              // value={isName}

              />
            </InputGroup>
          </div>

            <div>
            <button  className="w-10 mt-3" type="submit" onClick={login}>  
              Log In
            </button>
            </div>
          {/* </Form> */}
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

    </div>

  );
}
