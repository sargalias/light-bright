import React from 'react';

const Button = ({ text, id, handleClick }) => (
  <button type="button" id={id} data-testid={id} onClick={handleClick}>
    {text}
  </button>
);

export default Button;
