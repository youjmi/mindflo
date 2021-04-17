import React, { useEffect, useState }  from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Charts from "../components/Charts";
import Dropdown from "../components/Dropdown/index"
import "./css/dashboard.css";
import API from "../utils/dashboard"


// function Dashboard() {
//   // Setting our component's initial state
//   const [dashboard, setDashboard] = useState([])
//   const [formObject, setFormObject] = useState({
//     type: "",
//     name: "",
//     duration: "",
//     mood: "",
//     day: "",
//     user: ""
//   })

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
      <h1>DASHBOARD SECTION</h1>
       <Charts/> 
    <Dropdown/> 
      <br></br>      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <h1>Yoga Workouts</h1>
        <SearchBar 
        // search={this.state.search}
        //     handleInputChange={this.handleInputChange}
            />
        <h6>
          Lorem ipsum dolor sit amet, veniam salutatus ad vel, ei vix iudicabit
          dissentiet, fugit percipit nec ad. Minim affert eloquentiam te quo.
          Causae scribentur in nec. Pri eros senserit ut, dolor rationibus
          adipiscing ex ius, ne est viris nusquam theophrastus. Vim cu quod
          vocent consectetuer, ad qui invidunt forensibus. Cu eum falli aliquip,
          ut aeque constituto incorrupte ius, per in mentitum laboramus
          neglegentur. Cu omnis persecuti mea. Possim euripidis mel te. Soleat
          feugait intellegat vis ut, sumo dicunt cotidieque mea id, ut cibo
          soleat eos. Dolore accusata at vis, ei eum tation putant. Eam an solum
          maluisset persequeris, labore feugiat feugait ad his. Facete percipit
          eos ut, cu cetero elaboraret philosophia quo. Pro laudem patrioque ei.
        </h6>
      </Container>
    </div>
  );
}
export default Dashboard 
