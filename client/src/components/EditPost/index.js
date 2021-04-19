import React, { useState, useParams, useEffect } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap"
import API from "../../utils/blog.js";
import "bootstrap/dist/css/bootstrap.min.css";

function EditPost(props) {

  const [blogs, setBlogs] = useState([]);

  const [formObject, setFormObject] = useState({
    title: "",
    post: "",
    //   user: "",
    photo: "",
  });

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  // const {id} = useParams()
  // useEffect(() => {
  //   API.getBlog(id)
  //     .then(res => setBlogs(res.data))
  //     .catch(err => console.log(err));
  // }, [])


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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{opacity:1}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Blog Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
            <Form>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  placeholder={"enter title"}
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

              {/* <Button variant="primary" type="submit" onClick={handleFormSubmit} encType='multipart/form-data'>
            Submit
        </Button> */}

              <br />
            </Form>
          </Container>
      </Modal.Body>
      <Modal.Footer>
      <Button
            onClick={props.onHide}
            onSubmit={handleFormSubmit}
            encType="multipart/form-data"
          >
            Submit
          </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditPost;
