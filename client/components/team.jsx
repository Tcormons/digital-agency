import React from 'react';

export default function Team() {
  return (
    <div id='team'>
      <div className="col-11 d-flex justify-content-between">
        <h2 className=""> Meet the team </h2>
        <div className='align-self-center'>
          <i className="fas fa-chevron-down fa-2x"></i>
        </div>
      </div>
      <div className='container pt-3'>
        <div className='row'>
          <div className='row justify-content-around'>
            <div className='m-3'>
              <img className='team rounded' src='./assets/team/bridget-leer.png'></img>
              <h3 className='text-center'> Client Manager </h3>
            </div>
            <div className='m-3'>
              <img className='team rounded' src='./assets/team/elliot-porter.png'></img>
              <h3 className='text-center'> Full Stack Developer </h3>
            </div>
            <div className='m-3'>
              <img className='team rounded' src='./assets/team/joe-stig.png'></img>
              <h3 className='text-center'> Security Expert </h3>
            </div>
            <div className='m-3'>
              <img className='team rounded' src='./assets/team/mr-ceo.png'></img>
              <h3 className='text-center'> Director </h3>
            </div>
            <div className='m-3'>
              <img className='team rounded' src='./assets/team/sue-green.png'></img>
              <h3 className='text-center'> Project Lead </h3>
            </div>
            <div className='m-3'>
              <img className='team rounded' src='./assets/team/amber-touche.png'></img>
              <h3 className='text-center'> Design Lead </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
