// // import axios from 'axios'
// // import React, { useState } from 'react'

// // export default function Login() {
// //     const [state, setState] = useState({
// //         email: "",
// //         password: ""
// //     })

// //     const handelChange = (e) => {
// //         setState({
// //             ...state,
// //             [e.target.name]: e.target.value
// //         })
// //     }

// //     const handelSubmit = async (e) => {
// //         e.preventDefault()
// //         try {
// //             const data = await axios.post("http://localhost:8000/user/login", state)

// //             alert("Login successful")
// //             setState({ email: "", password: "" })
// //             console.log(state)


// //         } catch (error) {
// //             console.log(error)
// //             alert("Login failed")
// //         }

       
// //     }

// //     return (
// //         <div>
// //             <form onSubmit={handelSubmit}>
// //                                 <input type="email" name="email" placeholder="Email" value={state.email} onChange={handelChange} />
// //                 <input type="password" name="password" placeholder="Password" value={state.password} onChange={handelChange} />

// //                 <input type="submit" value="Login" />
// //             </form>
// //         </div>
// //     )
// // }

// import axios from 'axios'
// import React, { useState } from 'react'

// export default function Login() {
//     const [state, setState] = useState({
//         email: "",
//         password: ""
//     })

//     const handleChange = (e) => {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         if (!state.email || !state.password) {
//             alert("Please fill in both email and password.")
//             return
//         }

//         try {
//             const response = await axios.post("http://localhost:8000/user/login", state)
//             alert("Login successful")
//             setState({ email: "", password: "" })
//             console.log(response.data)
//         } catch (error) {
//             console.error("Error details:", error.response ? error.response.data : error.message)
//             alert("Login failed")
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
//                 <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
//                 <input type="submit" value="Login" />
//             </form>
//         </div>
//     )
// }


import axios from "axios";
import React, { useState } from "react";
import '../Style/Login.css'

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post("https://titan-backend-zro7.onrender.com/user/login", state);
      alert("Login successful");
      setState({ email: "", password: "" });
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
