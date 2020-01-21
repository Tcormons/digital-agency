import React from 'react';

export default function Services() {
  return (
    <div id="services">
      <h2 className="col-12 pt-3"> Our Services </h2>
      <div className='container pt-5'>
        <div className='row justify-content-around'>
          <div className='m-3'>
            <img className='services' src='./assets/undraw_landing_page_q6hh.svg'></img>
            <h3 className='text-center'> Consulting </h3>
          </div>
          <div className='m-3'>
            <img className='services' src='./assets/undraw_redesign_feedback_48ti.svg'></img>
            <h3 className='text-center'> Design </h3>
          </div>
          <div className='m-3'>
            <img className='services' src='./assets/undraw_online_ad_mg4t.svg'></img>
            <h3 className='text-center'> Marketing </h3>
          </div>
          <div className='m-3'>
            <img className='services' src='./assets/undraw_performance_overview_p9bm.svg'></img>
            <h3 className='text-center'> Performance </h3>
          </div>
          <div className='m-3'>
            <img className='services' src='./assets/undraw_server_cluster_jwwq.svg'></img>
            <h3 className='text-center'> Hosting </h3>
          </div>
          <div className='m-3'>
            <img className='services' src='./assets/undraw_two_factor_authentication_namy.svg'></img>
            <h3 className='text-center'> Security </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
