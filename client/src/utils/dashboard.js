import axios from "axios";

// const baseURL = "http://localhost:3001"

export default {
  // Gets all blogs
  getDashboards: function() {
    console.log()
    return axios.get("/dashboard", );
  },
  // Gets the blog with the given id
  getDashboard: function(id) {
    return axios.get("/dashboard" + id);
  },
  // Deletes the book with the given id
  deleteDashboard: function(id) {
    return axios.delete("/dashboard" + id);
  },
  // Saves a book to the database
  saveDashboard: function(dashboardData) {
    console.log(dashboardData)
    return axios.post("/dashboard", dashboardData);

  }
};

