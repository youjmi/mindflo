import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Hero from './components/Hero';
import Navigation from './components/Navbar';
import Footer from './components/Footer/footer';
import Wrapper from './components/Wrapper'
import Meditation from "../src/pages/Meditation"
import Dashboard from "../src/pages/Dashboard"
import Blog from "../src/pages/Blog"
import Signup from "../src/pages/Signup"



function App() {
  return (
    <div>
      <Wrapper>
      <Hero />
      <Navigation />  
      <BrowserRouter>
        <Route path="/home" component={Home}/> 
        <Route path="/meditation" component={Meditation} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blog" component={Blog} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
      <Footer/>
      </Wrapper>
    </div>
  );
}

export default App
