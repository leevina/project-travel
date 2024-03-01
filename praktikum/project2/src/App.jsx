import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import AboutUs from './home/AboutUs';
import Booking from './home/Booking';
import Review from './home/Review';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky pisah">
        <span className="logo">
          <img src="/img/logo.png" alt="logo" width={'100'} height={'124'} />
        </span>
        <div className="links">
          <NavLink to="/" className="container2 button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/aboutus" className="container5 button rounded">
            About Us
          </NavLink>
          <NavLink to="/projects" className="container3 button rounded">
            Destination
          </NavLink>
          <NavLink to="/booking" className="container4 button rounded">
            Booking
          </NavLink>
          <NavLink to="/review" className="container5 button rounded">
            Review
          </NavLink>
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/review" element={<Review />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
