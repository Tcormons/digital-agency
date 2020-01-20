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
              <h3 className='text-center'> Design </h3>
            </div>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_server_cluster_jwwq.svg'></img>
              <h3 className='text-center'> Hosting </h3>
            </div>
            <div className='col-3 mx-auto'>
              <img className='services' src='./assets/undraw_online_ad_mg4t.svg'></img>
              <h3 className='text-center'> Ads </h3>
            </div>
          </div>
        </div>
        <div className='container pt-5'>
          <div className='row'>
            <div className="col-11 d-flex justify-content-between">
              <h2 className=""> Meet the team </h2>
              <div className='align-self-center'>
                <i className="fas fa-chevron-down fa-2x"></i>
              </div>
            </div>
            <div className='mx-auto'>
              <img className='team' src='./assets/team/bridget-leer.png'></img>
              <h3 className='text-center'> Client Manager </h3>
            </div>
            <div className='mx-auto'>
              <img className='team' src='./assets/team/elliot-porter.png'></img>
              <h3 className='text-center'> Full Stack Developer </h3>
            </div>
            <div className='mx-auto'>
              <img className='team' src='./assets/team/joe-stig.png'></img>
              <h3 className='text-center'> Security Expert </h3>
            </div>
            <div className='mx-auto'>
              <img className='team' src='./assets/team/mr-ceo.png'></img>
              <h3 className='text-center'> Director </h3>
            </div>
            <div className='mx-auto'>
              <img className='team' src='./assets/team/sue-green.png'></img>
              <h3 className='text-center'> Project Lead </h3>
            </div>
            <div className='mx-auto'>
              <img className='team' src='./assets/team/amber-touche.png'></img>
              <h3 className='text-center'> Design Lead </h3>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
            <form className='col-6 mx-auto'>
              <label className='input-group input-group-sm mb-1'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-envelope fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Email'
                  type='text'
                  placeholder='Email'
                  // value={this.state.name}
                  // onChange={this.updateField}
                ></input>
              </label>
              <label className='input-group input-group-sm mb-1'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Name'
                  type='text'
                  placeholder='Name'
                  // value={this.state.course}
                  // onChange={this.updateField}
                />
              </label>
              <label className='input-group input-group-sm mb-1'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-plus-square fa-fw"></i>
                  </div>
                </div>
                <input className='form-control'
                  name='Reason'
                  type='number'
                  placeholder='What can we help with?'
                  // value={this.state.grade}
                  // onChange={this.updateField}
                />
              </label>
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
}
