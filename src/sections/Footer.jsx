import React, { Component } from 'react'
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-scroll'
import { BrowserRouter as Router, Link as Anchor } from 'react-router-dom'

class Footer extends Component {

  state = {
    r: true
  }
  handleRedirect = () => {
    this.r = true
    console.log('button cliked !')
  }

  render() {
    return (
      /* <!--FOOTER  --> */
      <Router>
        <footer className='custom-footer col-sm-12' >
          <div className='container px-0 py-4'>
            <div className='d-flex flex- row'>
              <div className='col-md-3 col-lg-3 col-sm-12 px-2 mx-auto'>
                <Anchor className='p-0' to='' style={{ marginBottom: '-35px' }}>
                  <img id='image' src={require('../images/logo.jpg')} alt='logo' style={{ padding: '0px', height: '8rem', weight: '8rem' }} />
                </Anchor>
                    <br></br>
                    <br></br>
                    <br></br>
                <p>A simple way to work in inventory and manage it with speed and analytics.</p>

                <p className='footer-links'>
                  <Link id='footer-overview' activeClass='active' to='overview' spy smooth offset={0} duration={1000}>Overview</Link>
                  <Link activeClass='active' to='features' spy smooth offset={30} duration={1000}>Features</Link>
                  <Link activeClass='active' to='process' spy smooth offset={20} duration={1000}>Process</Link>
                  <Link activeClass='active' to='integration' spy smooth offset={20} duration={1000}>Integration</Link>
                </p>

                {/* <p><Link to='#'>Edunomics</Link> © 2019</p> */}
              </div>

              {/* 
              <div className='col-md-3 col-lg-3 col-sm-12'>

                <div className='subscribe'>
                  <h5>Subscribe us</h5>
                  <br />
                  <p>Nam sunt rem beatae architecto cupiditate numquam.</p>
                  <div className='input-group'>
                    <input type='text' className='form-control input-sm' placeholder='Email Address' />
                    <span className='input-group-btn'>
                      <button className='btn btn-primary btn-lg mx-1' type='button'><i
                        className='fa fa-check ' /></button>
                    </span>
                  </div>
                  <br />
                  <p>We respect your privacy.</p>
                </div>
              </div> */}

              <div className='col-md-6 col-lg-6 col-sm-12 mx-auto px-2'>
                <h5>About the company</h5><br />
                <p className='text-justify'>We've designed Inventory management tool  with a desire to help companies to grow faster by taking control of one the most crucial thing in management – inventory with clients before spending, purchasing of goods, works from external source and management of goods in inventory. Inventory management tool  is here to help you to control the good managements and storage process and reduce manual work with a simple and powerful cloud solution.</p>
                <div className='footer-icons my-2'>
                  <Anchor to='#'><i className='fa fa-facebook fa-1x mx-4 px-2' /></Anchor>
                  <Anchor to='#'><i className='fa fa-instagram fa-1x mx-4 px-2' /></Anchor>
                  <Anchor to='https://www.google.com' replace><i className='fa fa-linkedin fa-1x mx-4 px-2' /></Anchor>
                  <Anchor to='#'><i className='fa fa-whatsapp fa-1x mx-4 px-2' /></Anchor>
                  {/* <i className='fa fa-whatsapp fa-1x' onClick={() => {
                    this.state.r ? <Redirect to='/google'>click me</Redirect> : <Anchor to="/" />
                  }} />
                  <Route path='/google' to='https://www.google.co.in' /> */}
                  {/* <a href='www.google.com'>Google</a>   */}
                </div>
              </div>


              <div className='col-md-3 col-lg-3 col-sm-12 mx-auto px-2'>
                <div className='container my-4'>

                  {/* <div className='media media-container '>
                    <div className='media-left px-2'>
                      <span className='fa-stack fa-1x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-map-marker fa-stack-1x fa-inverse' />
                      </span>
                    </div>
                    <div className='media-body'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div> */}

                  <div className='media'>
                    <div className='media-left px-2'>
                      <span className='fa-stack fa-1x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-phone fa-stack-1x fa-inverse' />
                      </span>
                    </div>
                    <div className='media-body'>
                      <Link to='tel:+91' className='footer-link'>+91-9669911101</Link>
                    </div>
                  </div>

                  <div className='media' style={{ lineHeight: '1.5', padding: '10px 0px' }}>
                    <div className='media-left' style={{ padding: '0px 6px' }}>
                      <span className='fa-stack fa-1x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-envelope fa-stack-1x fa-inverse' />
                      </span>
                    </div>
                    <div className='media-body'>
                      <Link to='mailto:contact@edunomics.in' className='footer-link'>contact@edunomics.in</Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </footer >
      </Router >
    )
  }
}

export default Footer
