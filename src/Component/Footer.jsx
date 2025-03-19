// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-4">
//       <div className="container">
//         <div className="row">
//           {/* Column 1: About Titan */}
//           <div className="col-12 col-md-3 mb-4">
//             <h5>Titan Watches</h5>
//             <ul className="list-unstyled">
//               <li><a href="/" className="text-light">About Us</a></li>
//               <li><a href="/" className="text-light">Careers</a></li>
//               <li><a href="/" className="text-light">Store Locator</a></li>
//               <li><a href="/" className="text-light">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Column 2: Customer Care */}
//           <div className="col-12 col-md-3 mb-4">
//             <h5>Customer Care</h5>
//             <ul className="list-unstyled">
//               <li><a href="/" className="text-light">FAQ</a></li>
//               <li><a href="/" className="text-light">Shipping & Returns</a></li>
//               <li><a href="/" className="text-light">Order Status</a></li>
//               <li><a href="/" className="text-light">Payment Methods</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Follow Us */}
//           <div className="col-12 col-md-3 mb-4">
//             <h5>Follow Us</h5>
//             <ul className="list-unstyled">
//               <li><a href="https://www.facebook.com/Titan" target="_blank" rel="noopener noreferrer" className="text-light">Facebook</a></li>
//               <li><a href="https://www.instagram.com/Titan" target="_blank" rel="noopener noreferrer" className="text-light">Instagram</a></li>
//               <li><a href="https://twitter.com/Titan" target="_blank" rel="noopener noreferrer" className="text-light">Twitter</a></li>
//               <li><a href="https://www.linkedin.com/company/Titan" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a></li>
//             </ul>
//           </div>

//           {/* Column 4: Newsletter Signup */}
//           <div className="col-12 col-md-3 mb-4">
//             <h5>Newsletter</h5>
//             <p>Sign up for the latest news, offers, and promotions.</p>
//             <form>
//               <div className="mb-3">
//                 <input type="email" className="form-control" placeholder="Enter your email" required />
//               </div>
//               <button type="submit" className="btn btn-light">Subscribe</button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="row pt-4 mt-4 border-top">
//           <div className="col-12 text-center">
//             <p className="mb-0">© 2024 Titan Watches. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import "../Style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>COLLECTIONS</h4>
          <ul>
            <li><a href="https://www.titan.co.in/titan-automatics.html">Titan Automatics</a></li>
            <li><a href="https://www.titan.co.in/police-batman.html">Police Batman</a></li>
            <li><a href="https://www.titan.co.in/titan-stellar.html">Stellar</a></li>
            <li><a href="https://www.titan.co.in/raga-power-pearls.html?lang=en_IN">Raga Power Pearls</a></li>
            <li><a href="https://www.titan.co.in/nebula-jewels?lang=en_IN">Nebula Jewels</a></li>
            <li><a href="https://www.titan.co.in/titan-grandmaster?lang=en_IN">Grandmaster</a></li>
            <li><a href="https://www.titan.co.in/titan-maritime?lang=en_IN">Maritime</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li><a href="https://www.titan.co.in/content/payment-options.html?lang=en_IN">Payment Options</a></li>
            <li><a href="/track-order">Track Order</a></li>
            <li><a href="https://www.titanencircle.com/">Encircle Program</a></li>
            <li><a href="https://www.titan.co.in/store-locator?lang=en_IN">Find Titan World Stores</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT US</h4>
          <ul>
            <li><a href="tel:18002660123">1800-266-0123</a></li>
            <li><a href="mailto:customercare@titan.co.in">customercare@titan.co.in</a></li>
            <li><a href="/help-contact">Help & Contact</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>ABOUT TITAN</h4>
          <ul>
            <li><a href="https://www.titan.co.in/brand-protection.html?lang=en_IN">Brand Protection</a></li>
            <li><a href="https://www.titancompany.in/">Corporate</a></li>
            <li><a href="https://careers.titan.co.in/Recruiting/candidates/candidates_home.aspx?rms=titan">Careers</a></li>
            <li><a href="https://www.titan.co.in/blog.html?rms=titan">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Download Titan World App</h4>
          <div className="app-links">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="/images/appstore.png" alt="App Store" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="/images/playstore.png" alt="Google Play" />
            </a>
          </div>
          <h4>Follow Us With</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Titan Company Limited. All Rights Reserved.</p>
        <p>
          <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a> | <a href="/wearable">Wearable Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
