import React, { Component } from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }

  // Output: [width, height, a178, a185, a200, a235, a100]
  getWidthHeight(aspect) {
    if (aspect === 1.78) {
      return [960, 540, 'a178'];

    } else if (aspect === 1.85) {
      return [960, 519, 'a185'];

    } else if (aspect === 2.00) {
      return [960, 480, 'a200'];

    } else if (aspect === 2.35) {
      return [960, 408, 'a235'];

    } else if (aspect === 1.00) {
      return [960, 960, 'a100'];

    } else if (aspect === 1.96) {
      return [960, 490, 'a196'];
    }
  }

  render() {
    let clientDom;
    if (this.props.client) {
      clientDom = <h5 className='text-client'>{this.props.client}</h5>;
    } else {
      clientDom = null;
    }

    let creditDom;

    if (this.props.credits && this.props.credits.length) {
      creditDom = (
        <p className='credit'>INVOLVEMENT: {this.props.credits.join(', ')}</p>
      );
    } else {
      creditDom = null;
    }

    return (
      <div className='video-player-container' data-aos='fade-up'>
        <div className='video-player-text'>
          <h4 className='text-title'>{this.props.title}</h4>
          {clientDom}

          <p className='tagline'>{this.props.tagline}</p>
          <p className='desc'>{this.props.roleDesc}</p>

          {creditDom}

        </div>

        <div className='video-container-parent'>
          {this.props.videoItems.map((video, index) => {
            let dimensions = this.getWidthHeight(video.aspect);
            return (
              <div key={index} className={'video-container ' + dimensions[2]}>
                <iframe
                  src={video.url}
                  width={dimensions[0]}
                  height={dimensions[1]}
                  frameborder="0"
                  allow="fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default VideoPlayer;
