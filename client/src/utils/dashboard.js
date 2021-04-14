import axios from "axios";

export default {
  // Gets all blogs
  getDashboards: function() {
    return axios.get("http://localhost:3000/dashboard");
  },
  // Gets the blog with the given id
  getDashboard: function(id) {
    return axios.get("/dashboard/" + id);
  },
  // Deletes the book with the given id
  deleteDashboard: function(id) {
    return axios.delete("/dashboard/" + id);
  },
  // Saves a book to the database
  saveDashboard: function(dashboardData) {
    return axios.post("/dashboard", dashboardData);
  }
};

