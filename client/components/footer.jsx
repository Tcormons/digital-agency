import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between'>
              <img src='./assets/DALogo.jpg' className='m-2 logo' />
              <div className='d-flex'>
                <h3 className='m-2 align-self-center text-white'>Services</h3>
                <h3 className='m-2 align-self-center text-white'>Agency</h3>
                <h3 className='m-2 align-self-center text-white'>Contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
