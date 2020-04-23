import React from 'react'
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.css'

function Compare() {
  return (
    //  <!-- SECTION 7 -->
    <div className='col-lg-12 col-sm-12 col-xs-12' id='comparison'>
      <div className='d-flex col-lg-10 justify-content-center mx-auto table-responsive align-items-center my-5' style={{ minHeight: '100vh' }}>
        <table className='table table-bordered table-responsive bg-light' >
          <thead>
            <tr>
              <th scope='col'>Features</th>
              <th scope='col'>Procure Infinity</th>
              <th scope='col'>Procurify</th>
              <th scope='col'>Octoro</th>
              <th scope='col'>Kissflow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='row-head'>Automated PO</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Custom fields</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>RFP Quotations </td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Simple and Intuitive UI</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-times-circle true fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Basic integrations (Xero, Sage One, QuickBooks)</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>3-way matching</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Inventory + Warehouses</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Premium support</td>
              <td className='blue'>Included for all plans</td>
              <td className='false'>Enterprise only</td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>API access</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td className='false'>Enterprise only</td>
              <td className='false'>Enterprise only</td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Pricing tiers</td>
              <td className='blue'>Everything included</td>
              <td className='false'>Premium plans</td>
              <td className='false'>Quote-based pricing</td>
              <td className='false'>10 users minimum</td>
            </tr>
            <tr>
              <td className='row-head'>Storage of documents</td>
              <td className='blue'>Unlimited</td>
              <td className='false'>Limited</td>
              <td className='false'>Limited</td>
              <td className='true'>Unlimited</td>
            </tr>
            <tr>
              <td className='row-head'>Number of business units</td>
              <td className='blue'>Unlimited</td>
              <td className='false'>Limited</td>
              <td className='false'>Limited</td>
              <td className='true'>Unlimited</td>
            </tr>
            <tr>
              <td className='row-head'>Number of transactions</td>
              <td className='blue'>Unlimited</td>
              <td className='false'>Limited</td>
              <td className='true'>Unlimited</td>
              <td className='true'>Unlimited</td>
            </tr>
            <tr>
              <td className='row-head'>Setup time</td>
              <td className='blue'>0-3 weeks</td>
              <td className='false'>>3 weeks</td>
              <td className='false'>>3 weeks</td>
              <td className='true'>0-3 weeks</td>
            </tr>
            <tr>
              <td className='row-head'>Repeat orders</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
            </tr>
            <tr>
              <td className='row-head'>Purchase requisition reporting</td>
              <td><i className='fa fa-check-circle blue fa-2x' /></td>
              <td><i className='fa fa-check-circle true fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
              <td><i className='fa fa-times-circle false fa-2x' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Compare
