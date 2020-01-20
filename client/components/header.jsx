import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between'>
              <div className='m-2'>Logo</div>
              <div className='d-flex'>
                <div className='m-2'>Services</div>
                <div className='m-2'>Agency</div>
                <div className='m-2'>Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
