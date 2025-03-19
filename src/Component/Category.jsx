
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
    const [category,setCategory] = useState([])
    // const {_id}=useParams()

    useEffect(()=>{
        axios.get(`https://titan-backend-zro7.onrender.com/category/get`)
        .then((res)=>{
            console.log(res.data)
            setCategory(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


  return (
    <div>
        <h2>Category List</h2>

        {
            category.map((el,i)=>{
               return <li>
                    
                    <Link to={`/product/${el._id}`}>
                    <img src={el.categoryimage} alt={el.name} style={{ maxWidth: '200px', height: 'auto' }} />
                    <p>{el.categoryname}</p>
                    </Link>
                </li>
            })
        }
    </div>
  )
}

