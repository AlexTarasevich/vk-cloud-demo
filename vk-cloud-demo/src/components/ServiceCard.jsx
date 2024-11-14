import React from 'react';
import '../App';
import '../ServiceCard.css';

function ServiceCard({ title, description, icon }) {
  const imgStyle = {
    width: '100px',  // Установите нужную ширину
    height: 'auto',  // Сохраните пропорции изображения
    marginBottom: '10px'
  };

  return (
    
    <div className="service-card">
      <img src={icon} alt={`${title} icon`} className="service-icon" style={imgStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
