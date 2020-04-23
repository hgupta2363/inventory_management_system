import React from 'react'
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.css'

function Process() {
  return (

    // <!-- SECTION 4 -->
    <div className='d-flex align justify-content-center col-lg-12 col-sm-12 col-xs-12 bg-light' id='process'>
      <div className='row col-lg-10 justify-content-center d-flex align-items-center p-0 my-4 mx-0 custom-section'>
        <span className='align-items-center justify-content-center align-center row p-0 mx-0' style={{ marginTop: '4rem' }}>
          <span className='bg-dark section-head-line mx-2' />
          <p className='h4 text-uppercase section-head'>Process</p>
          <span className='bg-dark section-head-line mx-2' />
        </span>
        <img alt='' src={require('../images/integration-process.png')}
          className='overview-image my-3 mx-auto p-0' />
      </div>
    </div>
  )
}

export default Process
