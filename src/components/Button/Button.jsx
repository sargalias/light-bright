import React from 'react';

const Button = ({ text, id }) => (
  <button type="button" id={id} data-testid={id}>
    {text}
  </button>
);

export default Button;
