// src/components/ServiceCard.jsx
import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      <img src={icon} alt={`${title} icon`} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
