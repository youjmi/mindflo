import { Router, Route } from "react-router";
import './App.css';

import Hero from './components/Hero';
import Navigation from './components/Navbar';

function App() {
  return (
    <div >
      <Hero />
      <Navigation />  
      {/* <Router>
        <Route path="/" component={Home}/>
        <Route path="/meditation" component={Meditation} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blog" component={Blog} />
        <Route path="/signup" component={Signup} />
      </Router> */}
    </div>
  );
}

export default App;
