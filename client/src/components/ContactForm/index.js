import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./style.css";


function ContactForm() {

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29fxmy9",
        "template_mmfok1w",
        e.target,
        "user_e1ugHAhbqqxDA8eOFxFYJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
     e.target.reset()
  }



  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"
        className="form-control"
        name="name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         className="form-control"
         name="email"
      />
      </Form.Group>
      <Form.Group controlId="formBasicSubject">
        <Form.Label>Subject:</Form.Label>
        <Form.Control type="subject" placeholder="Enter subject"
         className="form-control"
         name="subject"
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3}
         className="form-control"
         name="message"
          />
      </Form.Group>

      <Button className="button" variant="primary" type="submit" value="Send">Submit
      </Button>
    </Form>
  );
}

export default ContactForm;