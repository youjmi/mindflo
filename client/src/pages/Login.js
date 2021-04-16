
import React from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Cards from "../components/Cards/Cards"
// import { Card } from "reactstrap";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'


import "./css/login.css"

//MEDITATION page info..//
export default function Login () {

  
  return (
    <div className ="container mt-5 mb-5 loginboxForm">

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form > {/*onSubmit={handleSubmit}*/}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required /> {/*ref={} */}
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />{/*ref={} */}
            </Form.Group>
            <div>
            <Button  className="w-100" type="submit">  {/*disabled={loading}*/}
              Log In
            </Button>
            </div>
          </Form>
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
