import React, { useState } from 'react';
import './SubPage.css';

// 이미지 import
import image5 from '../assets/images/image5.png';

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

      <img src={image5} alt="Image5" className='image5' />
    </div>
  );
}

export default SubPage;
