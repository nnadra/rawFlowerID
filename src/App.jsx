import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './component/common/Navbar'
import Banner from './component/common/Banner'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import BlogPage from './pages/BlogPage'
import ShopPage from './pages/ShopPage'
import DetailProduct from './pages/DetailProduct'


const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/signin', '/signup'];

  return (
    <div className="bg-[#FFF5E3] min-h-screen">
      <Banner></Banner>
      {/* Navbar tampil kecuali di route tertentu */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      {/* Route */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detailproduk" element={<DetailProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
