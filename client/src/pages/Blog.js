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
    <>
      <Container>
      <h1 className="blogTitle">Mindflo Community Blog</h1>
      <Button className="newPostBtn"  onClick={() => setModalShow(true)}>
      <MdCreate/> New Post 
       </Button>
       </Container>
      <NewPost show={modalShow} onHide={() => setModalShow(false)} />
      <BlogCard />
    </>
  );
}

export default Blogs;
