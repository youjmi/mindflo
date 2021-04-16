import React, {useState} from 'react';
// import { NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import {useLocation} from "react-router-dom"
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

const Navigation = ({toggle}) => {


let {pathname} = useLocation() 


console.log(pathname)


  return (
    <>
      <Navdiv >
        <NavbarContainer >
          <NavLogo to = "/">mindflō</NavLogo>
          <Bars onClick = {toggle} />
          { pathname === "/login" || pathname === "/dashboard" || pathname === "/blog" || pathname === "/meditation"|| pathname === "/signup" ?   <>  </> : 
          <NavMenu>
            <NavItem> 
              <NavLinks to ="meditation" smooth ={true} duration ={500} >Meditation</NavLinks>  
              </NavItem>
              <NavItem>
              <NavLinks to ="dashboard" smooth ={true} duration ={500}>Dashboard</NavLinks>
            </NavItem>
              <NavItem>
              <NavLinks to ="blog"smooth ={true} duration ={500}>Blog</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to ="signup"smooth ={true} duration ={500}>Sign Up</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to ="footer"smooth ={true} duration ={500}>Contact Us</NavLinks>
            </NavItem>
            
          </NavMenu>
          } 
          

          <NavBtn>
            <NavBtnLink to ="/login" >Log In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Navdiv>
    </>
  );
};

export default Navigation;