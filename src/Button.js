import React from 'react';

const Button = (props) => {
  return <button {...props}>{props.texto}</button>;
};

export default Button;
