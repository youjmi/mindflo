import React, { useEffect, useState } from "react";
import NewPost from "../components/NewPostCard";
import { Button, Container, Modal } from "react-bootstrap";
import "./css/blog.css";
import API from "../utils/blog";
import BlogCard from "../components/BlogCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate} from "react-icons/md";


function Blogs() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     loadBlogs();
//   }, []);

//   function loadBlogs() {
//     API.getBlogs()
//       .then((res) => setBlogs(res.data))
//       .catch((err) => console.log(err));
//   }

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className ="blogBody">
      <Container>
      <h1 className="blogTitle mb-5">Mindflo Personal Journal</h1>
      <h2 className="blogDescription">It's time to write your own journey and inspire yourself along the way!</h2>
      <Button className="newPostBtn mb-5"  onClick={() => setModalShow(true)}>
      <MdCreate /> New Entry
       </Button>
       </Container>
      <NewPost show={modalShow} onHide={() => setModalShow(false)} />
      <BlogCard />
    </div>
  );
}

export default Blogs;
