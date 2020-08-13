import React, { Component } from 'react';

import logoFooter from '../resources/logo_footer.png';
import wheelBreak from '../resources/wheel.png'

class Footer extends Component {

  render() {
    return (
      <>
      <div id='sb-2' className='section section-break'>
        <img src={wheelBreak} />
      </div>

      <div className='footer section'>
        <div className='content'>
          <img src={logoFooter} />

          <ul>
            <li>
              MORE
            </li>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/#contact'>Contact</a></li>
            <li><a href='/terms-conditions'>Terms and Conditions</a></li>
          </ul>

          <ul>
            <li>
              FIND US
            </li>
            <li>
              Level 1, 53 Fort St<br />
              Auckland CBD
            </li>
            <li>
              <a href='mailto:raymond@spprax.co.nz'>raymond@spprax.co.nz</a>
            </li>
          </ul>

          <ul>
            <li>
              CONNECT
            </li>
            <li id='brands-li'>
              <a href='https://www.facebook.com/spprax/'><i className='fab fa-facebook'></i></a>
              <a href='https://www.instagram.com/sppraxmedia/'><i className='fab fa-instagram'></i></a>
              <a href='https://vimeo.com/raymondf/'><i className='fab fa-vimeo'></i></a>
              <a href='mailto:raymond@spprax.co.nz'><i className='fas fa-envelope'></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div id='copyright' className='section'>
        <p>&copy; Spprax Media Limited 2020. All rights reserved.</p>
        <p id='web-author'>Website created in house.</p>
      </div>

      </>
    );
  }

}

export default Footer;
