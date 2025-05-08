import React from 'react';
import Footer from '../component/Footer';
import { useNavigate} from 'react-router-dom';
import { blogPosts } from '../data/BlogPost';

const BlogPage = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white text-[#4E2A1E] font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10" onClick={()=> navigate ("/detailBlog")}>
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

      <Footer />
    </div>
  );
};

export default BlogPage;
