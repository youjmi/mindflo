import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/signup.css"

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen container mt-5 mb-5 ">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title mb-5">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
          className ="inputBoxes"
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
                    className ="inputBoxes"

            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
                    className ="inputBoxes"

            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
                    className ="inputBoxes"

            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className=" registeraccount btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
export default RegisterScreen;


// import React, { useState } from "react";
// import "./css/signup.css"
// import { FormControl, InputGroup, Button, Card, Alert } from "react-bootstrap"
// // import { useAuth } from "../contexts/AuthContext"
// import { Link } from "react-router-dom"
// //import 'bootstrap/dist/css/bootstrap.min.css'
// import API from "../utils/user"




// export default function Signup() {

//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [data, setData] = useState(null);

//   const register = () => {

//     API.saveUser({
 
//       username: registerUsername,
//       password: registerPassword
    
//     })
//       .then((res) => {
//         console.log(res)
//       }).catch((err) => {
//         console.log(err)
//       });

//   }

//   return (
//     <div className="container signupboxForm">
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>



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




          {/* <div>
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
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2 ">
//         Already have an account? <Link to="/login">Log In</Link>
//       </div>

//     </div>

//   );
// }
