import React, { Component } from 'react';

class WorkPage extends Component {
  constructor(props) {
    super(props);

    // Check what sort of work happens here
    const queryParam = this.props.match.params.workType;

    if (queryParam) {
      switch (queryParam.toLowerCase()) {
        case "corporate":
          break;
        case "event":
          break;
        case "wedding":
          break;
        case "gala":
          break;
        case "campaign":
          break;
      }
    }
  }

  render() {
    return (
      <div>
        WorkPage
      </div>
    );
  }

}

export default WorkPage;
