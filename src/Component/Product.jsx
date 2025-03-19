// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'
// import "../Style/Product.css"

// export default function Product() {
//     const [product,setProduct] = useState([])
//     const {categoryId}=useParams()

//     useEffect(()=>{
//         axios.get(`http://localhost:9000/product/get/?categoryId=${categoryId}`)
//         .then((res)=>{
//             console.log(res.data)
//             setProduct(res.data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     },[])
    
     


//   return (
//     <div>

//         {
//             product.map((el,i)=>{
//                return <li>
//                    <Link to={`/Productdetail/${el._id}`}> <img src={el.image} alt={el.name} style={{ maxWidth: '200px', height: 'auto' }} />
//                     <p>{el.name}</p>
//                     <p>{el.description}</p>
//                     <p>{el.price}</p></Link>
//                 </li>
//             })
//         }
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../Style/Product.css"; // Ensure this file contains styles for the new UI

export default function Men() {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://titan-backend-zro7.onrender.com/product/get/?categoryId=${categoryId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <div className="product-grid">
      {product.map((el, i) => (
        <div className="product-card" key={i}>
          <Link to={`/Productdetail/${el._id}`} className="product-link">
            <div className="product-image-container">
              <img
                src={el.image}
                alt={el.name}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">{el.name}</h3>
              <p className="product-description">{el.description}</p>
              <p className="product-price">{el.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
