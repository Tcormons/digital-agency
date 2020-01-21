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
                <h3 className='m-2'>Services</h3>
                <h3 className='m-2'>Agency</h3>
                <h3 className='m-2'>Contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
