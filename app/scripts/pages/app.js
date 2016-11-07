import React from 'react';

import Menu from '../components/menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {showMenu: false, openClass: false};
  }
  hamburgerClick(e) {
    this.setState({openClass: !this.state.openClass});
  }
  render() {
    let openClassName;
    if (this.state.openClass) {
      openClassName = 'open'
    }
    return (
      <div onClick={this.hamburgerClick.bind(this)} id="nav-icon4" className={openClassName}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      );
  }
}

export default App;
