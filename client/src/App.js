import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import './App.css';
import Home from "./pages/Home"
import Hero from './components/Hero';
import Navigation from './components/Navbar2/index';
import Footer from './components/Footer/footer';
import Wrapper from './components/Wrapper'
import Meditation from "../src/pages/Meditation"
import Dashboard from "../src/pages/Dashboard"
import Blog from "../src/pages/Blog"
import Signup from "../src/pages/Signup"
import Login from "../src/pages/Login"
import apiBlog from "../src/utils/blog"
import Sidebar from "./components/Sidebar/index"
import 'bootstrap/dist/css/bootstrap.min.css';

// import apiBlog from "../src/utils/blog"

function App (){

  // useEffect(async ()=>{
  //   console.log("hi")
  //   apiBlog.getBlogs()
  // }, [])

//tessstt

const [isOpen, setIsOpen] = useState(false)
const toggle = () =>{setIsOpen (!isOpen)} 



  return (
    <div>
      <BrowserRouter>
      {/* <Wrapper> */}
      <Hero />
      <Sidebar isOpen = {isOpen} toggle = {toggle} /> {/*toggle = {toggle}*/}
      <Navigation toggle = {toggle} />   
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/meditation" component={Meditation} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        </Switch>
      {/* </Wrapper> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
