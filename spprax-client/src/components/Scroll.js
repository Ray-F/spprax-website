import React, { Component } from 'react';

class Scroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", (event) => {
      this.handleScroll();
    });
  }

  handleScroll() {
    if (window.scrollY > 2000) {
      this.setState({visible: true});
    } else {
      this.setState({visible: false});
    }
  }

  handleButtonClick(event) {
    window.scrollTo(0, 0);
    console.log("Scrolled!");
  }

  render() {
    let classes;

    if (this.state.visible) {
      classes = '';
    } else {
      classes = 'hide';
    }

    return (
      <span className={classes} onClick={this.handleButtonClick}>
        <i
          className='far fa-caret-square-up'
          id='scroll-up-btn'
        ></i>
      </span>
    );
  }

}

export default Scroll;
