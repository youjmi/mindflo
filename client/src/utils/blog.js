import axios from "axios";

export default {
  // Gets all blogs
  getBlogs: function() {
    return axios.get("http://localhost:3000/blog");
  },
  // Gets the blog with the given id
  getBlog: function(id) {
    return axios.get("/blog/" + id);
  },
  // Deletes the book with the given id
  deleteBlog: function(id) {
    return axios.delete("/blog/" + id);
  },
  // Saves a book to the database
  saveBlog: function(blogData) {
    return axios.post("/blog", blogData);
  }
};

