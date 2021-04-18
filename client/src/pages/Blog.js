import React, { useEffect, useState } from "react";
import NewPost from "../components/NewPostCard"
import "./css/blog.css"
import API from "../utils/blog"
import BlogCard from "../components/BlogCard"


function Blogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        loadBlogs();
      }, []);
    
      function loadBlogs() {
        API.getBlogs()
          .then((res) => setBlogs(res.data))
          .catch((err) => console.log(err));
      }

    return (
    <>
    <NewPost/> 
        {/* //Add a button to create a new post and pop up NewPost component.

          
    //get Dashboard posts all blog cards */}
    <BlogCard />
    </>     
    );
  
    }

  export default Blogs;