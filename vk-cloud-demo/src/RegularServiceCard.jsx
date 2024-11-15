import React from 'react';
import './RegularServiceCard.css';

function RegularServiceCard({ title, description, icon }) {
  return (
    <div className="regular-service-card">
      <div className="icon-container">
        <img src={icon} alt={`${title} icon`} className="service-icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default RegularServiceCard;
