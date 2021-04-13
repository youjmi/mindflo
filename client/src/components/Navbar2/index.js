import React from 'react';
// import { NavItem } from 'react-bootstrap';
import { FaBars} from 'react-icons/fa'
import {useLocation} from "react-router-dom"
import {
  Navdiv,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navigation = () => {

let {pathname} = useLocation() ;


console.log(pathname)


  return (
    <>
      <Navdiv >
        <NavbarContainer sticky = "top">
          <NavLogo to = "/">mindflō</NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          { pathname === "/signin" || pathname === "/dashboard"  ?   <>  </> : 
          <NavMenu>
            <NavItem> 
              <NavLinks to ="meditation">Meditation</NavLinks>  
              </NavItem>
              <NavItem>
              <NavLinks to ="dashboard">Dashboard</NavLinks>
            </NavItem>
              <NavItem>
              <NavLinks to ="blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="signup">Sign Up</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to ="contact">Contact Us</NavLinks>
            </NavItem>
            
          </NavMenu>
          } 
          

          <NavBtn>
            <NavBtnLink to ="/signin" >Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Navdiv>
    </>
  );
};

export default Navigation;