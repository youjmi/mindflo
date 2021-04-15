import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {FaTimes} from "react-icons/fa"



export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height:100%;
background :#0d0d0d;
// display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')}

`

export const CloseIcon = styled(FaTimes)`
color : #fff
`

export const Icon = styled.div `
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarLogo = styled(LinkR)`

display: flex;
align-items: center;
justify-content: center;
font-size: 37px;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration :none;
color: #fff;
cursor: pointer;
font-family: 'Alegreya', serif;



&:hover {
  transition: all 0.2s ease-in-out;
  color: #b6d5db;
  border-radius : 50px;
  font-size: 39px;
}


`;


export const SidebarWrapper = styled.div `
color: #fff;
`

export const SidebarMenu = styled.ul`
// margin-top: 60px;
display:grid;
grid-template-column: 1fr;
grid-template-rows: repeat(5, 80px);
text-align:center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px)
}
`



// put hover feature only for span

export const SidebarLink = styled(LinkS)`
display: flex;
align-item: center;
justify-content: center;
font-size: 20px;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration :none;
color: #fff;
cursor: pointer;
font-family: "Montserrat", sans-serif;

// &:hover {
//     transition: all 0.2s ease-in-out;
//     color: #b6d5db;
//     border-radius : 50px;
//     font-size: 22px;
//     font-family: "Montserrat", sans-serif;

//   }

`
export const SidebarItem = styled.div`

`

export const SidebarBtnWrap = styled.div `
display: flex;
justify-content: center;

`

export const SidebarRoute = styled(LinkR) `
border-radius : 50px;
background: #fff;
white-space: nowrap;
padding: 30px 64px;
color: black;
font-size: 18px;
outline : none;
border: none; 
cursor: pointer ;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: "Montserrat", sans-serif;
&:hover {
    transition: all 0.2s ease-in-out;
    color: #b6d5db;
    border-radius : 50px;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;

  }

`

