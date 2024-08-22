import React from 'react';
import './footer.css';
import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br />
          Made with ❤️ by <a href="https://www.linkedin.com/in/shivam-jaiswal-a28645257/">Shivam Jaiswal</a>. Crafting the future of learning.
        </p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/shivam-jaiswal-a28645257/" aria-label="LinkedIn"><CiLinkedin /></a>
          <a href="https://www.instagram.com/shivam_jaiswal105/" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://x.com/jaiswal_sh89842" aria-label="Twitter"><FaXTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
