import React, { useState } from 'react';
// import { NavItem } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css'


import { useLocation, useHistory } from "react-router-dom"
import {
  Navdiv,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Bars
} from './NavbarElements';

const Navigation = ({ toggle }) => {


  let { pathname } = useLocation()


  console.log(pathname)

  const history = useHistory()
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login")
  };



  return (
    <>
      <Navdiv >
        <NavbarContainer >
          <NavLogo to="/" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })} >mindflō</NavLogo>
          <Bars onClick={toggle} />


          {pathname === "/login" || pathname === "/dashboard" || pathname === "/blog" || pathname === "/meditation" || pathname === "/signup" ? <>  </> :
            <>
            <NavMenu>  
              <NavItem>
                <NavLinks to="about"  smooth={true} duration={500}  offset ={-100}>About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="meditation" smooth={true} duration={500} offset ={-100} >Inspō</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="blog" smooth={true} duration={500} offset ={-100}>Journal</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="dashboard" smooth={true} duration={500} offset ={-100}>Dashboard</NavLinks>
              </NavItem>
              {/* <NavItem>
              <NavLinks to ="signup"smooth ={true} duration ={500}>Sign Up</NavLinks>
            </NavItem> */}
              <NavItem >
                <NavLinks to="footer" smooth={true} duration={500} offset ={100}>Contact Us</NavLinks>
              </NavItem>
            </NavMenu>
                   <NavBtn >
                   <NavBtnLink onClick={logoutHandler}>Log Out</NavBtnLink>
                 </NavBtn>
                 </>
          }
          {pathname !== "/login" ? <> </> : 
          <NavBtn>
            <NavBtnLink to="/login" >Log In</NavBtnLink>
          </NavBtn>
          }
          {pathname === "/login" || pathname ==="/" ? <> </> :
          
          <NavBtn>
          <NavBtnLink onClick={logoutHandler}>Log Out</NavBtnLink>
        </NavBtn>}
          {/* 
          <NavBtn>
            <NavBtnLink to ="/logout" >Log out</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Navdiv>
    </>
  );
};

export default Navigation;