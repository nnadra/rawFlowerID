import React from 'react';
import blogDetailData from '../data/blogDetailData';

const DetailBlog = () => {
  const {
    date,
    category,
    title,
    author,
    heroImage,
    paragraphs,
    quote,
    contentImages,
    relatedArticles
  } = blogDetailData;

  return (
    <div className="bg-white text-[#4E2A1E] font-sans">
      {/* Header */}
      <div className="max-w-3xl mx-auto py-12 px-6">
        <p className="text-sm text-gray-500">{date} / {category}</p>
        <h1 className="text-4xl font-bold mt-2 mb-4">{title}</h1>
        <p className="text-sm text-gray-500">Words by {author}</p>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 ">
        <img src={heroImage} alt={title} className="w-full object-cover mb-10 rounded-sm" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg leading-relaxed mb-6">{paragraphs[0]}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Heading title</h2>
        <p className="text-base leading-relaxed mb-6 text-gray-700">{paragraphs[1]}</p>

        <blockquote className="border-l-4 border-amber-950 pl-4 italic text-gray-600 mb-6">
          “{quote.text}”
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
        <p className="text-base leading-relaxed mb-6 text-gray-700">{paragraphs[1]}</p>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-100 mt-20 py-12">
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
