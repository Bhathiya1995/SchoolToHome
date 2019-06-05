import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
          <a href="#*" className="navbar-brand container navbar-logo ml-5">
            SchoolToHome
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item px-2">
                <a href="#*" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="#*" className="nav-link">
                  AboutUs
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="#*" className="nav-link">
                  Register
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="#*" className="nav-link">
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
