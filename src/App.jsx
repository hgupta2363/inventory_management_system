import React, { Component } from 'react'
import './css/main.css'
import Overview from './sections/Overview'
import Features from './sections/Features'
import Consolidation from './sections/Consolidation'
import Process from './sections/Process'
import RequestDemo from './sections/RequestDemo'
import Integration from './sections/Integration'
import Compare from './sections/Compare'
// import Contact from './sections/Contact'
import Feedback from './sections/Feedback'
import Footer from './sections/Footer'
// import Navbar from './sections/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, animateScroll as scroll } from "react-scroll"

class App extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>

        {/* <!-- Navbar --> */}
        <nav className='navbar navbar-expand-lg sticky-top navbar-dark custom-navbar'>
          <Link className='navbar-brand mx-5 font-weight-bold text-uppercase' onClick={this.scrollToTop} to="">Inventory management system</Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='overview' spy smooth offset={0} duration={1000}>Overview</Link>
              </li>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='features' spy smooth offset={30} duration={1000}>Features</Link>
              </li>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='process' spy smooth offset={20} duration={1000}>Process</Link>
              </li>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='integration' spy smooth offset={20} duration={1000}>Integration</Link>
              </li>
              <li className='nav-item mx-3 align-middle'>
                <Link to='#' className='btn btn-primary btn-sm navbar-demo-btn'>Request a demo</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Navbar className='fixed-top' /> */}
        <Overview id='overview' />
        <Features id='features' />
        <Consolidation />
        <Process id='process' />
        <RequestDemo />
        <Integration id='integration' />
        <Compare />
        {/* <Contact id='contact' /> */}
        <Feedback />
        <Footer />

      </div >
    )
  }
}

export default App
