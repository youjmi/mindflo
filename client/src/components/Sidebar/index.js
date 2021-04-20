import React from 'react'

import { useLocation,useHistory } from "react-router-dom"
import { SidebarContainer, SidebarLogo, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute, SidebarItem } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {

    // const [hideMenu, setHideMenu] = useState(false)
    // const onClick = () => setHideMenu(true)


    let { pathname } = useLocation()


    console.log(pathname)

    const history = useHistory()
const logoutHandler = ()=> {
  localStorage.removeItem("authToken");
  history.push("/login")
};
    

    return (
        <SidebarContainer isOpen ={isOpen} > 
            <Icon  onClick = {toggle}  >
            <CloseIcon /> 
            </Icon>
            <SidebarItem>
                <SidebarLogo to="/" style ={{marginBottom: 70, marginTop:100, marginLeft:37}} ><span onClick={toggle}> mindflō </span></SidebarLogo>
            </SidebarItem>
            
            { pathname === "/login" || pathname === "/dashboard" || pathname === "/blog" || pathname === "/meditation" || pathname === "/signup" ? <>  </> :
                <SidebarWrapper style = {{display: isOpen ? "block" : "none"}}>
                    <SidebarMenu>
                        <SidebarItem>
                            <SidebarLink to="meditation" smooth={true} duration={500} >
                                <span onClick={toggle}>Meditation</span>
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to="dashboard" smooth={true} duration={500} >
                               <span onClick={toggle}> Dashboard</span>
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to="blog" smooth={true} duration={500} >
                              <span onClick={toggle}>  Blog</span>
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to="footer" smooth={true} duration={500} >
                             <span onClick={toggle}>  Contact Us </span> 
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarBtnWrap>
                        <SidebarRoute  to="/login" onClick={logoutHandler}> <span onClick={toggle}> Log Out</span></SidebarRoute>
                    </SidebarBtnWrap>
                    </SidebarMenu>
                </SidebarWrapper>
            }
            {/* {hideMenu ? <SidebarWrapper/> : null } */}
            {/* { pathname === "/login" || pathname === "/dashboard" || pathname === "/blog" || pathname === "/meditation" || pathname === "/signup" ? ( <SidebarWrapper style ={{color : "black"}} />) : null } */}


        </SidebarContainer>
    )
}

export default Sidebar
