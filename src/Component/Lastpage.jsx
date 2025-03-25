// // import React from 'react'

// // export default function Lastpage() {
// //   return (
// //     <div>Lastpage</div>
// //   )
// // }


// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Lastpage() {
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-4 px-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         {/* Titan Watches Logo (You can use a logo or an icon here) */}
//         <div className="flex justify-center mb-8">
//           <img 
//             src="https://i.pinimg.com/736x/d3/ca/44/d3ca44ad81a24fcbe71b4e2d78e8d41b.jpg" 
//             alt="Titan Watches Logo" 
//             className="w-32 h-auto"
//           />
//         </div>

//         {/* Thank You Message */}
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
//           Thank You for Your Purchase!
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-6">
//           Your order has been successfully placed, and we are processing it with love and care.
//         </p>

//         {/* Order Details */}
//         <div className="bg-yellow-100 p-4 rounded-lg mb-6">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h3>
//           <p className="text-gray-600 mb-1">Order Number: #123456789</p>
//           {/* <p className="text-gray-600 mb-1">Total Amount: ₹2999.00</p> */}
//           <p className="text-gray-600 mb-1">Expected Delivery: 5-7 Business Days</p>
//         </div>

//         {/* Call to Action Button */}
//         <div className="flex justify-center">
//           <Link to={"/"}>
//           <button className="w-full bg-yellow-500 text-black p-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
//            Continue Shopping
//           </button>
//           </Link>
//         </div>

//         {/* Footer Message */}
//         <p className="text-center text-sm text-gray-500 mt-8">
//           Thank you for choosing Titan! We hope you enjoy your new purchase.
//         </p>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Lastpage.css'
export default function Lastpage() {
  return (
    <div className="lastpage-container">
      <div className="content-container">
        {/* Titan Watches Logo */}
        <div className="logo-container">
          <img
            src="https://i.pinimg.com/736x/d3/ca/44/d3ca44ad81a24fcbe71b4e2d78e8d41b.jpg"
            alt="Titan Watches Logo"
            className="logo-image"
          />
        </div>

        {/* Thank You Message */}
        <h2 className="thank-you-text">Thank You for Your Purchase!</h2>
        <p className="order-confirmation-text">
          Your order has been successfully placed, and we are processing it with love and care.
        </p>

        {/* Order Details */}
        <div className="order-summary">
          <h3 className="order-summary-title">Order Summary</h3>
          <p className="order-number">Order Number: #123456789</p>
          <p className="delivery-time">Expected Delivery: 5-7 Business Days</p>
        </div>

        {/* Call to Action Button */}
        <div className="cta-button-container">
          <Link to={"/"}>
            <button className="cta-button">Continue Shopping</button>
          </Link>
        </div>

        {/* Footer Message */}
        <p className="footer-message">
          Thank you for choosing Titan! We hope you enjoy your new purchase.
        </p>
      </div>
    </div>
  );
}
