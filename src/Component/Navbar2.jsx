// import React from 'react'
// import { Link } from 'react-router-dom'
// import "../Style/Navbar2.css"

// export default function Navbar2() {
//   return (
//     <div>
//         <ul>
//             <Link to={"/Men"}><li>Men</li></Link>
//             <Link to={"/Men"}><li>Women</li></Link>
//             <Link to={"/Men"}><li>Smart Watches</li></Link>
//             <Link to={"/Men"}><li>Premium Watches</li></Link>
//             <Link to={"/Men"}><li>Wagtches</li></Link>
//             <Link to={"/Men"}><li>Intrrbational Brands</li></Link>
//             <Link to={"/Men"}><li>Gifting</li></Link>

            
//         </ul>
//     </div>
//   )
// }


import React from 'react';
import { Link } from 'react-router-dom';
// import "../Style/Navbar2.css";

export default function Navbar2() {
  return (
    <div className="navbar2-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <Link to="/Men/677ba49941c427dd871a1dc6" className="nav-link">Men</Link>

              </li>
              <li className="nav-item">
                <Link to="/Women/67839be256f39b6bfe187cbc" className="nav-link">Women</Link>
              </li>
              <li className="nav-item">
                <Link to="/SmartWatches/6783a09556f39b6bfe187d24" className="nav-link">Smart Watches</Link>
              </li>
              <li className="nav-item">
                <Link to="/PremiumWatches/6783a56356f39b6bfe187d5e" className="nav-link">Premium Watches</Link>
              </li>
              <li className="nav-item">
                <Link to="/Watches/6783abdb56f39b6bfe187deb" className="nav-link">Watches</Link>
              </li>
              <li className="nav-item">
                <Link to="/InternationalBrands/6783b05756f39b6bfe187e1f" className="nav-link">International Brands</Link>
              </li>
              <li className="nav-item">
                <Link to="/Gifting/6783b49456f39b6bfe187e59" className="nav-link">Gifting</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

