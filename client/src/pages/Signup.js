import React, { useState } from "react";
import "./css/signup.css"
import { FormControl, InputGroup, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css'
import API from "../utils/user"




export default function Signup() {

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {

    API.saveUser({
 
      username: registerUsername,
      password: registerPassword
    
    })
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      });

  }

  return (
    <div className="container signupboxForm">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          {/* <Form > 
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e) => setRegisterUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required onChange={(e) => setRegisterPassword(e.target.value)} />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" onChange={(e) => setRegisterPassword(e.target.value)} required />
            </Form.Group> */}
          <div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="email"
                aria-label="Session Name"
                aria-describedby="basic-addon2"
                type= "email"
                onChange={e => setRegisterUsername(e.target.value)}
              // value={isName}

              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="password"
                aria-label="Session Name"
                aria-describedby="basic-addon2"
                type ="password"
                onChange={e => setRegisterPassword(e.target.value)}
              // value={isName}

              />
            </InputGroup>
          </div>



          <div>
            <button className="w-10 mt-3" type="submit" onClick={register}>
              Sign Up
            </button>
          </div>
          {/* </Form> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ">
        Already have an account? <Link to="/login">Log In</Link>
      </div>

    </div>

  );
}


