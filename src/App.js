
import './App.css';
import React from 'react';
import Navs from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Service from './Pages/Services/Service';

const App = () => {
  return (
   
      <Router>
        <Navs />
        <Routes>
          <Route  path="/" element={<Home />}/>
           <Route  path="/about" element={<About />}/>
          <Route  path="/contact" element={<Contact />}/>
          <Route  path="/service" element={<Service />}/>

        </Routes>
        
        </Router>
    
  )
}

export default App;