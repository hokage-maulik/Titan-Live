

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Section5() {
//     const [category,setCategory] = useState([])
//     // const {_id}=useParams()

//     useEffect(()=>{
//         axios.get(`http://localhost:9000/category/get`)
//         .then((res)=>{
//             console.log(res.data)
//             setCategory(res.data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     },[])


//   return (
//     <div className='mt-5'>
//         <h2>Shop By Brands</h2>

//         {
//             category.map((el,i)=>{
//                return <li>
                    
//                     <Link to={`/product/${el._id}`}>
//                     <img src={el.categoryimage} alt={el.name} />
//                     <p>{el.categoryname}</p>
//                     </Link>
//                 </li>
//             })
//         }
//     </div>
//   )
// }
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Section5() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('https://titan-backend-zro7.onrender.com/category/get')
      .then((res) => {
        console.log(res.data)
        setCategory(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='mt-5 container'>
      <h2 className="text-center mb-4">Shop By Brands</h2>

      {/* Row of categories */}
      <div className="row">
        {category.map((el, i) => {
          return (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm border-0">
                <Link to={`/product/${el._id}`} className="text-decoration-none">
                  <img 
                    src={el.categoryimage} 
                    alt={el.name} 
                    className="card-img-top rounded-3" 
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    {/* <h5 className="card-title text-dark">{el.categoryname}</h5> */}
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}



