import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar1 from './Component/Navbar1'
import Navbar2 from './Component/Navbar2'


// import Category from './Component/Category';
import Product from './Component/Product';
import ProductDetail from './Component/ProductDetail';
import MainPage from './Component/MainPage';
import Section5 from './Component/Section5';
import Cart from './Component/Cart';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Payment from './Component/Payment';
import Men from './Catrgories/Men';
import Women from './Catrgories/Women';
import SmartWatches from './Catrgories/SmartWatches';
import PremiumWatches from './Catrgories/Premiumwatches';
import Watches from './Catrgories/Watches';
import InternatonalBrands from './Catrgories/InternatonalBrands';
import Gifting from './Catrgories/Gifting';
import Kids from './Catrgories/Kids';
import Luxe from './Catrgories/Luxe';
import Couple from './Catrgories/Couple';
import Clocks from './Catrgories/Clocks';
import Sale from './Catrgories/Sale';
import Smart from './Catrgories/Smart';
import NewArrival from './Catrgories/NewArrival';
import Lastpage from './Component/Lastpage';

function App() {
  return (
    <div className="App">

       <Navbar1/>
       <Navbar2/>
      <Routes>
        <Route path='/' element={<MainPage />} />
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>


        {/* <Route path='/Category' element={<Category />} /> */}

        <Route path='/product/:categoryId' element={<Product />} />
        <Route path='/Productdetail/:productId' element={<ProductDetail />} />

        <Route path='/Section5' element={<Section5 />} />
        <Route path="/Men/:categoryId" element={<Men />} />
        <Route path="/women/:categoryId" element={<Women />} />
        <Route path="/SmartWatches/:categoryId" element={<SmartWatches />} />
        <Route path="/PremiumWatches/:categoryId" element={<PremiumWatches />} />
        <Route path="/Watches/:categoryId" element={<Watches />} />
        <Route path="/InternationalBrands/:categoryId" element={<InternatonalBrands />} />
        <Route path="/Gifting/:categoryId" element={<Gifting />} />
        <Route path="/kids/:categoryId" element={<Kids />} />
        <Route path="/Luxe/:categoryId" element={<Luxe />} />
        <Route path="/Couple/:categoryId" element={<Couple />} />
        <Route path="/Clocks/:categoryId" element={<Clocks />} />
        <Route path="/Sale/:categoryId" element={<Sale />} />
        <Route path="/SmartWatches/:categoryId" element={<Smart />} />
        <Route path="/NewArrival/:categoryId" element={<NewArrival />} />














        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/Lastpage'element={<Lastpage/>}/>




        





      </Routes>
      


    </div>
  );
}

export default App;
