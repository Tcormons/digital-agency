import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-around'>
              <img src='./assets/DALogo.jpg' className='m-2 logo' />
              <div className='align-self-center text-white'>digitalagency@gmail.com</div>
              <div className='d-flex flex-column align-self-center'>
                <div className='align-self-center text-white'>(123)456-7890</div>
                <div className='align-self-center text-white'>123 Success Dr Laguna Beach, Ca</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
