import React from 'react';
import { Link } from "react-router-dom";
// import Container from "../Container"
import { Container } from "react-bootstrap"
import Row from "../Row"
import Col from "../Col"
import "./style.css"
import Contact from "../ContactForm"
import { SocialIcon } from "react-social-icons"



const Footer = () => {




    return (
        <>

            <div className="main-footer footer" >
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col footEmail mt-3">
                            <h1 className=" footTitle footCol mb-5">Contact Us Here</h1>
                            <Contact />
                            <br></br>
                        </div>
                        {/* Column2 */}
                        <div className="col footCol mt-3">
                            <h1 className=" footTitle" > creators </h1>
                            <br></br>
                            <ui className="list-unstyled">
                                <br></br>

                                <li>Jeezy</li>
                                <div className="divider">
                                    <SocialIcon target="_blank" className="iconSpace footicon" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/young-ji-kim-a764b384/" />
                                    <SocialIcon className="iconSpace footicon1" target="_blank" bgColor="white" style={{ height: 35, width: 35 }} url="https://github.com/youjmi" />
                                    <SocialIcon className="footicon" target="_blank" style={{ height: 35, width: 35 }} url="https://youjmi.github.io/react_portfolio/" network="sharethis" label="Jeezy portfolio" />
                                </div>

                                <li>Rachel</li>
                                <div className="divider">
                                    <SocialIcon target="_blank" className="iconSpace footicon" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/rachel-wanke-038757b/" />
                                    <SocialIcon className="iconSpace footicon1" target="_blank" bgColor="white" style={{ height: 35, width: 35 }} url="https://github.com/rwanke14" />
                                    <SocialIcon className="footicon" target="_blank" style={{ height: 35, width: 35 }} url="https://rwanke14.github.io/reactportfolio/" network="sharethis" label="Rachel portfolio" />
                                </div>

                                <li>Frankie</li>
                                <div className="divider">
                                    <SocialIcon target="_blank" className="iconSpace footicon" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/franciscorosado1/" />
                                    <SocialIcon className="iconSpace footicon1" target="_blank" bgColor="white" style={{ height: 35, width: 35 }} url="https://github.com/Franciscorosado09/" />
                                    <SocialIcon className="footicon" target="_blank" style={{ height: 35, width: 35 }} url="https://franciscorosado09.github.io/FERPortfolio/" network="sharethis" label="Frankie portfolio" />
                                </div>
                            </ui>
                        </div>
                        {/* Column3 */}
                        <div className="col footCol mt-3">
                            <h1 className=" footTitle">infōmation</h1>
                            <br></br>
                            <ui className="list-unstyled">
                                <br></br>
                                <li><a className="footLinks" href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/9-benefits-of-yoga" target="_blank">Mind</a>
                                </li>
                                <br></br>
                                <br></br>
                                <li> <a className="footLinks" href="https://www.healthline.com/nutrition/12-benefits-of-meditation" target="_blank">Body</a>
                                </li>                            
                                <br></br>
                                <br></br>
                                <li>     <a className="footLinks" href="https://livehealthonline.com/blog/categories/health-management/health-benefits-taking-time-yourself/#:~:text=Spending%20time%20alone%20can%20also%20heighten%20your%20emotional%20intelligence.&text=You%20have%20more%20time%20to,feel%20the%20way%20you%20do." target="_blank">Pamper</a>
                                </li>                            
                                <br></br>
                                <br></br>

                            </ui>
                        </div>
                    </div>
                    <hr className="footDivider" />
                    <div className="row footCol">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} mindflō | All rights reserved |
              Terms Of Service | Privacy
            </p>
                    </div>
                </div>
            </div>

        </>







    )

}

export default Footer