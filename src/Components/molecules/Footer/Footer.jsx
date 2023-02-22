import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
        <div className="footer__text">
          &copy; 2023 V S R MACHINENI & CO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
