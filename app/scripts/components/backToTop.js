import React from 'react';

class BackToTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="back-to-top">
        <span>^</span>
      </button>
    );
  }
}

export default BackToTop;
