import React from 'react';
import Header from './header';
import Banner from './banner';
import Footer from './footer';

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
        <h2 className="col-12 pt-3"> Our Services </h2>
        <div className='container pt-5'>
          <div className='row justify-content-around'>
            <div className='m-3'>
              <img className='services' src='./assets/undraw_redesign_feedback_48ti.svg'></img>
              <h3 className='text-center'> Design </h3>
            </div>
            <div className='m-3'>
              <img className='services' src='./assets/undraw_server_cluster_jwwq.svg'></img>
              <h3 className='text-center'> Hosting </h3>
            </div>
            <div className='m-3'>
              <img className='services' src='./assets/undraw_online_ad_mg4t.svg'></img>
              <h3 className='text-center'> Marketing </h3>
            </div>
            <div className='m-3'>
              <img className='services' src='./assets/undraw_landing_page_q6hh.svg'></img>
              <h3 className='text-center'> Consulting </h3>
            </div>
          </div>
        </div>
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
        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
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
                  // value={this.state.name}
                  // onChange={this.updateField}
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
                  // value={this.state.course}
                  // onChange={this.updateField}
                  />
                </label>
              </div>
              <label className='input-group input-group-sm mb-1'>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-plus-square fa-fw"></i>
                  </div>
                </div>
                <textarea className='form-control'
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
        <Footer />
      </div>

    );
  }
}
