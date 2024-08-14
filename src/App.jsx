import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import 'animate.css/animate.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Regions from './Pages/Regions';
import FAQ from './Pages/FAQ';
import AboutUs from './Pages/AboutUs';
import Profile from './Pages/Profile';
import TopButton from './Components/TopButton';
import Portfolio from './Pages/Portfolio';
// Nested routing
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Recipes from './Pages/Recipes';
import Comments from './Pages/Comments';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Portfolio/" element={<Portfolio/>}>
        {/* Nested routing */}
          <Route path='users' element={<Users/>}/>
          <Route path="Posts" element={<Posts />} />
          <Route path="Recipes" element={<Recipes />} />
          <Route path="Comments" element={<Comments />} />
          <Route path="Product" element={<Product/>} />
       </Route>
      </Routes>
      <TopButton/>
      <Footer/>
    </div>
  );
}

export default App;
