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
    this.state = {};

  }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <AboutUs />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </div>

    );
  }
}
