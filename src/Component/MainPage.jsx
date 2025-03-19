import React from 'react'
// import Navbar1 from './Navbar1'
// import Navbar2 from './Navbar2'
// import Home from './Home'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from './Footer'
import Section5 from './Section5'
// import Section3 from './Section3'

export default function MainPage() {
  return (
    <div>
        {/* <Navbar1/> */}
        {/* <Navbar2/>  */}
        {/* <Home/> */}
        
        <Section1/>
        <Section2/>
        {/* <Section3/> */}
        <Section5/>
        <Footer/>
    </div>
  )
}


// import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import '../Style/Navbar1.css';

// export default function Navbar1() {
//   const [state, setState] = useState([]);
//   const [search, setSearch] = useState("");
//   const [isFocused, setIsFocused] = useState(false);
//   const searchRef = useRef(null);

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   async function fetchdata() {
//     try {
//       const res = await axios.get("http://localhost:9000/category/get");
//       setState(Array.isArray(res.data) ? res.data : []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setState([]);
//     }
//   }

//   function searchdata(e) {
//     setSearch(e.target.value);
//   }

//   const filterproducts = Array.isArray(state)
//     ? state.filter((el) =>
//         el && el.categoryname && el.categoryname.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setIsFocused(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   function handleSelection() {
//     setSearch(""); // Clear the search input
//     setIsFocused(false); // Close the dropdown
//   }

//   return (
//     <div className="navbar-container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand d-flex align-items-center">
//             <img
//               src="https://i.pinimg.com/736x/2f/b2/f5/2fb2f52979e7750bb522e2f73709ad50.jpg"
//               alt="Logo"
//               className="navbar-logo titan-image"
//             />
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto d-flex align-items-center">
//               <li className="nav-item me-3 position-relative" ref={searchRef}>
//                 <input
//                   className="form-control"
//                   type="search"
//                   placeholder="Search for products"
//                   value={search}
//                   onChange={searchdata}
//                   onFocus={() => setIsFocused(true)}
//                   style={{
//                     width: "320px",
//                     borderRadius: "20px",
//                     padding: "10px 20px",
//                     border: "2px solid #9f2089",
//                   }}
//                 />
//                 {isFocused && search && (
//                   <div className="search-results" style={{ position: 'absolute', background: 'white', zIndex: 1 }}>
//                     {filterproducts.length > 0 ? (
//                       filterproducts.map((el) => (
//                         <Link
//                           key={el._id}
//                           to={`/product/${el._id}`}
//                           className="dropdown-item text-dark py-2 px-3"
//                           onClick={handleSelection} // Clear search after selection
//                         >
//                           {el.categoryname}
//                         </Link>
//                       ))
//                     ) : (
//                       <p className="dropdown-item py-2 px-3">No results found</p>
//                     )}
//                   </div>
//                 )}
//               </li>

//               <li className="nav-item dropdown">
//                 <Link
//                   to="#"
//                   className="nav-link dropdown-toggle d-flex flex-column align-items-center"
//                   id="accountDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <i className="far fa-user fs-4"></i>
//                   <span>Account</span>
//                 </Link>
//                 <ul className="dropdown-menu" aria-labelledby="accountDropdown">
//                   <li>
//                     <Link to="/login" className="dropdown-item">
//                       Login
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/signup" className="dropdown-item">
//                       Sign Up
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/wishlist"
//                   className="nav-link d-flex flex-column align-items-center"
//                 >
//                   <i className="far fa-heart fs-4"></i>
//                   <span>Wishlist</span>
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/cart"
//                   className="nav-link d-flex flex-column align-items-center"
//                 >
//                   <i className="fas fa-shopping-cart fs-4"></i>
//                   <span>Cart</span>
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/trackorder"
//                   className="nav-link d-flex flex-column align-items-center"
//                 >
//                   <i className="fab fa-stack-exchange fs-4"></i>
//                   <span>Track Order</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
