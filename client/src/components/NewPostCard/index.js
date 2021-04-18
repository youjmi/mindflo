import React, { useState, useEffect } from "react";
import { Card, Container, CardColumns, Form, Button } from "react-bootstrap";
import "./style.css";
//import Container from "../Container"
import API from "../../utils/blog.js";
import "bootstrap/dist/css/bootstrap.min.css";

const NewPostCard = () => {
  //const [blogs, setBlogs] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    post: "",
    //   user: "",
    photo: "",
  });

  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

  // useEffect(() => {
  //     loadBlogs()

  //   }, [])

  //   function loadBlogs() {
  //     API.getBlogs()
  //       .then(res =>
  //         setBlogs(res.data)
  //       )
  //       .catch(err => console.log(err));
  //   };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    
  }

  function handleInputImage(event) {
   
    setFormObject({ ...formObject, photo: event.target.files[0] });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("working");
    // const blogData = new FormData();
    // blogData.append("title", formObject.title);
    // blogData.append("birthdate", formObject.post);
    // blogData.append("name", formObject.photo);
    // if (formObject.title && formObject.user) {
    API.saveBlog({
      title: formObject.title,
      // user: formObject.user,
      post: formObject.post,
      photo: formObject.photo,
    })
      .then(() =>
        setFormObject({
          title: "",
          //   user: "",
          post: "",
          //   date: "",
          photo: "",
          
        })
      )
      .then(() => {
        console.log(formObject);
      })
      // .then(() => loadBlogs())
      .catch((err) => console.log(err));
    // }
  }

  return (
    <Container>
      <Form >
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="enter title"
            onChange={handleInputChange}
            name="title"
            value={formObject.title}
          />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="file"
            placeholder="Upload"
            onChange={handleInputImage}
            accept=".png, .jpg, .jpeg"
            name="photo"
            encType={"multipart/form-data"}
        
          />
        </Form.Group>

        {/* <Form.Group controlId="formBasicUsername">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="username" placeholder="username" 
                      onChange={handleInputChange}
                      name="user"
                      value={formObject.user}/>
                </Form.Group> */}

        <Form.Group controlId="blogText">
          <Form.Label>Blog Text:</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            onChange={handleInputChange}
            name="post"
            value={formObject.post}
          />
        </Form.Group>

        <button variant="primary" type="submit" onClick={handleFormSubmit} encType='multipart/form-data'>
          Submit
        </button>

        <br />
      </Form>
      {/* <form className="contact-form contact-holdbox" > 
    <h1 className="pageTitle pt-5"> Post Blog here</h1>
        <div className ="row pt-2 mx-auto">
            <div className ="col-8 form-group mx-auto">
                <input type ="text" className="form-control" placeholder="Subject" name="subject"  />
            </div>
            <div className ="col-8 form-group mx-auto">
                <input type ="text" className="form-control emailConfirm" placeholder="Email" name="email"   />
            </div>
            <div className ="col-8 form-group mx-auto">
                <input type ="text" className="form-control" placeholder="Name" name="name"   />
            </div>
            <div className ="col-8 form-group mx-auto">
                <textarea type ="text" className="form-control" placeholder="Write blog here..." name="message"   />
            </div>
            <div className ="py-1 col-8 form-group mx-auto">
                <input type ="submit" className="btn btn-info" value="Post"/> {/*ADD onClick={handleOnClickDefault*/}
      {/* </div> 
        </div >
    </form > * /} */}
    </Container>
  );
};

export default NewPostCard;
