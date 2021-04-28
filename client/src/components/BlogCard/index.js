import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  CardColumns,
  Form,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
// import Container from "../Container";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/blog";
import "bootstrap/dist/css/bootstrap.min.css";
import beach from "./beachwave1.png";
import EditPost from "../EditPost";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import moment from "moment";

function BlogCard(props) {
  const [blogs, setBlogs] = useState([]);
  const [likes, setLike] = useState(false);
 
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
      .then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }

  function deleteBlog(id) {
    API.deleteBlog(id)
      .then((res) => loadBlogs())
      .catch((err) => console.log(err));
  }

  const handleLike = (e, id) => {
    e.preventDefault();

    if (likes == false) {
      setLike(true);
      console.log("clicked");

      API.updateBlog(id)
        .then((res) => {loadBlogs()
        console.log(res)
        })
        .catch((err) => console.log(err))
      
    }
  };
  function updateBlog(id) {
    API.updateBlog(id)
      .then((res) => loadBlogs())
      .catch((err) => console.log(err));
  }

  function getOneBlog(id) {
    API.getBlogs(id)
    .then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  }

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
                    <Card.Img variant="top" src={blog.photo} />
                    <Row>
                      <Col>
                        <Button className="likeBtn" onClick={handleLike}>
                          <FcLike className="likeIcon" />
                        </Button>
                      </Col>
                      <Col>
                        <Link
                          className="deleteBtn"
                          to="/blog"
                          onClick={() => deleteBlog(blog._id)}
                        >
                          <RiDeleteBin6Line className="deleteIcon" />
                        </Link>
                        <Link
                          className="editBtn"
                          to="/blog"
                          onClick={() => {
                            setModalShow(true);
                            getOneBlog(blog._id);
                          }}
                        >
                          <FaEdit className="editIcon" />
                        </Link>
                        <EditPost
                          show={modalShow}
                          title={blog.title}
                          photo={blog.photo}
                          post={blog.post}
                          obj={blog._id}
                          onHide={() => setModalShow(false)}
                          
                        />
                      </Col>
                    </Row>
                    <Card.Body>
                      <Card.Text>{moment(blog.day).format("l")}</Card.Text>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.post}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      ) : (
        <h3>No Journal Entries Yet!</h3>
      )}
    </div>
  );
}

export default BlogCard;
