// // // import React, { useEffect, useState } from 'react'

// // // import axios from 'axios';

// // // export default function Cart() {

// // //   const [cart, setCart] = useState([]);

// // //   useEffect(() => {
// // //     axios.get(`http://localhost:9000/cart/get`)
// // //       .then((res) => {
// // //         console.log(res.data)
// // //         setCart(res.data)
// // //       })
// // //       .catch((err) => {
// // //         console.log(err)
// // //       })
// // //   }, [])



// // //   return (
// // //     <div>
// // //       {
// // //         cart.map((el, i) => {
// // //           return <li> {el.productId.name}
// // //           <img src={el.productId.image} alt="" />


// // //           </li>
// // //         })
// // //       }

// // //     </div>
// // //   )
// // // }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import '../Style/Cart.css'
// import { Link } from "react-router-dom";

// export default function Cart() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = () => {
//     axios
//       .get(`http://localhost:9000/cart/get`)
//       .then((res) => {
//         console.log(res.data);
//         setCart(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const incrementQuantity = (id) => {
//     axios
//       .patch(`http://localhost:9000/cart/increment/${id}`)
//       .then(() => fetchCart())
//       .catch((err) => console.error("Error incrementing quantity:", err));
//   };

//   const decrementQuantity = (id) => {
//     axios
//       .patch(`http://localhost:9000/cart/decrement/${id}`)
//       .then(() => fetchCart())
//       .catch((err) => console.error("Error decrementing quantity:", err));
//   };

//   const deleteItem = (id) => {
//     axios
//       .delete(`http://localhost:9000/cart/delete/${id}`)
//       .then(() => fetchCart())
//       .catch((err) => console.error("Error deleting item:", err));
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => {
//       // Extract and sanitize price string
//       const rawPrice = item.productId.price || "0";
//       const sanitizedPrice = rawPrice.replace(/[^0-9.]/g, ""); // Remove non-numeric characters
//       const price = parseFloat(sanitizedPrice) || 0; // Convert to a number
  
//       return total + item.quantity * price;
//     }, 0);
//   };
  

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Shopping Cart</h1>
//       {cart.length > 0 ? (
//         <>
//           <div className="cart-items">
//             {cart.map((el) => (
//               <div className="cart-item" key={el._id}>
//                 <img
//                   src={el.productId.image}
//                   alt={el.productId.name}
//                   className="cart-item-image"
//                 />
//                 <div className="cart-item-details">
//                   <h3>{el.productId.name}</h3>
//                   <p>Price:{el.productId.price}</p>
//                   <p>Quantity: {el.quantity}</p>
//                   <div className="cart-item-actions">
//                     <button onClick={() => decrementQuantity(el._id)}>-</button>
//                     <button onClick={() => incrementQuantity(el._id)}>+</button>
//                     <button onClick={() => deleteItem(el._id)}>Delete</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-total">
//             <h2>Total Price: {calculateTotalPrice().toFixed(2)}</h2>
//           </div>
//         </>
//       ) : (
//         <p className="cart-empty">Your cart is empty!</p>
//       )}
//          <Link to={"/payment"}><button>How to payment</button></Link>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Style/Cart.css';
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios
      .get(`https://titan-backend-zro7.onrender.com/cart/get`)
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const incrementQuantity = (id) => {
    axios
      .patch(`https://titan-backend-zro7.onrender.com/cart/increment/${id}`)
      .then(() => fetchCart())
      .catch((err) => console.error("Error incrementing quantity:", err));
  };

  const decrementQuantity = (id) => {
    axios
      .patch(`https://titan-backend-zro7.onrender.com/cart/decrement/${id}`)
      .then(() => fetchCart())
      .catch((err) => console.error("Error decrementing quantity:", err));
  };

  const deleteItem = (id) => {
    axios
      .delete(`https://titan-backend-zro7.onrender.com/cart/delete/${id}`)
      .then(() => fetchCart())
      .catch((err) => console.error("Error deleting item:", err));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const rawPrice = item.productId.price || "0";
      const sanitizedPrice = rawPrice.replace(/[^0-9.]/g, "");
      const price = parseFloat(sanitizedPrice) || 0;

      return total + item.quantity * price;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map((el) => (
              <div className="cart-item" key={el._id}>
                <img
                  src={el.productId.image}
                  alt={el.productId.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{el.productId.name || "Unnamed Product"}</h3>
                  <p>Price: ${el.productId.price || "N/A"}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(el._id)}>-</button>
                    <span>{el.quantity}</span>
                    <button onClick={() => incrementQuantity(el._id)}>+</button>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => deleteItem(el._id)} className="delete-btn">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="summary-item">
              <p>Total Price:</p>
              <span>₹ {calculateTotalPrice().toFixed(2)}</span>
            </div>
            <Link to="/payment">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <p className="cart-empty">Your cart is empty!</p>
      )}
    </div>
  );
}
