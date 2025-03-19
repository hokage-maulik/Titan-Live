// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'

// // export default function Men() {
// //     const [category,setCategory] = useState([])
// //     const {Link,categoryId}=useParams()

// //     useEffect(()=>{
// //         axios.get(`http://localhost:9000/category/get/${categoryId}`)
// //         .then((res)=>{
// //             console.log(res.data)
// //             setCategory(res.data)
// //         })
// //         .catch((err)=>{
// //             console.log(err)
// //         })
// //     },[])
// //   return (
// //     <div>Men
// //         {
// //             category.map((el,i)=>{
// //                return <li>

// //                     <Link to={`/product/${el._id}`}>
// //                     <img src={el.categoryimage} alt={el.name} style={{ maxWidth: '200px', height: 'auto' }} />
// //                     <p>{el.categoryname}</p>
// //                     </Link>
// //                 </li>
// //             })
// //         }
// //     </div>
// //   )
// // }

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// export default function Men() {
//     const [category, setCategory] = useState({});
//     const { categoryId } = useParams();

//     useEffect(() => {
//         axios
//             .get(`http://localhost:9000/category/get/${categoryId}`)
//             .then((res) => {
//                 console.log(res.data);
//                 setCategory(res.data);
//             })
//             .catch((err) => {
//                 console.log("Error fetching category:", err);
//             });
//     }, [categoryId]);

//     return (
//         <div>
//             <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw05cf6619/images/Category%20Banners/Espot_new10.jpeg" alt="" />
//             {category ? (
//                 <>
//                     <Link to={`/product/${category._id}`}>
//                         <img
//                             src={category.categoryimage}
//                             alt={category.categoryname}
//                             style={{ maxWidth: '200px', height: 'auto' }}
//                         />
//                     </Link>
//                 </>
//             ) : (
//                 <p>Loading category details...</p>
//             )}
//         </div>
//     );
// }

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import "../Style/Men.css";

// export default function Men() {
//   const [category, setCategory] = useState({});
//   const { categoryId } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:9000/category/get/${categoryId}`)
//       .then((res) => {
//         console.log(res.data);
//         setCategory(res.data);
//       })
//       .catch((err) => {
//         console.log("Error fetching category:", err);
//       });
//   }, [categoryId]);

//   return (
//     <div className="men-container">
//       {/* Full-Width Banner */}
//       <div className="banner-container">
//         <img
//           className="banner-image"
//           src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw05cf6619/images/Category%20Banners/Espot_new10.jpeg"
//           alt="Men's Collection Banner"
//         />
//       </div>

//       {/* Category Card */}
//       {category ? (
//         <div className="category-card">
//           <Link to={`/product/${category._id}`} className="category-link">
//             <img
//               className="category-image"
//               src={category.categoryimage}
//               alt={category.categoryname}
//             />
//             {/* <h3 className="category-name">{category.categoryname}</h3> */}
//           </Link>
//         </div>
//       ) : (
//         <p className="loading-text">Loading category details...</p>
//       )}
//     </div>
//   );
// }



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../Style/Men.css";

export default function Men() {
    const [product, setCategory] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        axios
            //   .get(`http://localhost:9000/category/get/${categoryId}`)
            .get(`https://titan-backend-zro7.onrender.com/product/get/?categoryId=${categoryId}`)
            .then((res) => {
                console.log(res.data);
                setCategory(res.data);
            })
            .catch((err) => {
                console.log("Error fetching category:", err);
            });
    }, [categoryId]);

    return (
        <div className="men-container">
            {/* Full-Width Banner */}
            <div className="banner-container">
                <img
                    className="banner-image"
                    src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw05cf6619/images/Category%20Banners/Espot_new10.jpeg"
                    alt="Men's Collection Banner"
                />
            </div>
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
        </div>
    );
}
