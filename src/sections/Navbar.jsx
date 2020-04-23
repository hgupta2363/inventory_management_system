import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.css";

class Navbar extends Component {
  handleScroll = () => {
    const nav = document.querySelector("nav");
    const navTop = nav.offsetTop;

    if (window.scrollY > navTop) {
      nav.classList.add("fixed-nav");
      nav.style.backgroundColor = "transparent";
      document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
      nav.classList.remove("fixed-nav");
      document.body.style.paddingTop = 0;
    }
  };

  // window.addEventListener('scroll', handleScroll);

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        {/* <!-- Navbar --> */}
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-dark custom-navbar"
          onWindowScroll="handleScroll()"
        >
          <Link
            className="navbar-brand mx-5 font-weight-bold"
            onClick={this.scrollToTop}
            to=""
          >
            Inventory management system
          </Link>
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
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  activeClass="active"
                  to="overview"
                  spy
                  smooth
                  offset={0}
                  duration={1000}
                >
                  Overview
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="features"
                  spy
                  smooth
                  offset={30}
                  duration={1000}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="process"
                  spy
                  smooth
                  offset={20}
                  duration={1000}
                >
                  Process
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="integration"
                  spy
                  smooth
                  offset={20}
                  duration={1000}
                >
                  Integration
                </Link>
              </li>
              <li className="nav-item mx-3 align-middle">
                <Link to="#" className="btn btn-primary btn-sm navbar-demo-btn">
                  Request a demo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
