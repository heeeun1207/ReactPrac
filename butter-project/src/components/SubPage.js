import React, { useState } from 'react';
import './SubPage.css';

function SubPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="subpage-container">
      {["High-end Car", "MAINTENANCE", "TUNING CAR", "BODY PAINT"].map((item, index) => (
        <div
          key={index}
          className={`subpage-item ${index === selectedItem ? 'selected' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default SubPage;
