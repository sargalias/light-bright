import React from 'react';

const Footer = () => (
  <div>
    <p>
      &copy; Spyros Argalias
      {new Date().getFullYear()}
    </p>
    <p>
      <a
        href="https://github.com/sargalias/light-bright"
        target="_blank"
        rel="noopener noreferrer"
      >
        View code
      </a>
    </p>
  </div>
);

export default Footer;
