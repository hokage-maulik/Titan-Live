// import React, { useState } from 'react'
// import axios from "axios"
// export default function Signup() {
//     const [state, setState] = useState({
//         username: "",
//         email: "",
//         password: ""
//     })
//     const handelchange = (e) => {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value
//         })
//     }
//     const Handelsubmit = async (e) => {
//         e.preventDefault()
//        try{
//         const data= axios.post("http://localhost:9000/user/signUp", state)
//            alert("signup")
//            setState({username:"",email:"",password:""})
//        }catch(error){
//         console.log(error)
//        }
//     }
//     return (
//         <div>
//             <form onSubmit={Handelsubmit}>
//                 <input type="text" name='username' placeholder='username' value={state.username} onChange={handelchange} />
//                 <input type="email" name='email' placeholder='email' value={state.email} onChange={handelchange} />
//                 <input type="password" name='password' placeholder='password' value={state.password} onChange={handelchange} />

//                 <input type="submit" />

//             </form>
//         </div>
//     )
// }

import React, { useState } from "react";
import axios from "axios";
import "../Style/Signup.css"
export default function Signup() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const Handelsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://titan-backend-zro7.onrender.com/user/signUp", state);
      alert("Signup successful");
      setState({ username: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={Handelsubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handelchange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handelchange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handelchange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
