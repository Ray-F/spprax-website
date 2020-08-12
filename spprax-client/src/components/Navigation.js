import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li className='li-header'><a href='work'>Our Work</a>
            <ul>
              <li><a href='work/corporate'>Corporate Profiles</a></li>
              <li><a href='work/event'>Event</a></li>
              <li><a href='work/campaign'>Campaigns</a></li>
              <li><a href='work/function'>Social Functions</a></li>
              <li><a href='work/wedding'>Wedding</a></li>
            </ul>
          </li>

          {/* 
          <li className='li-header' id='services-nav'><a href='#services'>Services</a>
            <ul>
              <li><a href='#photography'>Photography</a></li>
              <li><a href='#video'>Video Production</a></li>
              <li><a href='#live'>Livestreaming</a></li>
            </ul>
          </li>
          */}

          <li><a className='btn' id='btn-contact' href='#contact'>Contact</a></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
