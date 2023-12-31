import React, { Component } from 'react';

class Clients extends Component {
  constructor(props) {
    super(props);

    this.brands = [
      'aucklandcouncil.png',
      'foodstuffs-nz.png',
      'ymca.png',
      'rsm.png',
      'aucklandeye.png',
      'lynfield_college.jpeg',
      'airsorted.png',
      'newworld.png',
      'saint_kentigern.png',

      'apeathletics.png',
      'diabetes_aotearoa.png',
      'gbhq.png',
      'slipstream.png',
      'strongman.png',
    ]

    for (let i = 0; i < this.brands.length; i++) {
      this.brands[i] = process.env.PUBLIC_URL + '/static/client_logos/' + this.brands[i];
    }
  }

  render() {
    return (
      <div id='clients' className='section'>
        <div className='content'>
          <h2>People we've worked with</h2>

          <ul>
            {this.brands.map((url, index) => {
              return (
                <li key={index} data-aos='fade-up'>
                  <img src={url} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

}

export default Clients;
