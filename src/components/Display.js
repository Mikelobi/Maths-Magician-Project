import React from 'react';
import './Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="display">
        <span>3000</span>
      </div>
    );
  }
}

export default Display;
