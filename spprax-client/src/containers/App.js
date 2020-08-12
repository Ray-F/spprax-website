import React, { Component } from 'react';
import MainRouter from './MainRouter';

import 'normalize.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

import '../styles/style.scss';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AOS.init({
      duration : 1000
    })
  }
  render() {
    return (
      <MainRouter />
    );
  }

}

export default App;
