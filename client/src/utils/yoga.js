import axios from "axios";



/// NEED to FIND API FOR YOGA ///
export default {
  // Gets all quotes
  getQuotes: function() {
    return axios.get(//quotes API)// 
    )},
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

