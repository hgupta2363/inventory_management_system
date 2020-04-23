import React, { Component } from "react";
import "../css/main.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Consolidation extends Component {
  render() {
    return (
      <Router>
        {/* < !--SECTION 3 -- > */}
        <div
          className='d-flex align justify-content-center col-lg-12 col-sm-12 col-xs-12 h-100 bg-light'
          id='consolidation'
        >
          <div className='row col-lg-10 justify-content-center d-flex align-items-center p-0 m-0 custom-section'>
            <p className='h2 product-title font-weight-regular py-2'>
            Consolidate and control all inventory from source to pay and other services in inventory management and processes 
            </p>
            <p className='h6 product-intro font-weight-regular py-4'>
            With Inventory management tool  and manage inventorysolutions, you can digitize and simplify all your processes end-to-end, on a single, integrated platform in the cloud.
            </p>

            {/* <!-- <div className="d-flex bg-warning w-50 h-50" style="overflow: visible">
            <div className="d-flex bg-danger"
              style="z-index: 1; position: absolute;  height:35%; width: 35%; margin-left: 0%; margin-top:0%;">
            </div>
            <div className="d-flex bg-success"
              style="float: ; display:block; height:35%; width: 35%; margin-left:10%; margin-top:10%; z-index: 1; position: absolute">
            </div>
          </div> --> */}

            <div className='col-sm-12 align-items-center justify-content-center align-center row m-0 p-0'>
              <div className='d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 consolidate-container p-3 my-3'>
                <div className='d-flex consolidate-image' id='consolidate-source-image' />
                <p className='h5 font-weight-regular py-2 consolidate-list-head'>
                  Source
                </p>
                <p className='text-justify font-weight-regular'>
                Make higher sourcing choices with inventory analysis insights, negotiate best-value agreements for savings on each direct and indirect materials,services and goods. Minimize risk and accelerate the lifecycle with intrinsic  inventory management and interaction.
                </p>
                <Link to='#'>Read more -></Link>
              </div>
              <div className='d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 consolidate-container p-3 my-3'>
                <div className='d-flex consolidate-image' id='consolidate-procure-image' />
                <p className='h5 font-weight-regular py-2 consolidate-list-head'>
                Interact
                </p>
                <p className='text-justify font-weight-regular'>
                Increase inventory management  and  goods guaranteed compliance mistreatment the market’s broadest set of e-inventory process and answer capabilities.Lead workers to most well-liked suppliers with a straightforward, target-hunting interaction for expertise. interact with all suppliers simply and with confidence and manage inventory
                </p>
                <Link to='#'>Read more -></Link>
              </div>
              <div className='d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 consolidate-container p-3 my-3'>
                <div className='d-flex consolidate-image' id='consolidate-pay-image' />
                <p className='h5 font-weight-regular py-2 consolidate-list-head'>
                  Pay
                </p>
                <p className='text-justify font-weight-regular'>
                Transform liabilities into strategic assets. automatize inventory capture, workflow, and approval. give inventory guiders visibility into payments. Improve inventory management   whereas reducing provide chain prices and liquidity risk.
                </p>
                <Link to='#'>Read more -></Link>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Consolidation;
