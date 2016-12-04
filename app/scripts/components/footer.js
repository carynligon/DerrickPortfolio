import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <footer>
        <ul className="social-footer-links">
          <li className="social"><a target="_blank" href="https://twitter.com/derrickligon"><img src="/assets/images/icons/twitter-logo.png"/></a></li>
          <li className="social"><a target="_blank" href="https://dribbble.com/derrickligon"><img src="/assets/images/icons/dribbble-logo.png"/></a></li>
          <li className="social"><a target="_blank" href="https://www.instagram.com/derrickligon/"><img src="/assets/images/icons/instagram-logo.png"/></a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
