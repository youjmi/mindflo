
// import React, {useState} from "react"
// import { Form, FormControl, InputGroup, Button, Card, Alert } from "react-bootstrap"
// // import { useAuth } from "../contexts/AuthContext"
// // import Hero from "../components/Hero";
// // import Container from "../components/Container";
// // import Row from "../components/Row";
// // import Col from "../components/Col";
// // import Cards from "../components/Cards/Cards"
// // import { Card } from "reactstrap";
// import { Link } from "react-router-dom"
// //import 'bootstrap/dist/css/bootstrap.min.css'
// import API from "../utils/user"


// import "./css/login.css"

// //MEDITATION page info..//
// export default function Login () {


//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const login = () => {
//     API.getUser({
//       username: loginUsername,
//       password: loginPassword

//     })
//       .then((res) => {
//         console.log(res)
//       }).catch((err) => {
//         console.log(err)
//       });

//   }


//   return (
//     <div className ="container mt-5 mb-5 loginboxForm">

//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Log In</h2>
//           {/* <Form >  */}
//             {/* <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" required /> 
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" required />
//             </Form.Group> */}
//          <div className ="container">
//             <InputGroup className="mb-3">
//               <FormControl
//                 placeholder="email"
//                 aria-label="Session Name"
//                 aria-describedby="basic-addon2"
//                 type= "email"
//                 onChange={e => setLoginUsername(e.target.value)}
//               // value={isName}

//               />
//             </InputGroup>
//             <InputGroup className="mb-3">
//               <FormControl
//                 placeholder="password"
//                 aria-label="Session Name"
//                 aria-describedby="basic-addon2"
//                 type ="password"
//                 onChange={e => setLoginPassword(e.target.value)}
//               // value={isName}

//               />
//             </InputGroup>
//           </div>

//             <div>
//             <button  className="w-10 mt-3" type="submit" onClick={login}>  
//               Log In
//             </button>
//             </div>
//           {/* </Form> */}
//           {/* <div className="w-100 text-center mt-3">
//             <Link to="/forgot-password">Forgot Password?</Link>
//           </div> */}
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Need an account? <Link to="/signup">Sign Up</Link>
//       </div>

//     </div>

//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/login.css"
import Footer from '../components/Footer/footer';


const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");


  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { username, password },
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
    <div className="login-screen mt-5 mb-5 container loginboxForm">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title mb-5">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            className="inputBoxes"
            type="text"
            required
            id="name"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password: {" "}
            {/* <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link> */}
          </label>
          <input
            className="inputBoxes"
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary loginaccount">
          Login
        </button>
<br></br>
        <span className="login-screen__subtext">
          Don't have an account? <Link to="/signup">Sign up Here!</Link>
        </span>
      </form>





    </div>

  );
};

export default LoginScreen;