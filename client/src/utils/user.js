import axios from "axios";

const baseURL = "http://localhost:3001"

export default {
  // Gets all users
  getUsers: function() {
    return axios.get(`${baseURL}/user`);
  },
  // Gets the blog with the given id
  getUser: function(id) {
    return axios.get(`${baseURL}/user` + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete(`${baseURL}/user` + id);
  },
  // Saves a book to the database
  saveUser: function(UserData) {
    return axios.post(`${baseURL}/user`, UserData);
  }
};

