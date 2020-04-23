import React from 'react'
import '../css/main.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function Contact() {
  return (
    <Router>
      {/* < !--SECTION 8 -- > */}
      <div className='d-flex align justify-content-center col-lg-12 col-sm-12 col-xs-12 bg-light' id='contact'>
        <div
          className='d-flex flex-column col-lg-10 justify-content-center align-items-center p-0 mx-0 my-4 custom-section'>
          <span className='align-items-center justify-content-center align-center row p-0 mx-0 my-4'>
            <span className='bg-dark section-head-line mx-2' />
            <p className='h4 text-uppercase section-head'>Contact</p><span
              className='bg-dark section-head-line mx-2' />
          </span>
          <div className='row w-100 px-0 mx-0 my-2'>
            <iframe width='100%' height='500' title='Map'
              className='col-xs-12 col-sm-12 col-md-6 col-lg-6 middle-line justify-content-center map-iframe'
              src='https://maps.google.com/maps?q=Fashion%20Corner%205%2C10%2C%20SHREENATH%20PLAZA%2C%20L.T%20MULUND%20(E)%2C%20Hanuman%20Chowk%2C%20Mulund%20East%2C%20Mumbai%2C%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0'><Link
                to='https://www.maps.ie/map-my-route/'>Draw map route</Link></iframe>

            <div className='col-xs-12 col-sm-12  middle-line col-md-6 col-lg-6' id='Consult'>
              <form className='p-2' id='contact-form'>

                <input type='text' name='Name' id='defaultContactFormName' className='form-control mb-4'
                  placeholder='Name' />
                <input type='number' name='mobile' id='defaultContactFormName' className='form-control mb-4'
                  placeholder='Contact No.' />

                <input type='email' name='email_add' id='defaultContactFormEmail' className='form-control mb-4'
                  placeholder='E-mail' />

                <label htmlFor='defaultSelect' className='text-style'>Enquire for</label>
                <select id='defaultSelect' name='type_enuiry' className='browser-default custom-select mb-4'>
                  <option value='' disabled='' defaultValue>Choose option</option>
                  <option value='1'>Mobile Solution</option>
                  <option value='2'>Digital Marketing</option>
                  <option value='3'>Software Solution</option>
                  <option value='4'>Web Solution</option>
                  <option value='5'>Desgining Solution</option>
                  <option value='6'>ERP and CRM Solutions</option>
                </select>
                <textarea className='form-control rounded-0' name='requirements' id='exampleFormControlTextarea2'
                  rows='3' placeholder='Message' />
                <br /><br />
                <button className='btn btn-primary general-button' id='submit-form' type='submit'>Send</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Router>
  )
}
export default Contact
