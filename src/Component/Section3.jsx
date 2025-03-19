// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'

// export default function Section3() {
//     const [product,setProduct] = useState([])
//     const {categoryId}=useParams()

//     useEffect(()=>{
//         axios.get(`http://localhost:9000/product/get`)
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
//         <h1>Product List</h1>

        
            
            
//                    <Link to={`/Productdetail/${product._id}`}>edv<img src={product.image} alt={product.name} style={{ maxWidth: '200px', height: 'auto' }} />
//                     <p>{product.name}</p>
//                     {/* <p>{el.description}</p> */}
//                     {/* <p>{el.price}</p> */}
//                     </Link>
                
        
//     </div>
//   )
// }
