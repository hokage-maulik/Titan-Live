// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import "../Style/ProductDetail.css"

// export default function ProductDetail() {
//   const [productDetail, setProduct] = useState({});
//   const { productId } = useParams();
//   const navigate=useNavigate()

//   useEffect(() => {
//     axios
//       .get(`http://localhost:9000/product/get/${productId}`)
//       .then((res) => {
        
//         console.log(res.data);
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [productId]);

//   const handelAddtocart= async (e)=>{
//     e.preventDefault();
//     try{
//     const responce=await axios.post(`http://localhost:9000/cart/add`,{
//       productId:productDetail._id,
//       quantity:1,
//       price:productDetail.price,
//     })
//     console.log(responce.data)
//     navigate('/cart')



//     }catch (err){
//       console.log(err)
//     }
//   }

//   return (
//     <div className="product-detail-container">
//        <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <img
//               src={productDetail.image}
//               alt={productDetail.name}
//               className="product-detail-image img-fluid"
//             />
//           </div>

//           <div className="col-md-6 mb-4">
//             <h3 className="product-name">{productDetail.name}</h3>
//             <h4 className="product-description">{productDetail.description}</h4>
//             <h4 className="product-price">Price: {productDetail.price}</h4>

//             <div className="product-actions">
//              {/* <Link to={`/Cart`}> <button className="btn btn-danger btn-lg mb-2">Add to Cart</button></Link> */}
//              <button onClick={handelAddtocart}>add to cart</button>
//               <button className="btn btn-secondary btn-lg">Buy Now</button>
//             </div>
//           </div>
//         </div> 

//         {/* Features/Benefits Section */}
//         <div className="row features">
//           <div className="col-md-4 feature-item">
//             <i className="fas fa-shield-alt feature-icon"></i>
//             <p className="feature-text">24 Months Warranty</p>
//           </div>
//           <div className="col-md-4 feature-item">
//             <i className="fas fa-truck-moving feature-icon"></i>
//             <p className="feature-text">Free Shipping Nationwide</p>
//           </div>
//           <div className="col-md-4 feature-item">
//             <i className="fas fa-undo-alt feature-icon"></i>
//             <p className="feature-text">Easy Returns</p>
//           </div>
//           <div className="col-md-4 feature-item">
//             <i className="fas fa-hand-holding-usd feature-icon"></i>
//             <p className="feature-text">Pay on Delivery</p>
//           </div>
//           <div className="col-md-4 feature-item">
//             <i className="fab fa-servicestack feature-icon"></i>
//             <p className="feature-text">Serviced Across India</p>
//           </div>
//         </div>
//       </div> 
      
//     </div>
//   );
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Style/ProductDetail.css";

export default function ProductDetail() {
  const [productDetail, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://titan-backend-zro7.onrender.com/product/get/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  const handelAddtocart = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://titan-backend-zro7.onrender.com/cart/add`, {
        productId: productDetail._id,
        quantity: 1,
        price: productDetail.price,
      });
      console.log(response.data);
      navigate('/Cart');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-detail-container">
      <div className="container">
        <div className="row product-detail-content">
          <div className="col-md-6 product-image-container">
            <img
              src={productDetail.image}
              alt={productDetail.name}
              className="product-detail-image img-fluid"
            />
          </div>

          <div className="col-md-6 product-info">
            <h3 className="product-name">{productDetail.name}</h3>
            <h4 className="product-price">{productDetail.price}</h4>
            <p className="product-description">{productDetail.description}</p>

            <div className="product-actions">
              <button className="btn add-to-cart-btn" onClick={handelAddtocart}>
                Add to Cart
              </button>
              <button className="btn buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="row product-features">
          <div className="col-md-2 feature-item">
            <i className="fas fa-shield-alt feature-icon"></i>
            <p className="feature-text">24 Months Warranty</p>
          </div>
          <div className="col-md-2 feature-item">
            <i className="fas fa-truck-moving feature-icon"></i>
            <p className="feature-text">Free Shipping</p>
          </div>
          <div className="col-md-2 feature-item">
            <i className="fas fa-undo-alt feature-icon"></i>
            <p className="feature-text">Easy Returns</p>
          </div>
          <div className="col-md-2 feature-item">
            <i className="fas fa-hand-holding-usd feature-icon"></i>
            <p className="feature-text">Pay on Delivery</p>
          </div>
          <div className="col-md-2 feature-item">
            <i className="fab fa-servicestack feature-icon"></i>
            <p className="feature-text">Serviced Across India</p>
          </div>
        </div>

        {/* Additional Product Details */}
        

      </div>
    </div>
  );
}
