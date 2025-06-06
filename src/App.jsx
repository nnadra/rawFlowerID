import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useCart } from './component/CartContext';
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
import CheckoutDetail from './pages/CheckoutDetail';
import OrderStatus from './pages/OrderStatus';
import Cart from './pages/Cart';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = ['/signin', '/signup'];
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const showCartOn = ['/shop', '/detailproduk/:id'];
  return (
    <div className="bg-[#FFF5E3] min-h-screen overflow-hidden">
      
      <Banner />
       <Toaster position="bottom-center" reverseOrder={false} />

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/detailproduk/:id" element={<DetailProduct />} />
        <Route path="/detailBlog/:id" element={<DetailBlog />} />
        <Route path="/customBouquet" element={<Custom/>} />
        <Route path="/checkout" element={<CheckoutDetail/>} />
        <Route path="/status" element={<OrderStatus/>} />
        <Route path="/detailBlog/:id" element={<DetailBlog/>} />
        <Route path="/" element={<Home />} />
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
