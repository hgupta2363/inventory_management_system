import React from 'react'
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.css'

function Integration() {
  return (
    // <!-- SECTION 6 -->
    <div className='col-lg-12 col-sm-12 col-xs-12 custom-section h-100 bg-light justify-content-center align-items-center d-flex flex-column m-0'
      id='integration' style={{ height: '100vh' }}>
      <span className='align-items-center justify-content-center align-center row my-4 p-0'>
        <span className='bg-dark section-head-line mx-2' />
        <p className='h4 text-uppercase section-head' id='int-sec-head'>Integration</p>
        <span className='bg-dark section-head-line mx-2' />
      </span>
      <div className='row col-lg-10 justify-content-center my-0 h-75'>
        <p className='h3 product-title title-color my-5'>Easily integrate your inventory with Inventory management system</p>
        <br />
        {/* <p className='h5 product-intro text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
        <img alt='product-integration' className='overview-image' id='integration-image' src={require('../images/integration.jpg')} />
      </div>
    </div>
  )
}

export default Integration
