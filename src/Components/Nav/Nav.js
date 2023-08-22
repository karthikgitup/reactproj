import React from 'react';
import { Link } from 'react-router-dom';


const Navs = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand ml-5 fw-4" href="#home">
        90's store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto d-flex justify-content-between w-50 ">
          <li className="nav-item">
            <Link  to="/" className="nav-link" href="#home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" href="#about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-link" href="#services">
              Feedback
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"className="nav-link" href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>


 




  );
}

export default Navs;