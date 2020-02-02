import React from 'react';

export default function Contact(props) {

  // const [isShownConsult, setIsShownConsult] = useState(props.props.consult);
  // const [isShownDesign, setIsShownDesign] = useState(props.props.design);
  // const [isShownMarketing, setIsShownMarketing] = useState(props.props.marketing);
  // const [isShownPerformance, setIsShownPerformance] = useState(props.props.performance);
  // const [isShownHosting, setIsShownHosting] = useState(props.props.hosting);
  // const [isShownSecurity, setIsShownSecurity] = useState(props.props.security);

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
                  name='email'
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
                  name='name'
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
                name='reason'
                type='number'
                placeholder='Anything else you would like to mention?'
                value={props.reason}
                onChange={props.formUpdate}>
              </textarea>
            </label>

            <div className="container">
              <div className="row mx-auto">
                <div className='m-2'>
                  <div
                    className={`${props.props.consult ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('consult');
                        // setIsShownConsult(!isShownConsult);
                    }}>
                    <img className='services-contact' src='./assets/undraw_landing_page_q6hh.svg' />
                  </div>
                </div>
                <div className='m-2'>
                  <div
                    className={`${props.props.design ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('design');
                        // setIsShownDesign(!isShownDesign);
                    }}>
                    <img className='services-contact' src='./assets/undraw_redesign_feedback_48ti.svg' />
                  </div>
                </div>
                <div className='m-2'>
                  <div
                    className={`${props.props.marketing ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('marketing');
                        // setIsShownMarketing(!isShownMarketing);
                    }}>
                    <img className='services-contact' src='./assets/undraw_online_ad_mg4t.svg' />
                  </div>
                </div>
                <div className='m-2'>
                  <div
                    className={`${props.props.performance ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('performance');
                        // setIsShownPerformance(!isShownPerformance);
                    }}>
                    <img className='services-contact' src='./assets/undraw_performance_overview_p9bm.svg' />
                  </div>
                </div>
                <div className='m-2'>
                  <div
                    className={`${props.props.hosting ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('hosting');
                        // setIsShownHosting(!isShownHosting);
                    }}>
                    <img className='services-contact' src='./assets/undraw_server_cluster_jwwq.svg' />
                  </div>
                </div>
                <div className='m-2'>
                  <div
                    className={`${props.props.security ? 'services-contact-click' : ''}`}
                    onClick={() => {
                      props.servicesUpdate('security');
                        // setIsShownSecurity(!isShownSecurity);
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
