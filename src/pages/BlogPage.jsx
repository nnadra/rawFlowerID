import { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/blogs'); 
        const data = await res.json();
        setBlogPosts(data); 
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="p-16">Loading Blogs...</div>;

  return (
    <div className="bg-white text-[#4E2A1E] font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg mb-10 ">Welcome to the RawFlower Blog — your curated corner for all things floral, heartfelt, and beautifully crafted.

Here, we go beyond just petals and stems. Whether you're a flower lover, a gift-giver, or simply someone who finds joy in beauty, our blog offers stories and inspiration rooted in nature, emotion, and creativity.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {blogPosts.slice(0, 2).map((post, idx) => (
            <div key={idx} onClick={() => navigate(`/detailBlog/${post.id}`)}>
              <img src={`http://localhost:8000/storage/${post.image}`} alt={post.judul} className="w-full h-[280px] object-cover rounded-md mb-3" />
              <p className="text-sm uppercase text-gray-500">{post.published_at}</p>
              <h2 className="text-xl font-medium mt-1">{post.judul}</h2>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogPosts.slice(2).map((post, idx) => (
            <div key={idx} onClick={() => navigate(`/detailBlog/${post.id}`)}>
              <img src={`http://localhost:8000/storage/${post.image}`} alt={post.judul} className="w-full h-52 object-cover rounded-md mb-3" />
              <p className="text-sm uppercase text-gray-500">{post.published_at}</p>
              <h2 className="text-lg font-medium mt-1">{post.judul}</h2>
            </div>
          ))}
        </div>

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