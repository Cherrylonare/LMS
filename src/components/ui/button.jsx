// src/components/ui/button/Button.jsx

import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children || 'Default Button'}
    </button>
  );
};

export default Button;