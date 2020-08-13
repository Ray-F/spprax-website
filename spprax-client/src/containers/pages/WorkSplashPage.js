import React, { Component } from 'react';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';

class WorkSplashPage extends Component {

  render() {
    return (
      <div className='work-splash-page'>
        <Navigation />

        <div className='section'>
          <div className='content'>
            <h2>Our Portfolio</h2>
            <p>Hello World!</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

}

export default WorkSplashPage;
