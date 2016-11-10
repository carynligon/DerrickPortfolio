import React from 'react';

class Menu extends React.Component {
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
      <div className="menu-wrapper">
        <div onClick={this.hamburgerClick.bind(this)} id="nav-icon4" className={openClassName}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <aside className={openClassName}>
          <ul className="menu=list">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </aside>
      </div>
      );
  }
}

export default Menu;
