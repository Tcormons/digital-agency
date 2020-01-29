import React from 'react';
import Header from './header';
import Banner from './banner';
import AboutUs from './about-us';
import Services from './services';
import Team from './team';
import Contact from './contact';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactForm: {
        name: '',
        email: '',
        reason: ''
      },
      services: {
        consult: false,
        design: false,
        marketing: false,
        performance: false,
        hosting: false,
        security: false
      }
    };

    this.formUpdate = this.formUpdate.bind(this);
    this.servicesUpdate = this.servicesUpdate.bind(this);
  }

  servicesUpdate(name) {
    this.setState(prevState => ({
      services: {
        ...prevState.services,
        [name]: !this.state[name]
      }
    }))
  }

  formUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <AboutUs />
        <Services
          servicesUpdate={this.servicesUpdate}
          props={this.state.services} />
        <Team />
        <Contact
          formUpdate={this.formUpdate}
          props={this.state.contactform}
          services={this.state.services}
          servicesUpdate={this.servicesUpdate} />
        <Footer />
      </div>

    );
  }
}
