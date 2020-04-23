import React from 'react'
import '../css/main.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function RequestDemo() {
  return (
    <Router>
      {/* <!-- SECTION 5 --> */}
      <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-center' id='request-demo-section'>
        <div className=' col-lg-10 row m-0 p-0 align-items-center'>
          <div className='mx-auto col-lg-6 col-sm-12 col-xs-12 text-justify justify-content-center'>
            <p className='h3 text-left product-title request-demo-title'>Complete your inventory toolkit with Inventory management process </p><br />
            <p className='h5 product-intro font-weight-normal request-demo-desc'>Inventory management integrates with and enhances your existing inventory . Gain proactive control with customizable approvals, and organize all your inventory workflows.
</p>
            <br />
            <Link to='#' className='btn btn-primary demo-btn font-weight-regular'>Request a demo</Link>
          </div>
          <div className=' col-lg-6 col-sm-12 col-xs-12 p-0 m-0 overview-image' id='request-demo-image' />
        </div>
      </div>
    </Router >
  )
}

export default RequestDemo
