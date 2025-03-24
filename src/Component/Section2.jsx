import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Section2.css'
export default function Section2() {
  return (
       <div className='mt-5'>
    <h2>THE BEST WAY TO BUY THE PRODUCTS YOU LOVE</h2>
    <div className="mt-5 d-flex justify-content-center">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw07037e98/images/couple.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Couple"
                />
                <Link to={"/Couple/6784d181285555f5c7f189f2"}><h3>Couple</h3></Link>
              </div>
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb8df3006/images/women.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Women"
                  
                  
                />
                <Link to={"/Women/67839be256f39b6bfe187cbc"}><h3>Women</h3></Link>

              </div>
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw43a80cbb/images/kids.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Kids"
                />
                <Link to={"/Kids/6766b88d23996c44ec3e88d6"}><h3>Kids</h3></Link>

              </div>
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5188cbbe/images/luxe.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Luxe"
                />
                <Link to={"/Luxe/6783a56356f39b6bfe187d5e"}><h3>Luxe</h3></Link>

              </div>
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw73a3bc3e/images/clock.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Clocks"
                />
                <Link to={"/Clocks/6784d92e33e1caa404cd9ebc"}><h3>Clocks</h3></Link>

              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa60efba7/images/Smart_thumb.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Smart"
                />
               <Link to={"/SmartWatches/6783a09556f39b6bfe187d24"}><h3>Smart</h3></Link>


              </div>
              
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0c68edb6/images/men_.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Men"
                />
                <Link to={"/Men/677ba49941c427dd871a1dc6"}><h3>Men</h3></Link>

              </div>
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc8887c27/images/sale_.jpg"
                  className="d-block w-100 w-md-20"
                  alt="Sale"
                />
                <Link to={"/Sale/6783a09556f39b6bfe187d24"}><h3>Sale</h3></Link>

              </div>
              <div className="mx-2">
                <img
                  src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34276b43/images/New_Arrivals_thumb.jpg"
                  className="d-block w-100 w-md-20"
                  alt="New Arrival"
                />
                <Link to={"/NewArrival/678a38d058b00b3cbc0cca4d"}><h3>New Arrival</h3></Link>

              </div>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    </div>
  );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Style/Section2.css'

// export default function Section2() {
//   return (
//     <div className="mt-5">
//       <h2 className="text-center">THE BEST WAY TO BUY THE PRODUCTS YOU LOVE</h2>
//       <div className="mt-5 d-flex justify-content-center">
//         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <div className="d-flex justify-content-center flex-wrap">
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw07037e98/images/couple.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Couple"
//                   />
//                   <Link to={"/Couple/6784d181285555f5c7f189f2"}><h3>Couple</h3></Link>
//                 </div>
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb8df3006/images/women.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Women"
//                   />
//                   <Link to={"/Women/67839be256f39b6bfe187cbc"}><h3>Women</h3></Link>
//                 </div>
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw43a80cbb/images/kids.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Kids"
//                   />
//                   <Link to={"/Kids/6766b88d23996c44ec3e88d6"}><h3>Kids</h3></Link>
//                 </div>
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5188cbbe/images/luxe.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Luxe"
//                   />
//                   <Link to={"/Luxe/6783a56356f39b6bfe187d5e"}><h3>Luxe</h3></Link>
//                 </div>
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw73a3bc3e/images/clock.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Clocks"
//                   />
//                   <Link to={"/Clocks/6784d92e33e1caa404cd9ebc"}><h3>Clocks</h3></Link>
//                 </div>
//               </div>
//             </div>

//             <div className="carousel-item">
//               <div className="d-flex justify-content-center flex-wrap">
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa60efba7/images/Smart_thumb.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Smart"
//                   />
//                   <Link to={"/SmartWatches/6783a09556f39b6bfe187d24"}><h3>Smart</h3></Link>
//                 </div>

//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0c68edb6/images/men_.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Men"
//                   />
//                   <Link to={"/Men/677ba49941c427dd871a1dc6"}><h3>Men</h3></Link>
//                 </div>
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc8887c27/images/sale_.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="Sale"
//                   />
//                   <Link to={"/Sale/6783a09556f39b6bfe187d24"}><h3>Sale</h3></Link>
//                 </div>
//                 <div className="mx-2 category-item">
//                   <img
//                     src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34276b43/images/New_Arrivals_thumb.jpg"
//                     className="d-block w-100 img-fluid"
//                     alt="New Arrival"
//                   />
//                   <Link to={"/NewArrival/678a38d058b00b3cbc0cca4d"}><h3>New Arrival</h3></Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Previous Button */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="prev"
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>

//           {/* Next Button */}
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="next"
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
