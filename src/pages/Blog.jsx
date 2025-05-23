import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/blogs')
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error('Error ambil data blog:', err);
      });
  }, []);

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 4);

  return (
    <div className="flex flex-col overflow-hidden bg-yellow-50">
      <div className="z-10 flex flex-col self-center w-full lg:p-20 p-5">

        {/* Hero Section */}
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex justify-between gap-10">
            <div className="text-8xl mb-3 lg:mb-0 font-veryvogue text-amber-900 font-[401] w-[186px] max-md:text-4xl">
              Blog
            </div>
            <div className="lg:text-2xl mb-3 lg:mb-0 text-md text-amber-900 font-[274] max-w-[800px]">
              Discover heartfelt stories, floral inspirations, and thoughtful
              tips through our blog. From behind-the-scenes bouquet making to
              ideas for meaningful gifting, we share everything that blossoms
              beyond the petals.
            </div>
          </div>
          <div className="flex rounded-lg justify-between items-center px-5 py-3 text-xl text-yellow-50 bg-yellow-950">
            <button 
              type="button" 
              onClick={() => navigate("/blogPage")}
              className="pe-4 cursor-pointer">More Blog</button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ef321fd6883a3ad8a349d3f1fad5452c527bd1?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
              className="w-6 object-contain"
              alt="More blog icon"
            />
          </div>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="self-center mt-9 w-full max-md:max-w-full">
            <div className="relative flex flex-col px-9 pt-8 pb-12 w-full min-h-[487px] max-md:px-5 max-md:max-w-full z-10">
              <img src={`http://localhost:8000/storage/${featuredBlog.image}`} 
                  className=" absolute inset-0  brightness-85 w-full h-full object-cover rounded-2xl" />
              <div className="relative max-w-full">
                <div className="lg:text-2xl text-lg lg:text-[#ECDEC3] text-white">Blog | {featuredBlog.published_at}</div>
                <div className="text-5xl text-white font-[Playfair_Display] max-md:text-4xl">
                  {featuredBlog.judul}
                </div>
              </div>
              <div className="relative flex flex-wrap justify-between items-end mt-56 text-2xl max-md:mt-10 max-md:max-w-full">
                <div className="text-white font-[274] w-[705px] max-md:max-w-full hidden lg:block">
                  {featuredBlog.excerpt}
                </div>
                <div className="flex items-center gap-2 px-8 py-2.5 lg:bg-[#ECDEC3] bg-[#54321A] text-white rounded-lg lg:text-yellow-950 max-md:px-5">
                  <button className="text-lg font-medium cursor-pointer">Read Blog</button>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Blog Cards Section */}
            <div className="mt-10 flex gap-8 justify-center items-center w-full max-md:flex-wrap">
              {otherBlogs.map((blog, index) => (
                <div key={index} className="relative flex flex-col px-9 pt-8 pb-12 w-full min-h-[487px] max-md:px-5 max-md:max-w-full z-10">
                  <img src={`http://localhost:8000/storage/${blog.image}`} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                  <div className="relative flex flex-col w-full lg:p-6 text-white">
                    <div>
                      <div className="text-xl">Blog | {blog.published_at}</div>
                      <h2 className="text-4xl font-[Playfair_Display]">
                        {blog.judul}
                      </h2>
                    </div>
                    <div className="mt-10">
                      <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-[#54321A] rounded-lg text-white text-lg font-semibold">
                        Read Blog
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e88e84b4fcf022a84c7c102ee7e2d53666645c4?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
          className="absolute bottom-[-40px] left-0 w-full object-contain z-0"
          alt="Bottom decoration"
        />
      </div>
    </div>
  );
}

export default Blog;