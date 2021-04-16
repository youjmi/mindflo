import React, { useEffect, useState } from "react";
// import NewPost from "../components/NewPostCard"
import "./css/blog.css"
import API from "../utils/blog"
import BlogCard from "../components/BlogCard"


function Blogs() {
        // // Setting our component's initial state
        // const [blogs, setBlogs] = useState([])
        // const [formObject, setFormObject] = useState({
        //   title: "",
        //   post: "",
        //   date: "",
        //   user: ""
        // })
  
      
        // // Load all blogs and store them with setBlogs
        // useEffect(() => {
        //   loadBlogs()
        // }, [])
      
        // // Loads all books and sets them to blogs
        // function loadBlogs() {
        //   API.getBlogs()
        //     .then(res => 
        //       setBlogs(res.data)
        //     )
        //     .catch(err => console.log(err));
        // };
      
        // // Deletes a blogs from the database with a given id, then reloads blogs from the db
        // function deleteBlog(id) {
        //   API.deleteBlog(id)
        //     .then(res => loadBlogs())
        //     .catch(err => console.log(err));
        // }
      
        // // Handles updating component state when the user types into the input field
        // function handleInputChange(event) {
        //   const { name, value } = event.target;
        //   setFormObject({...formObject, [name]: value})
        // };
      
        // // When the form is submitted, use the API.saveBook method to save the book data
        // // Then reload books from the database
        // function handleFormSubmit(event) {
        //   event.preventDefault();
        //   if (formObject.title && formObject.user) {
        //     API.saveBlog({
        //       title: formObject.title,
        //       user: formObject.user,
        //       post: formObject.post,
        //       date: formObject.date
        //     })
        //       .then(() => setFormObject({
        //         title: "",
        //         user: "",
        //         post: "",
        //         date: ""
        //       }))
        //       .then(() => loadBlogs())
        //       .catch(err => console.log(err));
        //   }
        // };







    return (

        //     <NewPost/> 
            /*Add another Component that pushes Posted Blogs HERE */

        <BlogCard />
            
    );
  
 
}
  export default Blogs;