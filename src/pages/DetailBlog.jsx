import React from 'react';


const DetailBlog = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <div className="max-w-3xl mx-auto py-12 px-6">
        <p className="text-sm text-gray-500">2 Apr, 2018 / Mind</p>
        <h1 className="text-4xl font-bold mt-2 mb-4">
          How to make the most of your childhood
        </h1>
        <p className="text-sm text-gray-500">Words by Rosie Manning</p>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6">
        <img
          src="/images/childhood.png"
          alt="How to make the most of your childhood"
          className="rounded-xl w-full object-cover mb-10"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg leading-relaxed mb-6">
          People is safe to say that Extraversion and Introversion are probably the oldest notions in personality theories.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Heading title</h2>
        <p className="text-base leading-relaxed mb-6 text-gray-700">
          It is safe to say that Extraversion and Introversion are probably the oldest notions in the history of personality theories...
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 mb-6">
          “It is safe to say that Extraversion and Introversion are probably the oldest notions in the history of personality theories.”
          <br />
          <span className="text-sm not-italic font-medium block mt-1">— Rosie Manning, Human</span>
        </blockquote>

        {/* Grid Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <img src="/images/img1.png" alt="img1" className="rounded-lg" />
          <img src="/images/img2.png" alt="img2" className="rounded-lg" />
          <img src="/images/img3.png" alt="img3" className="rounded-lg" />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">Heading title</h2>
        <p className="text-base leading-relaxed mb-6 text-gray-700">
          It is safe to say that Extraversion and Introversion are probably the oldest notions in the history of personality theories...
        </p>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-100 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Related Articles</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {['Thinking Vs. Feeling', 'Intuitive Vs. Observant', 'Assertive Vs. Turbulent'].map((title, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={`/images/related${i + 1}.png`}
                  alt={title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-indigo-600 font-semibold mb-1">MIND</p>
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    It is safe to say that Extraversion and Introversion are probably the oldest notions...
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
