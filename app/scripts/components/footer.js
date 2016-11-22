import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <footer>
        <ul className="social-footer-links">
          <li className="social"><a target="_blank" href="https://twitter.com/derrickligon">Twitter</a></li>
          <li className="social"><a target="_blank" href="https://dribbble.com/derrickligon">Dribbble</a></li>
          <li className="social"><a target="_blank" href="https://www.instagram.com/derrickligon/">Instagram</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
