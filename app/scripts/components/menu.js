import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    if (window.innerWidth <= 600) {
      this.state= {showMenu: false, openClass: false, smallScreen: true};
    } else {
      this.state= {showMenu: false, openClass: false, smallScreen: false};
    }
  }
  hamburgerClick(e) {
    this.setState({openClass: !this.state.openClass});
  }
  handleResize() {
    if (window.innerWidth <= 600) {
      this.setState({smallScreen: true});
    } else {
      this.setState({smallScreen: false});
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
  }
  render() {
    let openClassName;
    let menu;
    if (this.state.openClass) {
      openClassName = 'open'
    }
    if (this.state.smallScreen) {
      menu = (<div><div onClick={this.hamburgerClick.bind(this)} id="nav-icon4" className={openClassName}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside className={openClassName}>
        <ul className="menu=list">
          <li>Link -</li>
          <li>Link -</li>
          <li>Link -</li>
          <li>Link -</li>
          <li>Link -</li>
        </ul>
      </aside></div>)
    } else {
      menu = (<ul className="menu-list large-screen-nav">
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>)
    }
    return (
      <div className="menu-wrapper">
        {menu}
      </div>
      );
  }
}

export default Menu;
