import React from 'react';

export default function Contact(props) {

  const [isShownConsult, setIsShownConsult] = useState(false);
  const [isShownDesign, setIsShownDesign] = useState(false);
  const [isShownMarketing, setIsShownMarketing] = useState(false);
  const [isShownPerformance, setIsShownPerformance] = useState(false);
  const [isShownHosting, setIsShownHosting] = useState(false);
  const [isShownSecurity, setIsShownSecurity] = useState(false);

  return (
    <div id='contact'>
      <div className="col-12 pt-5">
        <h2>Contact Us</h2>
      </div>
      <div className='container pb-5'>
        <div className='row'>
          <form className='col-sm-10 col-md-10 col-lg-8 mx-auto pt-3'>
            <div className='d-flex'>
              <label className='input-group input-group-sm mr-4'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-envelope fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Email'
                  type='text'
                  placeholder='Email'
                  value={props.email}
                  onChange={props.formUpdate}
                ></input>
              </label>
              <label className='input-group input-group-sm'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Name'
                  type='text'
                  placeholder='Name'
                  value={props.name}
                  onChange={props.formUpdate}
                />
              </label>
            </div>
            <label className='input-group input-group-sm mb-1'>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-plus-square fa-fw"></i>
                </div>
              </div>
              <textarea className='align-self-center form-control'
                name='Reason'
                type='number'
                placeholder='Anything else you would like to mention?'
                value={props.reason}
                onChange={props.formUpdate}>
              </textarea>
            </label>

            <div className="container">
              <div className="row">
                <div className='m-3'>
                  <div
                    className={`${props.services.consult ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('consult');
                      //   setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_landing_page_q6hh.svg' />
                  </div>
                </div>
                <div className='m-3'>
                  <div
                    className={`${props.services.design ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('design');
                      //   setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_redesign_feedback_48ti.svg' />
                  </div>
                </div>
                <div className='m-3'>
                  <div
                    className={`${props.services.marketing ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('marketing');
                      //   setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_online_ad_mg4t.svg' />
                  </div>
                </div>
                <div className='m-3'>
                  <div
                    className={`${props.services.perfomance ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('perfomance');
                      //   setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_performance_overview_p9bm.svg' />
                  </div>
                </div>
                <div className='m-3'>
                  <div
                    className={`${props.services.hosting ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('hosting');
                      //   setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_server_cluster_jwwq.svg' />
                  </div>
                </div>
                <div className='m-3'>
                  <div
                    className={`${props.services.security ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('security');
                      //   setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_two_factor_authentication_namy.svg' />
                  </div>
                </div>
              </div>
            </div>

            <button className='add btn btn-primary m-1'
              name='send'
              type='submit' >
              Send </button>
          </form>
        </div>
      </div>
    </div>
  );
}
