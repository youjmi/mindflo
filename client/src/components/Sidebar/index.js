import React from 'react'

import { useLocation } from "react-router-dom"
import { SidebarContainer, SidebarLogo, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute, SidebarItem } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {


    let { pathname } = useLocation()


    console.log(pathname)

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon   >
            <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarItem>
                <SidebarLogo to="/" style ={{marginBottom: 70, marginTop:100, marginLeft:37}}>mindflō</SidebarLogo>
            </SidebarItem>
            { pathname === "/signin" || pathname === "/dashboard" || pathname === "/blog" || pathname === "/meditation" || pathname === "/signup" ? <>  </> :

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarItem>
                            <SidebarLink to="meditation" smooth={true} duration={500} onClick={toggle}>
                                Meditation
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to="dashboard" smooth={true} duration={500} onClick={toggle}>
                                Dashboard
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to="blog" smooth={true} duration={500} offset={-100} onClick={toggle}>
                                Blog
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink to="footer" smooth={true} duration={500} onClick={toggle}>
                                Contact Us
                    </SidebarLink>
                        </SidebarItem>
                        <SidebarBtnWrap>
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    </SidebarBtnWrap>
                    </SidebarMenu>
                    
                </SidebarWrapper>
            }

        </SidebarContainer>
    )
}

export default Sidebar
