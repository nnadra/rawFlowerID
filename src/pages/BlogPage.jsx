"use client";
import * as React from "react";
import Img1 from '../assets/blog1-pict.svg'
import { ArrowRight } from 'lucide-react';


function BlogPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-yellow-50">
      <div className="flex z-10 flex-col self-center w-full max-w-[1301px] max-md:max-w-full">
        <div className="flex flex-col justify-center p-2.5 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-center self-stretch my-auto min-w-60 text-yellow-950 max-md:max-w-full">
              <div className="self-stretch my-auto text-8xl font-[401] w-[186px] max-md:text-4xl">
                Blog
              </div>
              <div className="self-stretch my-auto text-2xl font-[274] w-[797px] max-md:max-w-full">
                Lorem ipsum dolor sit amet, I Love you but your are jamet.
                consectetur adipiscing elit. Vivamus dictum arcu at ultrices
                semper. Nulla congue tempus
              </div>
            </div>
            <div className="flex gap-8 rounded-lg justify-center items-center px-5 py-3 my-auto text-xl text-right text-yellow-50 bg-yellow-950 max-md:px-5">
              <div className="self-stretch my-auto">More Blog</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ef321fd6883a3ad8a349d3f1fad5452c527bd1?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
                className="object-contain self-stretch my-auto w-6 "
                alt="More blog icon"
              />
            </div>
          </div>
        </div>
        <div className="self-center mt-9 w-full max-w-[1288px] max-md:max-w-full">
          <div className="flex relative flex-col px-9 pt-8 pb-12 w-full rounded-2xl min-h-[487px] max-md:px-5 max-md:max-w-full">
            <img
              src={Img1}
              className="object-cover absolute inset-0 rounded-xl size-full "
              alt="Featured blog background"
            />
            <div className="relative max-w-full w-[567px]">
              <div className="text-2xl text-[#ECDEC3] max-md:max-w-full">
                BLOG | 22 JAN
              </div>
              <div className="text-5xl text-white max-md:max-w-full max-md:text-4xl font-[Playfair_Display]">
                How To Make Bouquet
              </div>
            </div>

            <div className="flex justify-between relative flex-wrap items-end mt-56 text-2xl max-md:mt-10 max-md:max-w-full">
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
          <div className="flex flex-wrap gap-8 items-center mt-10 w-full max-md:max-w-full">
            <div className="flex relative flex-col grow shrink gap-2.5 items-center self-stretch px-6 py-8 my-auto rounded-2xl aspect-[1.127] min-h-[361px] min-w-60 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[326px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc5858e8c865a886fc0ef9610f6cb3979450920?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
                className="object-cover absolute inset-0 size-full"
                alt="Blog card background 1"
              />
              <div className="flex relative flex-col self-stretch my-auto min-w-60 w-[277px]">
                <div className="w-full">
                  <div className="text-sm font-bold text-orange-100">
                    Blog| 22 January
                  </div>
                  <div className="text-3xl text-white font-[Playfair_Display]">
                    Flower isn't just about Bouquet.
                  </div>
                </div>
                <button className="flex gap-3 justify-center items-center self-start px-5 py-2.5 mt-40 text-base font-bold text-white rounded-lg bg-yellow-950 max-md:mt-10 hover:bg-yellow-900 transition">
                  <span>Read Blog</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex relative flex-col grow shrink gap-2.5 items-center self-stretch px-6 py-8 my-auto rounded-2xl aspect-[1.127] min-h-[361px] min-w-60 w-[326px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/31446c77d609d12e0c3753c07dea5a4992b964f5?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
                className="object-cover absolute inset-0 size-full"
                alt="Blog card background 2"
              />
              <div className="flex relative flex-col self-stretch my-auto min-w-60 w-[277px]">
                <div className="w-full">
                  <div className="text-sm font-bold text-orange-100">
                    Blog| 22 January
                  </div>
                  <div className="text-3xl text-white font-[Playfair_Display]">
                    When the flowerr is grow.
                  </div>
                </div>
                <button className="flex gap-3 justify-center items-center self-start px-5 py-2.5 mt-40 text-base font-bold text-white rounded-lg bg-yellow-950 max-md:mt-10 hover:bg-yellow-900 transition">
                  <span>Read Blog</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex relative flex-col grow shrink gap-2.5 items-center self-stretch px-6 py-8 my-auto rounded-2xl aspect-[1.127] min-h-[361px] min-w-60 w-[326px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f13ee7c7dfdf8b054a126fa75583a8976d1b65b?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
                className="object-cover absolute inset-0 size-full"
                alt="Blog card background 3"
              />
              <div className="flex relative flex-col self-stretch my-auto min-w-60 w-[277px]">
                <div className="w-full">
                  <div className="text-sm font-bold text-orange-100">
                    Blog| 22 January
                  </div>
                  <div className="text-3xl text-white font-[Playfair_Display]">
                    Flower means is love, Why?
                  </div>
                </div>
                <button className="flex gap-3 justify-center items-center self-start px-5 py-2.5 mt-40 text-base font-bold text-white rounded-lg bg-yellow-950 max-md:mt-10 hover:bg-yellow-900 transition">
                  <span>Read Blog</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e88e84b4fcf022a84c7c102ee7e2d53666645c4?placeholderIfAbsent=true&apiKey=622a4732b1024e68a81d69626964c09a"
        className="object-contain w-full aspect-[2] max-md:max-w-full"
        alt="Bottom decoration"
      />
    </div>
  );
}

export default BlogPage;
