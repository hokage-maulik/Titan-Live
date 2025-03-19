// import React from 'react'

// export default function Couple() {
//   return (
//     <div>Couple</div>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../Style/Men.css";

export default function Couple() {
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
                    src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw776839ee/images/PLP/plp_Couples_d.jpg"
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
