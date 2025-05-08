import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import Blog from './pages/Blog'
import ShopPage from './pages/ShopPage'
import DetailProduct from './pages/DetailProduct'
import BlogPage from './pages/BlogPage'
import DetailBlog from './pages/DetailBlog'


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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />

        <Route path="/detailBlog" element={<DetailBlog />} />
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
