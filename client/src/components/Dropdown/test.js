
import React, {useState, useEffect} from "react";
import API from "../../utils/dashboard"
import { Form, InputGroup,FormControl,Button } from "react-bootstrap"

function Dropdown() {
    //   // Setting our component's initial state
    const [isSelected, setIsSelected] = useState(false);
      const [dashboard, setDashboard] = useState([])
      const [formObject, setFormObject] = useState({
        type: "",
        name: "",
        duration: "",
        mood: ""
        // day: "",
        // user: ""
      })
    
    // load by  ID
      // Load all blogs and store them with setBlogs 
      useEffect(() => {
        loadDashboard()
      }, [])
    
      // Loads all books and sets them to blogs
      function loadDashboard() {
        API.getDashboard()
          .then(res => 
            setDashboard(res.data)
          )
          .catch(err => console.log(err));
      };
    
      // Deletes a blogs from the database with a given id, then reloads blogs from the db
    //   function deleteDashboard(id) {
    //     API.deleteDashboard(id)
    //       .then(res => loadDashboard())
    //       .catch(err => console.log(err));
    //   }
    
      // Handles updating component state when the user types into the input field
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
    
      // When the form is submitted, use the API.saveBook method to save the book data
      // Then reload books from the database
      function handleFormSubmit(event) {
        event.preventDefault();
        
          API.saveDashboard({
            type: formObject.type,
            name: formObject.name,
            duration: formObject.duration,
            mood: formObject.mood,
            // day: formObject.day,
            // user: formObject.user,
          })
            .then(() => setFormObject({
              type: "",
        name: "",
        duration: "",
        mood: "",
        // day: "",
        // user: ""
            }))
            .then(() => loadDashboard())
            .catch(err => console.log(err));
        
      };
    
    

    return (
        <div>
            <div className="container">
                <Form.Control
                    as="select"
                    custom
                // ref={this.myRef}
                onChange={e => setIsSelected(e.target.value)}

                >
                    <option disabled selected>Select Mindful Practice</option>
                    <option value="mind">Mind (Meditation) </option>
                    <option value="body">Body (Yoga) </option>
                    <option value="pamper">Pamper (Treat Yo Self) </option>
                </Form.Control>
            </div>
            { isSelected == "mind" ?   
            <div className="container  mindBOX">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Mind Session Name"
                        aria-label="Session Name"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChange}
                        value = {formObject.name}

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="How many minutes?"
                        aria-label="minutes"
                        aria-describedby="basic-addon2"
                        type="number"
                        onChange={handleInputChange}
                        value = {formObject.duration}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                        placeholder="Rate your Mood from 1-10"
                        aria-label="affirmations"
                        aria-describedby="basic-addon2"
                        type="number"
                        onChange={handleInputChange}
                        value = {formObject.mood}
                    />
                </InputGroup>
                <button className=""  onClick={handleFormSubmit}  > {/*onClick={this.onButtonClick}*/}
                 Submit
                 </button>
            </div>
            :<> </> }
            {isSelected == "body" ?  
            <div className="container hidden bodyBOX">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Body Session Name"
                        aria-label="Session Name"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChange}
                        value = {formObject.name}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="How many minutes?"
                        aria-label="minutes"
                        aria-describedby="basic-addon2"
                        type="number"
                        onChange={handleInputChange}
                        value = {formObject.duration}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                        placeholder="Rate your Mood from 1-10"
                        aria-label="affirmations"
                        aria-describedby="basic-addon2"
                        type="number"
                        onChange={handleInputChange}
                        value = {formObject.mood}
                    />
                </InputGroup>

                <button className="" onClick={handleFormSubmit}> {/*onClick={this.onButtonClick}*/}
                 Submit
                 </button>
            </div>
            : <> </>}
            { isSelected == "pamper" ?  
            <div className="container hidden pamperboxOX">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Pamper Name Session"
                        aria-label="Session Name"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChange}
                        value = {formObject.name}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <Form.Control
                    as="select"
                    custom
                // ref={this.myRef}
                >
                    <option disabled selected>Was it worth it?</option>
                    <option value="yes">Hell yes </option>
                    <option value="no"> Meh.. </option>
                
                </Form.Control>

                </InputGroup>
                <FormControl
                        placeholder="Rate your Mood from 1-10"
                        aria-label="affirmations"
                        aria-describedby="basic-addon2"
                        type="number"
                        onChange={handleInputChange}
                        value = {formObject.mood}
                    />
                <button className="" onClick={handleFormSubmit}> {/*onClick={this.onButtonClick}*/}
                 Submit
                 </button>
            </div>
            : <> </> }




        </div>
    )
}
export default Dropdown;
