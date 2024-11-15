import React from 'react';
import '../Button.css';

const Button = ({ text }) => {
  return (
    <div className="button-container">
      <button className="show-more-button">{text}</button>
    </div>
  );
};

export default Button;
