import { HashRouter, Route, Switch  } from "react-router-dom";
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
import apiBlog from "../src/utils/dashboard"
import Sidebar from "./components/Sidebar/index"
import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from "./components/routing/PrivateRoute"
import PrivateScreen from "./components/privatescreen/PrivateScreen"

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
      <HashRouter>
      {/* <Wrapper> */}
      <Hero />
      <Sidebar isOpen = {isOpen} toggle = {toggle} /> {/*toggle = {toggle}*/}
      <Navigation toggle = {toggle} /> 
      <Switch>
      <PrivateRoute exact path ="/" component = {PrivateScreen} /> 
      {/* <PrivateRoute exact path ="/home" component = {PrivateScreen} /> 
      <PrivateRoute exact path ="/meditation" component = {PrivateScreen} /> 
      <PrivateRoute exact path ="/dashboard" component = {PrivateScreen} /> 
      <PrivateRoute exact path ="/blog" component = {PrivateScreen} />  */}
        <PrivateRoute exact path="/home" component={Home}/> 
        <PrivateRoute exact path="/meditation" component={Meditation} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/blog" component={Blog} />
        <PrivateRoute exact path ="/logout" component ={PrivateScreen}/>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        </Switch>
      {/* </Wrapper> */}
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App
