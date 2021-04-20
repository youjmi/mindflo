import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class SearchBar extends Component {

    state = {
        search: "",
        results: [],
      };
    
    //   componentDidMount() {
    //     this.searchEmployees("");
    //   }
    
    //   searchYoga = () => {
    //     API.getEmployees()
    //       // .then((res) => res.json())
    //       .then((users) => {
    //         console.log(users.data.results);
    
    //         this.setState({ results: users.data.results });
    //         this.setState({ filteredEmployees: users.data.results });
    //       })
    //       .catch((err) => console.log(err));
    //   };

    // handleInputChange = (event) => {

    //     const value = event.target.value;

        




    // }








  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group className="form-group">
            <label htmlFor="search">Search:</label>
            <input
            //   onChange={props.handleInputChange}
            //   value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Enter Search Term"
              id="search"
            />
            <Button className="searchBtn">Search</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
