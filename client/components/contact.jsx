import React from 'react';
import Services, { isShownConsult } from './services';

export default function Contact(props) {
  console.log(isShownConsult)
  return (
    <div id='contact'>
      <div className="col-12 pt-5">
        <h2>Contact Us</h2>
      </div>
      <div className='container pb-5'>
        <div className='row'>
          <form className='col-sm-10 col-md-10 col-lg-8 mx-auto pt-3'>
            <div className='d-flex'>
              <label className='input-group input-group-sm mr-4'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-envelope fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Email'
                  type='text'
                  placeholder='Email'
                  value={props.email}
                  onChange={props.formUpdate}
                ></input>
              </label>
              <label className='input-group input-group-sm'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Name'
                  type='text'
                  placeholder='Name'
                  value={props.name}
                  onChange={props.formUpdate}
                />
              </label>
            </div>
            <label className='input-group input-group-sm mb-1'>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-plus-square fa-fw"></i>
                </div>
              </div>
              <textarea className='align-self-center form-control'
                name='Reason'
                type='number'
                placeholder='What can we help with?'
                value={isShownConsult ? 'Consultation' : false}
                onChange={props.formUpdate}>
              </textarea>
            </label>
            <button className='add btn btn-primary m-1'
              name='send'
              type='submit' >
              Send </button>
          </form>
        </div>
      </div>
    </div>
  );
}
