import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import Projects from './components/Projects';
import Home from './components/Home';

  import AboutMe from './components/AboutMe';
  import Skills from './components/Skills';
  // import Contact from './components/Contact';
  // import Footer from './components/Fo';

  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function App() {
  return (
   
    <>
    <Router>
      {/* <Header title="textUtils" aboutText="About Us" toggleMode={toggleMode} mode={mode} /> */}
      <Header/>
      {/* <AboutMe/> */}
      <div className="container my-3">
        <Routes>
        
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/about" element={<AboutMe />} />

          {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} />} /> */}
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
