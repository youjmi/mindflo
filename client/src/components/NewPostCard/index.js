
import React from 'react';
import "./style.css";
import Container from "../Container"



const Cards = () => {
  return (
    <Container style ={{}}>
    <form className="contact-form contact-holdbox" > 
    <h1 className="pageTitle pt-5"> Post Blog here</h1>
        <div className ="row pt-2 mx-auto">
            <div className ="col-8 form-group mx-auto">
                <input type ="text" className="form-control" placeholder="Subject" name="subject"  />
            </div>
            <div className ="col-8 form-group mx-auto">
                <input type ="text" className="form-control emailConfirm" placeholder="Email" name="email"   />
            </div>
            <div className ="col-8 form-group mx-auto">
                <input type ="text" className="form-control" placeholder="Name" name="name"   />
            </div>
            <div className ="col-8 form-group mx-auto">
                <textarea type ="text" className="form-control" placeholder="Write blog here..." name="message"   />
            </div>
            <div className ="py-1 col-8 form-group mx-auto">
                <input type ="submit" className="btn btn-info" value="Post"/> {/*ADD onClick={handleOnClickDefault*/}
            </div> 
        </div>
    </form>
    </Container>
  );
}

export default Cards