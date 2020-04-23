import React from 'react'
import '../css/main.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function Feedback() {
  return (
    <Router>
      {/* <!-- SECTION 9 --> */}
      <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-center' id='feedback-section'>
        <div className=' col-lg-10 row m-0 p-0 align-items-center'>
          <div className='mx-auto col-lg-10 col-sm-12 col-xs-12 text-justify justify-content-center text-center'>
            <p className='feedback-text-h1 product-title font-weight-regular'>Ready to step up your inventory management and process?
            </p><br />
            <p className='feedback-text product-intro font-weight-light'>Sign up for a free demonstration from our inventory  experts to see how <b> Inventory management process</b> can improve your current purchasing process.
            </p>
            <br /><br />
            <Link to='#' className='btn btn-primary demo-btn feedback-btn font-weight-bold m-4'>Book a call</Link>
            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSdmCI2_9qiZe50745skyj6TCuBP2heJRhgE5UI5Oh_3HweCsQ/viewform' replace className='btn btn-primary demo-btn feedback-btn font-weight-bold'>Give feedback</Link>
          </div>
        </div>
      </div>
    </Router >
  )
}
export default Feedback
