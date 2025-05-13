import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;