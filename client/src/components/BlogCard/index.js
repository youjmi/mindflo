import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  CardColumns,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
// import Container from "../Container";
import { FaEdit} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/blog";
import "bootstrap/dist/css/bootstrap.min.css";
import beach from "./beachwave1.png";
import EditPost from "../EditPost";

function BlogCard() {
  const [blogs, setBlogs] = useState([]);
  // const [formObject, setFormObject] = useState({
  //   title="",
  //   post="",
  //   // image=""
  // })

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    loadBlogs();
  }, []);

  function loadBlogs() {
    API.getBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBlog(id) {
    API.deleteBlog(id)
      .then((res) => loadBlogs())
      .catch((err) => console.log(err));
  }

  // function updateBlog(id) {
  //   API.updateBlog(id)
  //     .then((res) => loadBlogs())
  //     .catch((err) => console.log(err));
  // }

  //Add function for update when user clicks edit.

  return (
    <div>
      {blogs.length ? (
        <Container>
          <CardColumns>
            {blogs.map((blog) => {
              return (
                <Card key={blog._id}>
                  <Link href={"/blog/" + blog._id} to="/blog">
                    <Card.Img variant="top" />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.post}</Card.Text>
                       <Link
                      className="deleteBtn"
                      to="/blog"
                      onClick={() => deleteBlog(blog._id)}
                    >
                      <RiDeleteBin6Line className="deleteIcon"/>
                    </Link>
                    <Link
                      className="editBtn"
                      to="/blog"
                      onClick={() => setModalShow(true)}
                    >
                    <FaEdit className="editIcon"/>
                    </Link>
                    <EditPost
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    
                    
                    
                    </Card.Body>
                 
                  </Link>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      ) : (
        <h3>No Blog Posts Added Yet!</h3>
      )}
    </div>
  );
}

export default BlogCard;
