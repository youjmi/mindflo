import axios from "axios";

const baseUrl ="http://localhost:3001"

export default {
  // Gets all blogs
  getDashboards: function() {
    return axios.get(`${baseUrl}/dashboard`);
  },
  // Gets the blog with the given id
  getDashboard: function(id) {
    return axios.get(`${baseUrl}/dashboard` + id);
  },
  // Deletes the book with the given id
  deleteDashboard: function(id) {
    return axios.delete(`${baseUrl}/dashboard` + id);
  },
  // Saves a book to the database
  saveDashboard: function(dashboardData) {
    console.log(dashboardData)
    return axios.post(`${baseUrl}/dashboard`, dashboardData);


  }
};

