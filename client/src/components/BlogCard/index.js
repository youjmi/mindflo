import React from "react";
import { Card, Container, CardColumns, Form, Button } from "react-bootstrap";
// import Container from "../Container";
import "./style.css";
//import API from "../utils/blog"
import "bootstrap/dist/css/bootstrap.min.css";
import beach from "./beachwave1.png";

function BlogCard (){

  // const [blogs, setBlogs] = useState([])
  // const [formObject, setFormObject] = useState({
  //   title="",
  //   post="",
  //   image=""
  // })


  // useEffect(() => {
  //   loadBlogs()
    
  // }, [])


  // function loadBlogs() {
  //   API.getBlogs()
  //     .then(res => 
  //       setBlogs(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // function deleteBlog(id) {
  //   API.deleteBlog(id)
  //     .then(res => loadBlogs())
  //     .catch(err => console.log(err));
  // }

  //Add function for update when user clicks edit. 

 
    return (
      <div>
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

      </div>
    );
  
}

export default BlogCard;
