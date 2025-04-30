import * as React from "react";
import Img1 from "../assets/blog1-pict.svg";
import { ArrowRight } from "lucide-react";

function BlogPage() {
  return (
    <div className="flex flex-col overflow-hidden bg-yellow-50">
      <div className="z-10 flex flex-col self-center w-full p-20">

        {/* Hero Section */}
        
          <div className="flex items-center justify-between">
            <div className="flex justify-between gap-10">
              <div className="text-8xl font-veryvogue font-[401] w-[186px] max-md:text-4xl">
                Blog
              </div>
              <div className="text-2xl font-[274] max-w-[800px]">
                Lorem ipsum dolor sit amet, I Love you but your are jamet.
                consectetur adipiscing elit. Vivamus dictum arcu at ultrices
                semper. Nulla congue tempus
              </div>
            </div>
            <div className="flex rounded-lg items-center px-5 py-3 text-xl text-yellow-50 bg-yellow-950">
              <div className="pe-4">More Blog</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ef321fd6883a3ad8a349d3f1fad5452c527bd1?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
                className="w-6 object-contain"
                alt="More blog icon"
              />
            </div>
          </div>

        {/* Featured Blog */}
        <div className="self-center mt-9 w-full  max-md:max-w-full">

          {/* Blog Besar */}
          <div className="relative flex flex-col px-9 pt-8 pb-12 w-full min-h-[487px] max-md:px-5 max-md:max-w-full z-10">
          <img src="/src/assets/blog1-pict.png" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
            <div className="relative max-w-full">
              <div className="text-2xl text-[#ECDEC3]">BLOG | 22 JAN</div>
              <div className="text-5xl text-white font-[Playfair_Display] max-md:text-4xl">
                How To Make Bouquet
              </div>
            </div>

            <div className="relative flex flex-wrap justify-between items-end mt-56 text-2xl max-md:mt-10 max-md:max-w-full">
              <div className="text-white font-[274] w-[705px] max-md:max-w-full">
                Lorem ipsum dolor sit amet, I Love you but your are jamet.
                consectetur adipiscing elit. Vivamus dictum arcu at ultrices
                semper. Nulla congue tempus quam, in interdum dui vestibulum ac.
              </div>

              <div className="flex items-center gap-2 px-8 py-2.5 bg-[#ECDEC3] rounded-lg text-yellow-950 max-md:px-5">
                <button className="text-lg font-medium">Read Blog</button>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Blog Cards Section */}
          <div className="mt-10 flex gap-8 justify-center items-center w-full max-md:flex-wrap">
            {/* Blog Card 1 */}
            <div className="relative flex-col px-9 pt-8 pb-12 w-full min-h-[487px] max-md:px-5 max-md:max-w-full z-10">
              <div className=" bg-black/40">

              </div>
              <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc5858e8c865a886fc0ef9610f6cb3979450920?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />

              <div className="relative flex flex-col w-full p-6 text-white">
                  <div>
                    <div className="text-xl">Blog | 22 January</div>
                    <h2 className="text-4xl font-[Playfair_Display]">
                      Flower isn’t just about Bouquet.
                    </h2>
                  </div>

                  <div className="mt-10">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#54321A] rounded-lg text-white text-lg font-semibold">
                      Read Blog
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
            </div>

            {/* Blog Card 2 */}
            <div className="relative flex flex-col px-9 pt-8 pb-12 w-full min-h-[487px] max-md:px-5 max-md:max-w-full z-10">
              <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31446c77d609d12e0c3753c07dea5a4992b964f5?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />

                <div className="relative flex flex-col w-full p-6 text-white">
                  <div>
                    <div className="text-xl">Blog | 22 January</div>
                    <h2 className="text-4xl font-[Playfair_Display]">
                      Flower isn’t just about Bouquet.
                    </h2>
                  </div>

                  <div className="mt-10">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#54321A] rounded-lg text-white text-lg font-semibold">
                      Read Blog
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
            </div>

            {/* Blog Card 3 */}
            <div className="relative flex flex-col px-9 pt-8 pb-12 w-full min-h-[487px] max-md:px-5 max-md:max-w-full z-10">
              <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f13ee7c7dfdf8b054a126fa75583a8976d1b65b?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />

                <div className="relative flex flex-col w-full p-6 text-white">
                  <div>
                    <div className="text-xl">Blog | 22 January</div>
                    <h2 className="text-4xl font-[Playfair_Display]">
                      Flower isn’t just about Bouquet.
                    </h2>
                  </div>

                  <div className="mt-10">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#54321A] rounded-lg text-white text-lg font-semibold">
                      Read Blog
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
            </div>

          </div>
        </div>
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

export default BlogPage;
