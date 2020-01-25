import React, { useState } from 'react';

export default function Team() {

  const [isShownClient, setIsShownClient] = useState(false);
  const [isShownDeveloper, setIsShownDeveloper] = useState(false);
  const [isShownSecurity, setIsShownSecurity] = useState(false);
  const [isShownDirector, setIsShownDirector] = useState(false);
  const [isShownProject, setIsShownProject] = useState(false);
  const [isShownDesign, setIsShownDesign] = useState(false);

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
              onMouseEnter={() => setIsShownClient(true)}
              onMouseLeave={() => setIsShownClient(false)}>
              <img className='rounded' src='./assets/team/bridget-leer.png'/>
              {isShownClient && (
                <div className='text-white team-info'>I am committed to finding the best soltuions to your biggest challanges. As the liason between our team and your goals, we will work together to find the perfect blend of technology, features and success.</div>
              )}
              <h3 className='text-center text-white'> Client Manager</h3>
            </div>
            <div className='m-3 team'
              onMouseEnter={() => setIsShownDeveloper(true)}
              onMouseLeave={() => setIsShownDeveloper(false)}>
              <img className='rounded' src='./assets/team/elliot-porter.png'/>
              {isShownDeveloper && (
                <div className='text-white team-info'>As a developer, my job is realiant on mastering the code that writes your applications. I'm a guru and a technical specialist at heart, with a passion for finding the best solutions in any stack.</div>
              )}
              <h3 className='text-center text-white'> Full Stack Developer </h3>
            </div>
            <div className='m-3 team'
              onMouseEnter={() => setIsShownSecurity(true)}
              onMouseLeave={() => setIsShownSecurity(false)}>
              <img className='rounded' src='./assets/team/joe-stig.png'/>
              {isShownSecurity && (
                <div className='text-white team-info'>In order to protect your assets, we have to be prepared. My focus and concentration is on bringing the world of hacking and cybersecurity to a nice and nuetral 'chill zone'. No down time, no vulnerabilites; that's our guarantee.</div>
              )}
              <h3 className='text-center text-white'> Security Expert </h3>
            </div>
            <div className='m-3 team'
              onMouseEnter={() => setIsShownDirector(true)}
              onMouseLeave={() => setIsShownDirector(false)}>
              <img className='rounded' src='./assets/team/mr-ceo.png'/>
              {isShownDirector && (
                <div className='text-white team-info'>Networking and Adventure connoisseur, I am always ready for life's great opportunities. My role is to find the very best for our clients. </div>
              )}
              <h3 className='text-center text-white'> Director </h3>
            </div>
            <div className='m-3 team'
              onMouseEnter={() => setIsShownProject(true)}
              onMouseLeave={() => setIsShownProject(false)}>
              <img className='rounded' src='./assets/team/sue-green.png'/>
              {isShownProject && (
                <div className='text-white team-info'>Let's collaborate, let's create! It takes a village, or maybe just a group of very dedicated people. I keep the project on track, ready to meet deadlines and exceed expectations!</div>
              )}
              <h3 className='text-center text-white'> Project Lead </h3>
            </div>
            <div className='m-3 team'
              onMouseEnter={() => setIsShownDesign(true)}
              onMouseLeave={() => setIsShownDesign(false)}>
              <img className='rounded' src='./assets/team/amber-touche.png'/>
              {isShownDesign && (
                <div className='text-white team-info'>Finding the perfect blend of spaceing, colors and transitions is what works best for me! Let's find that perfect blend of creativity, valuable content and asthetics!</div>
              )}
              <h3 className='text-center text-white'> Design Lead </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
