import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from '../assets/logoo.svg'


const Footer = () => {
  return (
    <footer className="bg-[#FFF5E3] mt-10 py-16 px-8">
    {/* Heading */}
    <div className="flex justify-center mb-12">
      <h1 className="lg:text-7xl text-3xl text-center font-[Playfair_Display] text-[#4E2A1E]">
        Carry a Bouquet, Carry a Memory
      </h1>
    </div>

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
      
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img src={Logo} alt="Logo" className="lg:w-45 w-30 h-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center md:items-start">
        <h2 className="font-bold text-xl text-[#4E2A1E] mb-4">RAWFLOWER</h2>
        <div className="flex flex-col gap-2 text-[#4E2A1E]">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-xl font-semibold text-[#634135] mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a href="https://facebook.com" className="text-[#634135] hover:text-[#4E2A1E]">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="text-[#634135] hover:text-[#4E2A1E]">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-[#634135] hover:text-[#4E2A1E]">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-[#634135] hover:text-[#4E2A1E]">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-xl font-semibold text-[#4E2A1E] mb-4">LET’S TALK SHOP</h3>
        <p className="text-[#4E2A1E] mb-4 text-center md:text-left">Questions? Comments? Email us!</p>
        <button className="border border-[#4E2A1E] text-[#4E2A1E] py-2 px-6 rounded hover:bg-[#4E2A1E] hover:text-white transition">
          Email
        </button>
      </div>

    </div>
  </footer>
  )
}

export default Footer
