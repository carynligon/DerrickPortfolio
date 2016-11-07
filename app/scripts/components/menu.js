import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (`
      <aside>
        <ul className="menu-list">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </aside>
      `);
  }
}

export default Menu;
