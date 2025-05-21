import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import NavbarLogin from './component/NavbarLogin';
import Banner from './component/Banner';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ShopPage from './pages/ShopPage';
import DetailProduct from './pages/DetailProduct';
import BlogPage from './pages/BlogPage';
import DetailBlog from './pages/DetailBlog';
import Custom from './pages/Custom';
import { useCart } from './component/CartContext';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = ['/signin', '/signup'];
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const { isCartOpen } = useCart();

  const showCartOn = ['/shop', '/detailproduk/:id'];
  const canShowCart = showCartOn.some(p => location.pathname.startsWith(p.split('/:')[0]));

  return (
    <div className="bg-[#FFF5E3] min-h-screen overflow-hidden">
      <Banner />

      {!hideNavbar.includes(location.pathname) && (
        location.pathname === '/'
          ? <Navbar />
          : (user ? <NavbarLogin /> : <Navbar />)
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detailBlog" element={<DetailBlog />} />
        <Route path="/detailproduk/:id" element={<DetailProduct />} />
        <Route path="/customBouquet" element={<Custom />} />
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
