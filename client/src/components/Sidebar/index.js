import React  from 'react'

import { useLocation } from "react-router-dom"
import { SidebarContainer, SidebarLogo, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute, SidebarItem } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {

    // const [hideMenu, setHideMenu] = useState(false)
    // const onClick = () => setHideMenu(true)


    let { pathname } = useLocation()


    console.log(pathname)

    return (
        <SidebarContainer isOpen ={isOpen} > 
            <Icon  onClick = {toggle}  >
            <CloseIcon /> 
            </Icon>
            <SidebarItem>
                <SidebarLogo to="/" style ={{marginBottom: 70, marginTop:100, marginLeft:37}} ><span onClick={toggle}> mindflō </span></SidebarLogo>
            </SidebarItem>
            
            {/* {hideMenu ? <SidebarWrapper/> :null } */}
            { pathname === "/login" || pathname === "/dashboard" || pathname === "/blog" || pathname === "/meditation" || pathname === "/signup" ? <>  </> :
                <SidebarWrapper>
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
                        <SidebarRoute to="/login"> <span onClick={toggle}> Log In</span></SidebarRoute>
                    </SidebarBtnWrap>
                    </SidebarMenu>
                </SidebarWrapper>
            }

        </SidebarContainer>
    )
}

export default Sidebar
