//import { Router, Route } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Hero from './components/Hero';
import Navigation from './components/Navbar';
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div >
      <Wrapper>
      <Hero />
      <Navigation />  
      <Router>
        <Route path="/" component={Home}/>
        {/* <Route path="/meditation" component={Meditation} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blog" component={Blog} />
        <Route path="/signup" component={Signup} /> */}
      </Router>
      </Wrapper>
    </div>
  );
}

export default App;
