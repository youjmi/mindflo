import React, { useState } from "react";
import { Form, InputGroup, FormControl,  } from "react-bootstrap"
import API from "../../utils/dashboard"

const Dropdown = () => {

    const [isSelected, setIsSelected] = useState(false);
    const [isName, setIsName] = useState("");
    const [isDuration, setIsDuration] = useState("");
    const [isMood, setIsMood] = useState("");


    const [formObj, setFormObj] = useState({
        selfcare: [{
            type: isSelected,
            name: isName,
            duration: isDuration,
            mood: isMood
            }]

    })
    


    const submitDashboard = () => {
        API.saveDashboard({
            selfcare: [{
            type: isSelected,
            name: isName,
            duration: isDuration,
            mood: isMood,
            }]
        })
            .then(() => setFormObj({
                selfcare: [{
                    type: isSelected,
                    name: isName,
                    duration: isDuration,
                    mood: isMood
                    }]

            })).then(() => {
                console.log(formObj)
            })
            .catch(err => console.log(err))

    }



    // const submitMind = () => {
    //   let  mindObj ={
    //     selfcare: [{

    //         type: isSelected,
    //         name: isName,
    //         duration: isDuration,
    //         mood: isMood,

    //     }]
    //   }
    //   console.log(mindObj)

    //   }
    // const submitBody = () => {
    //     let bodyObj = {
    //         selfcare: [{

    //             type: isSelected,
    //             name: isName,
    //             duration: isDuration,
    //             mood: isMood

    //         }]
    //     }
    //     console.log(bodyObj)
    // }
    // const submitPamper = () => {

    //     let pamperObj = {
    //     selfcare: [{

    //         type: isSelected,
    //         name: isName,
    //         duration: isDuration,
    //         mood: isMood

    //     }]
    // }
    // console.log(pamperObj)

    // }



    return (
        <div>
            <div className="container">
                <Form.Control
                    as="select"
                    custom
                    onChange={e => setIsSelected(e.target.value)}
                >
                    <option disabled selected>Select Mindful Practice</option>
                    <option value="mind">Mind (Meditation) </option>
                    <option value="body">Body (Yoga) </option>
                    <option value="pamper">Pamper (Treat Yo Self) </option>
                </Form.Control>
            </div>
            { isSelected == "mind" ?
                <div className="container mt-3 mindBOX">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Mind Session Name"
                            aria-label="Session Name"
                            aria-describedby="basic-addon2"
                            onChange={e => setIsName(e.target.value)}
                            value={isName}

                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="How many minutes?"
                            aria-label="minutes"
                            aria-describedby="basic-addon2"
                            type="number"
                            onChange={e => setIsDuration(e.target.value)}
                            value={isDuration}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Rate your Mood from 1-10"
                            aria-label="affirmations"
                            aria-describedby="basic-addon2"
                            type="number"
                            onChange={e => setIsMood(e.target.value)}
                            value={isMood}
                        />
                    </InputGroup>
                    <button className="" onClick={submitDashboard}  > {/*onClick={this.onButtonClick}*/}
                 Submit
                 </button>
                </div>
                : <> </>}
            { isSelected == "body" ?
                <div className="container mt-3 mindBOX">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Body Session Name"
                            aria-label="Session Name"
                            aria-describedby="basic-addon2"
                            onChange={e => setIsName(e.target.value)}
                            value={isName}

                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="How many minutes?"
                            aria-label="minutes"
                            aria-describedby="basic-addon2"
                            type="number"
                            onChange={e => setIsDuration(e.target.value)}
                            value={isDuration}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Rate your Mood from 1-10"
                            aria-label="affirmations"
                            aria-describedby="basic-addon2"
                            type="number"
                            onChange={e => setIsMood(e.target.value)}
                            value={isMood}
                        />
                    </InputGroup>
                    <button className="" onClick={submitDashboard}  > {/*onClick={this.onButtonClick}*/}
                   Submit
                   </button>
                </div>
                : <> </>}
            { isSelected == "pamper" ?
                <div className="container mt-3 pamperBOX">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Pamper Session Name"
                            aria-label="Session Name"
                            aria-describedby="basic-addon2"
                            onChange={e => setIsName(e.target.value)}
                            value={isName}

                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="How many minutes?"
                            aria-label="minutes"
                            aria-describedby="basic-addon2"
                            type="number"
                            onChange={e => setIsDuration(e.target.value)}
                            value={isDuration}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Rate your Mood from 1-10"
                            aria-label="affirmations"
                            aria-describedby="basic-addon2"
                            type="number"
                            onChange={e => setIsMood(e.target.value)}
                            value={isMood}
                        />
                    </InputGroup>
                    <button className="" onClick={submitDashboard}  > {/*onClick={this.onButtonClick}*/}
                      Submit
                      </button>
                </div>
                : <> </>}
        </div>
    )
}
export default Dropdown;