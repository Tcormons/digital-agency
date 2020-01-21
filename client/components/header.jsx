import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between'>
              <img src='./assets/DALogo.jpg' className='m-2 logo' />
              <div className='d-flex'>
                <h3 className='m-2 align-self-center'><a href="#services">Services</a></h3>
                <h3 className='m-2 align-self-center'><a href="#team">Agency</a></h3>
                <h3 className='m-2 align-self-center'><a href="#contact">Contact</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
