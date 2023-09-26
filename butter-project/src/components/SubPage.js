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
      <div className="header">
        <div className="title">HIGH-END CAR STORE</div>
        <div className="contents">하이엔드 직수입, 구매부터 튜닝까지 고객의 요구에 맞춘 최상의 서비스를 제공합니다.</div>
      </div>
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

      {/* VIEW MORE 링크 추가 */}
      <a href="https://github.com/heeeun1207" target="_blank" rel="noopener noreferrer" className="view-more">
        VIEW MORE
      </a>
    </div>
  );
}

export default SubPage;
