import React, { Component } from 'react';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';

import termsConditionsSplash from '../../resources/terms-splash.JPG';


class Error404 extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <div id='error404' className='section'>
          <div className='content'>
            <h2>Error 404! (page not found)</h2>
            <p>Uh oh! You must have clicked on a broken link. Try Using the navigation bar at the top of this page to go where you want to be.</p>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }

}

export default Error404;
