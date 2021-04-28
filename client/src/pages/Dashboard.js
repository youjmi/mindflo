import React, { useEffect, useState }  from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Charts from "../components/Charts";
import Dropdown from "../components/Dropdown/index"
import "./css/dashboard.css";
// import API from "../utils/dashboard"
import Yoga from "../components/Yoga"


// function Dashboard() {
//   // Setting our component's initial state
  //  const [dashboard, setDashboard] = useState([])
  // const [formObject, setFormObject] = useState({
  //   type: "",
  //   name: "",
  //   duration: "",
  //   mood: "",
  //   // day: "",
  //   // user: ""
  // })

// // load by  ID
//   // Load all blogs and store them with setBlogs 
//   useEffect(() => {
//     loadDashboard()
//   }, [])

//   // Loads all books and sets them to blogs
//   function loadDashboard() {
//     API.getDashboard() 
//       .then(res => 
//         setDashboard(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a blogs from the database with a given id, then reloads blogs from the db
//   function deleteDashboard(id) {
//     API.deleteDashboard(id)
//       .then(res => loadDashboard())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.user) {
//       API.saveDashboard({
//         title: formObject.title,
//         user: formObject.user,
//         post: formObject.post,
//         date: formObject.date
//       })
//         .then(() => setFormObject({
//           type: "",
//     name: "",
//     duration: "",
//     mood: "",
//     day: "",
//     user: ""
//         }))
//         .then(() => loadDashboard())
//         .catch(err => console.log(err));
//     }
//   };




function Dashboard() {
  return (
    <div>
      <h1 className ="dashboardTitle">DASHBOARD SECTION:</h1>
      <h1 className ="dashboardTitle"> Track Your Progress</h1>
       <Charts/> 
    <Dropdown/> 
 
    </div>
  );
}
export default Dashboard 
