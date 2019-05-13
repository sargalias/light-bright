import React from 'react';

const Button = ({ text, id, handleResetLastColor }) => (
  <button type="button" id={id} data-testid={id} onClick={handleResetLastColor}>
    {text}
  </button>
);

export default Button;
