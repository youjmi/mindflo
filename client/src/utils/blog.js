import axios from "axios";

const baseURL = "http://localhost:3001";

export default {
  // Gets all blogs
  getBlogs: function () {
    return axios.get(`${baseURL}/blog`);
  },
  // Gets the blog with the given id
  getBlog: function (id) {
    return axios.get(`${baseURL}/blog/` + id);
  },
  // Deletes the book with the given id
  deleteBlog: function (id) {
    return axios.delete(`${baseURL}/blog/` + id);
  },
  // Saves a book to the database
  saveBlog: function (blogData) {
    console.log(blogData);
   
    return axios.post(`${baseURL}/blog`, blogData
    // , {
    //   headers: {
       
    //     // 'content-type': 'application/json',
    //     "content-type": "multipart/form-object"
    //   }
    // }
    );
  },

  updateBlog: function(id) {
    return axios.put(`${baseURL}/blog/` + id);
  }
};
