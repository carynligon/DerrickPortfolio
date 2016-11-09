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
      <aside className={openClassName}>
        <div onClick={this.hamburgerClick.bind(this)} id="nav-icon4" className={openClassName}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu=list">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </aside>
      );
  }
}

export default Menu;
