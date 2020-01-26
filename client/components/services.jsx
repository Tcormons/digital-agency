import React, { useState } from 'react';

export default function Services() {

  const [isShownConsult, setIsShownConsult] = useState(false);
  const [isShownDesign, setIsShownDesign] = useState(false);
  const [isShownMarketing, setIsShownMarketing] = useState(false);
  const [isShownPerformance, setIsShownPerformance] = useState(false);
  const [isShownHosting, setIsShownHosting] = useState(false);
  const [isShownSecurity, setIsShownSecurity] = useState(false);

  return (
    <div id="services">
      <h2 className="col-12 pt-5"> Our Services </h2>
      <div className='col-12 text-info mx-auto' > Feel free to click on the services you would like to hear more about and don't forget to send us a message!</div>
      <div className='container pt-5'>
        <div className='row'>
          <div className='row justify-content-around'>
            <div className='m-3'>
              <div className={`${isShownConsult ? 'services-click' : false}`}
                onClick={() => setIsShownConsult(!isShownConsult)}>
                <img className='services' src='./assets/undraw_landing_page_q6hh.svg' />
              </div>
              <h3 className='text-center'> Consulting </h3>
            </div>
            <div className='m-3'>
              <div className={`${isShownDesign ? 'services-click' : false}`}
                onClick={() => setIsShownDesign(!isShownDesign)}>
                <img className='services' src='./assets/undraw_redesign_feedback_48ti.svg'></img>
              </div>
              <h3 className='text-center'> Design </h3>
            </div>
            <div className='m-3'>
              <div className={`${isShownMarketing ? 'services-click' : false}`}
                onClick={() => setIsShownMarketing(!isShownMarketing)}>
                <img className='services' src='./assets/undraw_online_ad_mg4t.svg'></img>
              </div>
              <h3 className='text-center'> Marketing </h3>
            </div>
            <div className='m-3'>
              <div className={`${isShownPerformance ? 'services-click' : false}`}
                onClick={() => setIsShownPerformance(!isShownPerformance)}>
                <img className='services' src='./assets/undraw_performance_overview_p9bm.svg'></img>
              </div>
              <h3 className='text-center'> Performance </h3>
            </div>
            <div className='m-3'>
              <div className={`${isShownHosting ? 'services-click' : false}`}
                onClick={() => setIsShownHosting(!isShownHosting)}>
                <img className='services' src='./assets/undraw_server_cluster_jwwq.svg'></img>
              </div>
              <h3 className='text-center'> Hosting </h3>
            </div>
            <div className='m-3'>
              <div className={`${isShownSecurity ? 'services-click' : false}`}
                onClick={() => setIsShownSecurity(!isShownSecurity)}>
                <img className='services' src='./assets/undraw_two_factor_authentication_namy.svg'></img>
              </div>
              <h3 className='text-center'> Security </h3>
            </div>
          </div>
          <div className='d-flex justify-content-end p-5 mx-auto'>
            <a href="#contact">
              <button className='btn-primary rounded p-2'>
                Send us a message!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
