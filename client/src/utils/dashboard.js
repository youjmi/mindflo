import axios from "axios";

const baseURL = "http://localhost:3001"

export default {
  // Gets all blogs
  getDashboards: function() {
    console.log()
    return axios.get(`${baseURL}/dashboard`, );
  },
  // Gets the blog with the given id
  getDashboard: function(id) {
    return axios.get(`${baseURL}/dashboard/` + id);
  },
  // Deletes the book with the given id
  deleteDashboard: function(id) {
    return axios.delete(`${baseURL}/dashboard/` + id);
  },
  // Saves a book to the database
  saveDashboard: function(dashboardData) {
    console.log(dashboardData)
    return axios.post(`${baseURL}/dashboard`, dashboardData);

  }
};

