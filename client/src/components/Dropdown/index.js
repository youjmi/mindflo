
// import React, {useState, useEffect} from "react";
// import API from "../../utils/dashboard"
// import { Form, InputGroup,FormControl,Button } from "react-bootstrap"

// function Dropdown() {

//     const [isSelected, setIsSelected] = useState(false);
//     const [isName, setIsName] =useState("");
//     const [isDuration, setIsDuration] =useState("");
//     const [isMood, setIsMood] =useState("");


//     // useEffect(() => {
//     //     loadDashboard()
//     //   }, [])
    

//     //   function loadDashboard() {
    
//     //     API.getDashboards()

          
//     //       .catch(err => console.log(err));
//     //   };


//     //   function submitMind(event) {
//     //     event.preventDefault();
        
//     //       API.saveDashboard({
//     //         type: isSelected,
//     //         name: isName,
//     //         duration: isDuration,
//     //         mood: isMood
//     //       })
            
//     //         // .then(() => loadDashboard())
//     //         .catch(err => console.log(err));
           
        
//     //   };
//     //   const submitMind = () => {
//     //     API.saveDashboard({
//     //         selfcare: [{
    
//     //             type: isSelected,
//     //             name: isName,
//     //             duration: isDuration,
//     //             mood: isMood
    
//     //         }]
//     //       })
//     //     //   console.log(req.body)
    
//     //       }
      

//     const submitMind = () => {
//       let  mindObj ={
//         selfcare: [{

//             type: isSelected,
//             name: isName,
//             duration: isDuration,
//             mood: isMood

//         }]
//       }
//       console.log(mindObj)

//       }
//     const submitBody = () => {
//         let bodyObj = {
//             selfcare: [{

//                 type: isSelected,
//                 name: isName,
//                 duration: isDuration,
//                 mood: isMood
    
//             }]
//         }
//         console.log(bodyObj)
//     }

//     // function submitBody(event) {
//     //     event.preventDefault();
        
//     //       API.saveDashboard({
//     //         type: isSelected,
//     //         name: isName,
//     //         duration: isDuration,
//     //         mood: isMood
//     //       })
            
//     //         // .then(() => loadDashboard())
//     //         .catch(err => console.log(err));
           
        
//     //   };
//     const submitPamper = () => {

//         let pamperObj = {
//         selfcare: [{

//             type: isSelected,
//             name: isName,
//             duration: isDuration,
//             mood: isMood

//         }]
//     }
//     console.log(pamperObj)
     
//     API.saveDashboard({pamperObj})

//     }
  
//     // function submitPamper(event) {
//     //     event.preventDefault();
        
//     //       API.saveDashboard({
//     //         type: isSelected,
//     //         name: isName,
//     //         duration: isDuration,
//     //         mood: isMood
//     //       })
            
//     //         // .then(() => loadDashboard())
//     //         .catch(err => console.log(err));
           
        
//     //   };

    

//     return (
//         <div>
//             <div className="container">
//                 <Form.Control
//                     as="select"
//                     custom
//                 // ref={this.myRef}
//                     onChange={e => setIsSelected(e.target.value)}
//                 >
//                     <option disabled selected>Select Mindful Practice</option>
//                     <option value="mind">Mind (Meditation) </option>
//                     <option value="body">Body (Yoga) </option>
//                     <option value="pamper">Pamper (Treat Yo Self) </option>
//                 </Form.Control>
//             </div>
//             { isSelected == "mind" ?   
//             <div className="container  mindBOX">
//                 <InputGroup className="mb-3">
//                     <FormControl
//                         placeholder="Mind Session Name"
//                         aria-label="Session Name"
//                         aria-describedby="basic-addon2"
//                         onChange ={e => setIsName(e.target.value)}
//                         value = {isName}

//                     />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                     <FormControl
//                         placeholder="How many minutes?"
//                         aria-label="minutes"
//                         aria-describedby="basic-addon2"
//                         type="number"
//                         onChange ={e => setIsDuration(e.target.value)}
//                         value = {isDuration}
//                     />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                 <FormControl
//                         placeholder="Rate your Mood from 1-10"
//                         aria-label="affirmations"
//                         aria-describedby="basic-addon2"
//                         type="number"
//                         onChange ={e => setIsMood(e.target.value)}
//                         value = {isMood}
//                     />
//                 </InputGroup>
//                 <button className=""  onClick={submitMind}  > {/*onClick={this.onButtonClick}*/}
//                  Submit
//                  </button>
//             </div>
//             :<> </> }
//             { isSelected == "body" ?  
//             <div className="container hidden bodyBOX">
//                 <InputGroup className="mb-3">
//                     <FormControl
//                         placeholder="Body Session Name"
//                         aria-label="Session Name"
//                         aria-describedby="basic-addon2"
//                         onChange ={e => setIsName(e.target.value)}
//                         value = {isName}
//                     />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                     <FormControl
//                         placeholder="How many minutes?"
//                         aria-label="minutes"
//                         aria-describedby="basic-addon2"
//                         type="number"
//                         onChange ={e => setIsDuration(e.target.value)}
//                         value = {isDuration}
//                     />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                 <FormControl
//                         placeholder="Rate your Mood from 1-10"
//                         aria-label="affirmations"
//                         aria-describedby="basic-addon2"
//                         type="number"
//                         onChange ={e => setIsMood(e.target.value)}
//                         value = {isMood}
//                     />
//                 </InputGroup>

//                 <button className="" onClick={submitBody}> {/*onClick={this.onButtonClick}*/}
//                  Submit
//                  </button>
//             </div>
//             : <> </>}
//             { isSelected == "pamper" ?  
//             <div className="container hidden pamperboxOX">
//                 <InputGroup className="mb-3">
//                     <FormControl
//                         placeholder="Pamper Name Session"
//                         aria-label="Session Name"
//                         aria-describedby="basic-addon2"
//                         onChange ={e => setIsName(e.target.value)}
//                         value = {isName}
//                     />
//                 </InputGroup>
//                 <InputGroup className="mb-3">
//                 <Form.Control
//                     as="select"
//                     custom
//                 // ref={this.myRef}
//                 >
//                     <option disabled selected>Was it worth it?</option>
//                     <option value="yes">Hell yes </option>
//                     <option value="no"> Meh.. </option>
                
//                 </Form.Control>

//                 </InputGroup>
//                 <FormControl
//                         placeholder="Rate your Mood from 1-10"
//                         aria-label="affirmations"
//                         aria-describedby="basic-addon2"
//                         type="number"
//                         onChange ={e => setIsMood(e.target.value)}
//                         value = {isMood}
//                     />
//                 <button className="" onClick={submitPamper}> {/*onClick={this.onButtonClick}*/}
//                  Submit
//                  </button>
//             </div>
//             : <> </> }




//         </div>
//     )
// }
// export default Dropdown;
