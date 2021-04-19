import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars} from 'react-icons/fa'
import styled from 'styled-components';



export const Navdiv = styled.nav`

background: #2b3942;
 height: 50px;
// margin-top : -80px;
display: flex;
justify-content: center;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
position: -webkit-sticky !important;
position: sticky !important;
`;

export const NavbarContainer = styled.div`

display: flex;
justify-content: space-between;
z-index: 1;
width : 100%;
padding : 0 24px;
max-width: 1100px;
color: #2b3942;


`;

export const NavLogo = styled(LinkR)`

color : #fff;
justify-self : flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight:bold;
text-decoration: none;
font-family: 'Alegreya', serif;
&:hover {
  transition: all 0.2s ease-in-out;
  color: #b6d5db;
  border-radius : 50px;
  font-size: 1.6rem;
  text-decoration:none



}


`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  cursor: pointer;

  
  @media screen and (max-width: 768px) {
    display: block;
    position: sticky;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
    margin-top:-16px

  }
`;


// export const MobileIcon = styled.div`
// display: none;
// @media screen and (max-width: 768px){
//   display: block;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translate (-100%,60%);
//   font-size: 1.8rem;
//   cursor: pointer;
//   color : #fff
// }
// `

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style : none;
text-align: center;
margin-right: -22px;
margin-top: 0;
margin-bottom:0;
cursor: pointer;
@media screen and (max-width: 768px){
  display: none;
}

`

export const NavItem = styled.li
  `
height: 20px;
`

export const NavLinks = styled(LinkS)`

color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none ;
    padding :0 1rem;
    height: 100%
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    $:active {
      border-bottom: 3px solid #01bf71
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #b6d5db;
      border-radius : 50px;
      font-size: 18px;
      text-decoration:none

    
    
    }

`

export const NavBtn = styled.nav`
display: flex;
align-items: center ;

@media screen and (max-width : 768px){
  display: none ;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius : 50px;
background: #fff;
white-space: no wrap;
padding: 10px 22px;
color: #010606;
font-size : 16px;
outline : none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: "Montserrat", sans-serif;
&:hover {
  transition: all 0.2s ease-in-out;
  background-color: #b6d5db;
  border-radius : 50px;
  text-decoration:none;
  font-size: 18px;
  


}


`