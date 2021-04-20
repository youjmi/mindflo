import React from "react";
import "./css/signup.css"
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css'


export default function Signup () {
  // const emailRef = useRef()
  // const passwordRef = useRef()
  // const passwordConfirmRef = useRef()
  // const { signup } = useAuth()
  // const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)
  // const history = useHistory()

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match")
  //   }

  //   try {
  //     setError("")
  //     setLoading(true)
  //     await signup(emailRef.current.value, passwordRef.current.value)
  //     history.push("/")
  //   } catch {
  //     setError("Failed to create an account")
  //   }

  //   setLoading(false)
  // }

  return (
    <div className ="container signupboxForm">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form > {/*onSubmit={handleSubmit}*/}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  required />{/*ref={} */}
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />{/*ref={} */}
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required /> {/*ref={} */}
            </Form.Group>
            <div>
            <button className="w-10 mt-3" type="submit"> {/*disabled={loading} */}
              Sign Up
            </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ">
        Already have an account? <Link to="/login">Log In</Link>
      </div>

    </div>

  );
}


