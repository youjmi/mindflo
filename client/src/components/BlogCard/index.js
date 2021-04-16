import React from "react";
import { Card, Container, CardColumns, Form, Button } from "react-bootstrap";
// import Container from "../Container";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import beach from "./beachwave1.png";

class BlogCard extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-center">
          <h1 className="blogTitle">Blog Cards</h1>
        </div>
        <Container>
          <CardColumns className="card-columns">
            <Card className="card">
              <a href="#">
                <Card.Img variant="top" src={beach} />

                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...
                  </Card.Text>
                  {/* <Card.Text >
                    <small className="text-muted">
                      <i className="fas fa-eye"></i>1000
                      <i className="far fa-user"></i>
                      admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018
                    </small>
                  </Card.Text> */}
                </Card.Body>
              </a>
            </Card>
            <Card className="card">
              <a href="#">
                <Card.Img
                  variant="top"
                  src="https://unsplash.com/photos/t1NEMSm1rgI"
                />

                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...
                  </Card.Text>
                  {/* <Card.Text >
                    <small className="text-muted">
                      <i className="fas fa-eye"></i>1000
                      <i className="far fa-user"></i>
                      admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018
                    </small>
                  </Card.Text> */}
                </Card.Body>
              </a>
            </Card>
            <Card className="card">
              <a href="#">
                <Card.Img
                  variant="top"
                  src="https://unsplash.com/photos/t1NEMSm1rgI"
                />

                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...
                  </Card.Text>
                  {/* <Card.Text >
                    <small className="text-muted">
                      <i className="fas fa-eye"></i>1000
                      <i className="far fa-user"></i>
                      admin<i className="fas fa-calendar-alt"></i>Jan 20, 2018
                    </small>
                  </Card.Text> */}
                </Card.Body>
              </a>
            </Card>
          </CardColumns>
        </Container>

        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="title" placeholder="enter title" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Image:</Form.Label>
            <Form.Control type="image" placeholder="insert image link" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Image:</Form.Label>
            <Form.Control type="image" placeholder="insert image link" />
          </Form.Group>

          <Form.Group controlId="blogText">
            <Form.Label>Blog Text:</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>

          <button variant="primary" type="submit">
            Submit
          </button>

          <br />


        </Form>
      </Container>
    );
  }
}

export default BlogCard;
