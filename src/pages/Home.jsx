"use client";
import * as React from "react";
import RedFlower from '../assets/hero-redFlower.svg'
import WhiteFlower from '../assets/hero-whiteFlower.svg'
import ImageHero from '../assets/img-hero.svg'
import BlogPage from '../pages/BlogPage.jsx'
import Contact from "./Contact.jsx";
import Footer from "../component/common/Footer.jsx";


function Home() {
  return (
    <main className="flex overflow-hidden flex-col pb-24">
      <div className="z-10 -mt-1.5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[71%] max-md:ml-0 max-md:w-full">
            <div className="w-full max-md:mt-10 max-md:max-w-full">
              

              <section className="mt-14 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[45%] max-md:ml-0 max-md:w-full">
                    <img
                      src={RedFlower}
                      alt="Decorative flower arrangement"
                      className="object-contain grow w-full aspect-[1.57] max-md:mt-10"
                    />
                  </div>
                  <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-20 w-full text-center text-yellow-950 max-md:mt-10 max-md:max-w-full">
                      <h1 className="text-7xl font-[274] max-md:max-w-full max-md:text-4xl">
                        A{" "}
                        <span className="font-bold text-[#4e2a1e]">bloom</span>{" "}
                        for{" "}
                      </h1>
                      <div className="flex flex-wrap gap-7 mt-4 items-center self-center whitespace-nowrap max-md:max-w-full">
                        <span className="self-stretch my-auto text-7xl max-md:text-4xl">
                          precious
                        </span>
                        <span className="self-stretch my-auto text-7xl underline font-[401] max-md:text-4xl">
                          person.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-10 w-full text-2xl text-center max-md:mt-10">
              <img
                src={WhiteFlower}
                alt="Decorative element"
                className="object-contain mt-9 w-full aspect-[1.12]"
              />
            </div>
          </aside>
        </div>
      </div>

      <img
        src={ImageHero}
        alt="Featured banner"
        className="object-contain self-center mt-7 w-full rounded-2xl aspect-[2.84] max-w-[1300px] max-md:max-w-full"
      />

      <section className="pt-20">
      <BlogPage />
      <Contact/>
      <Footer/>
      </section>
    </main>
  );
}

export default Home;
