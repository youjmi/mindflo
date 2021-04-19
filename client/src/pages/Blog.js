import React, { useEffect, useState } from "react";
import NewPost from "../components/NewPostCard";
import { Button, Modal } from "react-bootstrap";
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
      <h1 className="blogTitle">Mindflo Community Blog</h1>
      <Button className="newPostBtn"  onClick={() => setModalShow(true)}>
      <MdCreate/> New Post 
       </Button>
      <NewPost show={modalShow} onHide={() => setModalShow(false)} />
      {/* //Add a button to create a new post and pop up NewPost component.

          
    //get Dashboard posts all blog cards */}
      <BlogCard />
    </>
  );
}

export default Blogs;
