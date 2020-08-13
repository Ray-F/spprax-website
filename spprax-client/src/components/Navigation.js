import React, { Component } from 'react';

import HamburgerMenu from 'react-hamburger-menu';
import showreelLogo from '../resources/logo.png';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      vWidth: null
    }

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setState({vWidth: window.innerWidth});
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    });
  }

  handleResize() {
    this.setState({vWidth: window.innerWidth});
    console.log("Resized to", this.state.vWidth);

    if (this.state.vWidth > 900) {
      this.setState({open:false})
    }
  }

  render() {
    let menuCmpt;
    let phoneMenuCmpt;

    // Phone size
    if (this.state.vWidth <= 900) {
      menuCmpt = (
        <li id='menu-btn'>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={30}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.2}
          />
        </li>
      );

      if (this.state.open) {
        phoneMenuCmpt = (
          <ul id='phone-menu'>
            <li><a href='/'><b>Home</b></a></li>
            <li><a href='/work/profile'>Profiles</a></li>
            <li><a href='/work/event'>Event</a></li>
            <li><a href='/work/campaign'>Campaigns</a></li>
            <li><a href='/work/wedding'>Wedding</a></li>
            <li><a href='/work/other'>Other</a></li>
            <li><a className='btn' id='btn-contact' href='/#contact'>Contact</a></li>
          </ul>
        );
      } else {
        phoneMenuCmpt = null;
      }

    } else {
      menuCmpt = null;
    }

    return (
      <nav>
        <img id='logo-nav' src={showreelLogo} onClick={(e) => {window.location.href='/'}}/>

        <ul>
          <li className='li-header' id='work-nav'><a href='/#work'>Our Work</a>
            <ul>
              <li><a href='/work/profile'>Profiles</a></li>
              <li><a href='/work/event'>Event</a></li>
              <li><a href='/work/campaign'>Campaigns</a></li>
              <li><a href='/work/wedding'>Wedding</a></li>
              <li><a href='/work/other'>Other</a></li>
            </ul>
          </li>


          <li className='li-header' id='services-nav'><a href='/#photography'>Services</a>
            <ul>
              <li><a href='/#photography'>Photography</a></li>
              <li><a href='/#video'>Video Production</a></li>
              <li><a href='/#live'>Livestreaming</a></li>
            </ul>
          </li>


          <li className='btn-contact-container'><a className='btn' id='btn-contact' href='/#contact'>Contact</a></li>
          {menuCmpt}
        </ul>

        {phoneMenuCmpt}
      </nav>
    );
  }

}

export default Navigation;
