import React from 'react';
import './LargeServiceCard.css';

function LargeServiceCard({ title, description, icon }) {
  return (
    <div className="large-service-card">
      <div className="icon-container">
        <img src={icon} alt={`${title} icon`} className="service-icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default LargeServiceCard;
