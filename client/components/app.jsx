import React from 'react';
import Header from './header';
import Banner from './banner';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className='container pt-5'>
          <div className='row'>
            <h2 className="col-12"> Our Services </h2>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_redesign_feedback_48ti.svg'></img>
              <h4 className='text-center'> Design </h4>
            </div>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_server_cluster_jwwq.svg'></img>
              <h4 className='text-center'> Hosting </h4>
            </div>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_online_ad_mg4t.svg'></img>
              <h4 className='text-center'> Ads </h4>
            </div>
          </div>
        </div>
        <div className='container pt-5'>
          <div className='row'>
            <h2 className="col-12"> Meet the team </h2>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_redesign_feedback_48ti.svg'></img>
              <h2 className='text-center'> Design </h2>
            </div>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_server_cluster_jwwq.svg'></img>
              <h2 className='text-center'> Hosting </h2>
            </div>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_online_ad_mg4t.svg'></img>
              <h2 className='text-center'> Ads </h2>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
