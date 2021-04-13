import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import Signin from "../src/pages/Signin"




function App() {
  return (
    <div>
      <BrowserRouter>
      <Wrapper>
      <Hero />
      <Navigation />  
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/meditation" component={Meditation} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        </Switch>
      <Footer/>
      </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App
