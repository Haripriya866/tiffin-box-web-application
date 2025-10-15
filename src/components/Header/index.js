// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#logo">
          Tiffinbox
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#cuisine">
              Cuisine
            </a>
            <a className="nav-link" href="#discoverPopularDishes">
              Discover Popular Dishes
            </a>
            <a className="nav-link" href="#specialities">
              Specialities
            </a>
            <a className="nav-link" href="#whatOurCustomersSays">
              What Our Customers Says
            </a>
            <a className="nav-link" href="#findUs">
              Find Us
            </a>
            <a className="nav-link" href="#joinCommunity">
              Join Community
            </a>
            <a className="nav-link" href="#footer">
              Footer
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
