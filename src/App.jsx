import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import NavbarLogin from './component/NavbarLogin'
import Banner from './component/Banner'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Blog from './pages/Blog'
import ShopPage from './pages/ShopPage'
import DetailProduct from './pages/DetailProduct'
import BlogPage from './pages/BlogPage'
import DetailBlog from './pages/DetailBlog'
import Cart from './component/Cart'

// fetch('http://127.0.0.1:8000/', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });


const AppContent = () => {
  const location = useLocation()
  const hideNavbarRoutes = ['/signin', '/signup']
  const user = JSON.parse(localStorage.getItem("user") || "null")

  return (
    <div className="bg-[#FFF5E3] min-h-screen">
      <Banner />

      {/* Navbar logic */}
      {!hideNavbarRoutes.includes(location.pathname) && (
        location.pathname === '/' ? <Navbar /> : (user ? <NavbarLogin /> : <Navbar />)
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
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
