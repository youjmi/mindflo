import axios from "axios";

const baseURL = "http://localhost:3001";

export default {
  // Gets all blogs
  getBlogs: function () {
    return axios.get(`${baseURL}/blog`);
  },
  // Gets the blog with the given id
  getBlog: function (_id) {
    return axios.get(`${baseURL}/blog/` + _id);
  },
  // Deletes the book with the given id
  deleteBlog: function (_id) {
    return axios.delete(`${baseURL}/blog/` + _id);
  },
  // Saves a book to the database
  saveBlog: function (blogData) {
    console.log(blogData);
    // blogData.append('file', this.state.selectedFile)
    return axios.post(`${baseURL}/blog`, blogData
    
    )
    .then(response => console.log(response));
  },

  updateBlog: function(id,blogData) {
    return axios.put(`${baseURL}/blog/` + id, blogData );
  }
};
