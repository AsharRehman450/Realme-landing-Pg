import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="section-padding">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Recommended</h3>
            <ul>
              <li><a href="#">realme C75</a></li>
              <li><a href="#">realme 13+ 5G</a></li>
              <li><a href="#">realme Note 60</a></li>
              <li><a href="#">realme C61</a></li>
              <li><a href="#">realme C65</a></li>
              <li><a href="#">realme 12</a></li>
              <li><a href="#">realme 12+ 5G</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Troubleshooting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>About realme</h3>
            <ul>
              <li><a href="#">Our Brand</a></li>
              <li><a href="#">Newsroom</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact realme</h3>
            <ul>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="#">service.pk@realme.com</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>04238048018</h3>
            <p>09:30 - 18:00, MON - SAT</p>
            <p>Excludes Holidays</p> 
            <ul className="social-links">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <hr className="footer-line" />
          <div className="footer-bottom-text">
            <div className="left">
              <span>Pakistan (English / PKR)</span>
              <span>© 2019-2024 realme. All Rights Reserved. </span>
            </div>
            <div className="right">
              <span><a href="#">User Agreement</a></span> | 
              <span><a href="#">Privacy Policy</a></span> | 
              <span><a href="#">Terms of Sales</a></span> | 
              <span><a href="#">Warranty</a></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;