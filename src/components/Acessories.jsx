import React from 'react';
import './Acessories.css';

const Acessories = () => {
  return (
    <div className="section-padding1">
      <h1 className="heading1" id='smrt2'>Accessories</h1>

      <div className="card-grid">
        <div className="card-container">
          <div className="card-content">
            <span className="card-new">NEW</span>
            <h3 className="card-title">realme Buds T110</h3>
            <p className="card-description">Listen in Full Color</p>
            <p className="card-price">Rs. 4,999</p> 

          </div>
          <div className="card-image">
            <img src="/public/acc1.img" alt="Accessory 1" className="card-img" />
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <span className="card-new">NEW</span>
            <h3 className="card-title">realme Buds  Q</h3>
            <p className="card-description">Music Never Ends</p>
            <p className="card-price">Rs. 7,999</p> 

          </div>
          <div className="card-image">
            <img src="/public/acc2.img" alt="Accessory 2" className="card-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acessories;
