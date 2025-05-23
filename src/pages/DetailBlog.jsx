import React, { useEffect, useState } from 'react';
import blogDetailData from '../data/blogDetailData';
import { useParams } from 'react-router-dom';

const DetailBlog = () => {
  const { id } = useParams(); // dapetin id dari URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    author,
    paragraphs,
    quote,
    contentImages,
  } = blogDetailData;

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Failed to fetch blog detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]); 

  if (loading) return <div className="p-16">Loading Blogs...</div>;

  return (
    <div className="bg-white text-[#4E2A1E] font-sans">
      {/* Header */}
      <div className="max-w-3xl mx-auto py-12 px-6">
        <p className="text-sm text-gray-500">{blog.published_at}</p>
        <h1 className="text-4xl font-bold mt-2 mb-4">{blog.judul}</h1>
        <p className="text-sm text-gray-500">Words by {author}</p>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6">
        <img
          src={`http://localhost:8000/storage/${blog.image}`}
          alt={blog.judul}
          className="w-full object-cover mb-10 rounded-sm"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg leading-relaxed mb-6">{blog.isi}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Heading title</h2>
        <p className="text-base leading-relaxed mb-6 text-gray-700">{blog.judul}</p>

        <blockquote className="border-l-4 border-amber-950 pl-4 italic text-gray-600 mb-6">
          “{paragraphs}”
          <br />
          <span className="text-sm not-italic font-medium block mt-1">— {quote.author}</span>
        </blockquote>
      </div>
    </div>
  );
};

export default DetailBlog;
