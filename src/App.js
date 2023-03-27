import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import Contact from './contact';
import Project from './project';
import About from './about';
import NavBar from './NavBar';
import Blog from './experience';
import Home from './home';
import Skills from './skillstest';
import Footer from './footer'
import Statue from './statue'
import { BrowserRouter as Router } from "react-router-dom";
//import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function StatuePage() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">3D Statue</h1>
      <div style={{ minHeight: '500px' }}> 
        <Statue />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

function App() {
  return (
      <Router>
        <NavBar />
        <Home />
        <About/>
        <StatuePage />
        <Skills/>
        <Blog />
        <Project />
        <Contact />
        <Footer />
      </Router> 
  );
}

export default App;
