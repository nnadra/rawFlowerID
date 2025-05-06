import React from 'react';
import Footer from '../component/Footer';
import { blogPosts } from '../data/BlogPost';

const BlogPage = () => {
  return (
    <div className="bg-[#f7f6f3] text-[#1d1d1f] font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {blogPosts.slice(0, 2).map((post, idx) => (
            <div key={idx}>
              <img src={post.image} alt={post.title} className="w-full h-[280px] object-cover rounded-md mb-3" />
              <p className="text-sm uppercase text-gray-500">{post.category}</p>
              <h2 className="text-xl font-medium mt-1">{post.title}</h2>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogPosts.slice(2).map((post, idx) => (
            <div key={idx}>
              <img src={post.image} alt={post.title} className="w-full h-52 object-cover rounded-md mb-3" />
              <p className="text-sm uppercase text-gray-500">{post.category}</p>
              <h2 className="text-lg font-medium mt-1">{post.title}</h2>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between text-sm">
          <button className="text-gray-400 hover:text-black">Previous</button>
          <button className="text-gray-400 hover:text-black">Next</button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get the latest news into your inbox</h2>
          <p className="text-sm text-gray-500 max-w-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="flex max-w-md">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border rounded-l-md" />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">Subscribe</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
