import React, { useState } from 'react';

export default function Team() {

  const [isShown, setIsShown] = useState(false);

  return (
    <div id='team'>
      <div className="col-11 d-flex justify-content-between pt-5">
        <h2 className="text-white"> Meet the team </h2>
        <div className='align-self-center'>
          {/* <i className="fas fa-chevron-down fa-2x"></i> */}
        </div>
      </div>
      <div className='container pt-3'>
        <div className='row'>
          <div className='row justify-content-around'>
            <div className='m-3 team'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
              <img className='rounded' src='./assets/team/bridget-leer.png' />
              {isShown && (
                <div className='text-white team-info'>I am committed to finding the best soltuions to your biggest challanges. As the liason between our team and your goals, we will work together to find the perfect blend of technology, features and success.</div>
              )}
              <h3 className='text-center text-white'> Client Manager</h3>
            </div>
            <div className='m-3 team'>
              <img className='rounded' src='./assets/team/elliot-porter.png'></img>
              <h3 className='text-center text-white'> Full Stack Developer </h3>
            </div>
            <div className='m-3 team'>
              <img className='rounded' src='./assets/team/joe-stig.png'></img>
              <h3 className='text-center text-white'> Security Expert </h3>
            </div>
            <div className='m-3 team'>
              <img className='rounded' src='./assets/team/mr-ceo.png'></img>
              <h3 className='text-center text-white'> Director </h3>
            </div>
            <div className='m-3 team'>
              <img className='rounded' src='./assets/team/sue-green.png'></img>
              <h3 className='text-center text-white'> Project Lead </h3>
            </div>
            <div className='m-3 team'>
              <img className='rounded' src='./assets/team/amber-touche.png'></img>
              <h3 className='text-center text-white'> Design Lead </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
