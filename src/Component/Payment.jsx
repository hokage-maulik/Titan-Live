// // // import React from 'react'

// // // export default function Payment() {
// // //   return (
// // //     <div>Payment</div>
// // //   )
// // // }

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Payment() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4 px-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg sm:w-11/12 lg:w-1/2">
//         <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Guest Checkout</h2>
//         <form className="space-y-8">
//           {/* Title Selection */}
//           <div className="flex justify-between md:gap-10 mb-6">
//             <label className="flex items-center space-x-3">
//               <input type="radio" name="title" value="Mr." className="mr-2" />
//               <span className="text-lg">Mr.</span>
//             </label>
//             <label className="flex items-center space-x-3">
//               <input type="radio" name="title" value="Ms." className="mr-2" />
//               <span className="text-lg">Ms.</span>
//             </label>
//           </div>

//           {/* Full Name and Email */}
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
//             required
//           />

//           {/* Mobile Number and Address Line */}
//           <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
//             <input
//               type="tel"
//               placeholder="Mobile Number "

//               className="w-25 sm:w-1/2 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Flat/House Number"
//               className="w-25 sm:w-1/2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>

//           {/* Full Address and Landmark */}
//           <input
//             type="text"
//             placeholder="Address (Building Name, Street, Area)"
//             className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Landmark"
//             className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
//           />

//           {/* Pincode, City, State */}
//           <div className="flex gap-6 mb-6">
//             <input
//               type="text"
//               placeholder="Pincode"
//               className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               required
//             />
//             <input
//               type="text"
//               placeholder="City"
//               className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               required
//             /> <br />
//             <input
//               type="text"
//               placeholder="State"
//               className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               required
//             />

//             <input
//               type="text"
//               value="India"
//               className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               readOnly
//             />

//           </div>

//           {/* Submit Button */}
//            <Link to={"/cart"}>
//            <button
//             type="submit"
//             className="w-25  text-dark p-4 bg-light  "
//           >
//             cancel
//           </button>
//            </Link>

//           <Link to={"/Lastpage"}>
//           <button
//             type="submit"
//             className="w-25  text-dark p-4 bg-warning  "
//           >
//             Continue
//           </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
  // State to track the form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  });

  // State to track whether the form is valid
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      // Check if all required fields are filled
      setIsFormValid(Object.values(newFormData).every((field) => field.trim() !== ''));
      return newFormData;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4 px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg sm:w-11/12 lg:w-1/2">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Guest Checkout</h2>
        <form className="space-y-8">
          {/* Title Selection */}
          <div className="flex justify-between md:gap-10 mb-6">
            <label className="flex items-center space-x-3">
              <input type="radio" name="title" value="Mr." className="mr-2" />
              <span className="text-lg">Mr.</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="radio" name="title" value="Ms." className="mr-2" />
              <span className="text-lg">Ms.</span>
            </label>
          </div>

          {/* Full Name and Email */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
            required
            value={formData.email}
            onChange={handleChange}
          />

          {/* Mobile Number and Address Line */}
          <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              className="w-25 sm:w-1/2 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Flat/House Number"
              className="w-25 sm:w-1/2 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Full Address and Landmark */}
          <input
            type="text"
            name="address"
            placeholder="Address (Building Name, Street, Area)"
            className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
            required
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="landmark"
            placeholder="Landmark"
            className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
            value={formData.landmark}
            onChange={handleChange}
          />

          {/* Pincode, City, State */}
          <div className="flex gap-6 mb-6">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              value={formData.pincode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              value={formData.city}
              onChange={handleChange}
            /> <br />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-25 p-4 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              value={formData.state}
              onChange={handleChange}
            />
            <input
              type="text"
              value="India"
              className="w-25 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between gap-4">
            <Link to="/cart">
              <button
                type="button"
                className="w-25 text-dark p-4 bg-light border border-gray-300 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </Link>

            <Link to={isFormValid ? "/Lastpage" : "#"}>
              <button
                type="submit"
                className={`w-25 text-dark p-4 ${isFormValid ? "bg-warning" : "bg-gray-300 cursor-not-allowed"}`}
                disabled={!isFormValid}
              >
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
