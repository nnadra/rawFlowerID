import React, { useEffect, useState } from 'react';
import blogDetailData from '../data/blogDetailData';
import { useParams } from 'react-router-dom';

const DetailBlog = () => {
  const { id } = useParams(); // dapetin id dari URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

    const {
    category,
    author,
    paragraphs,
    quote,
    contentImages,
    relatedArticles
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
      <div className="max-w-7xl mx-auto px-6 ">
        <img src={`http://localhost:8000/storage/${blog.image}`} alt={blog.judul} className="w-full object-cover mb-10 rounded-sm" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg leading-relaxed mb-6">{blog.isi}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Heading title</h2>
        <p className="text-base leading-relaxed mb-6 text-gray-700">{blog.isi}</p>

        <blockquote className="border-l-4 border-amber-950 pl-4 italic text-gray-600 mb-6">
          “{paragraphs}”
          <br />
          <span className="text-sm not-italic font-medium block mt-1">— {quote.author}</span>
        </blockquote>

        {/* Grid Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          {contentImages.map((img, i) => (
            <img key={i} src={img} alt={`img${i}`} className="rounded-lg" />
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">Heading title</h2>
        <p className="text-base leading-relaxed mb-6 text-gray-700">{blog.isi}</p>
      </div>

      {/* Related Articles */}
      <div className="bg-[#FFF5E3] mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Related Articles</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {relatedArticles.map((title, i) => (
              <div key={i} className="bg-white rounded-sm shadow-md overflow-hidden">
                <img
                  src={`/images/related${i + 1}.png`}
                  alt={title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-amber-950 font-semibold mb-1">{category.toUpperCase()}</p>
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {paragraphs[0].substring(0, 80)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DetailBlog;
