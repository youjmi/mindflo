import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link, animateScroll as scroll } from "react-scroll";
//import Scroll from "react-scroll";

class Navigation extends React.Component {


  constructor (props){
    super(props);
  }



   render() {
    return (
      <Navbar expand="lg" sticky="top" >
        <Navbar.Brand className="brand" to="/">
          mindflo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="smooth-scroll">
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="meditation"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Meditation
            </Link>
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="dashboard"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Dashboard
            </Link>
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Blog
            </Link>
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="login"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;