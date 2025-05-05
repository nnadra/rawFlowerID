"use client";
import React, { useEffect, useState, useRef } from "react";
import RedFlower from "../assets/hero-redFlower.svg";
import WhiteFlower from "../assets/hero-whiteFlower.svg";
import ImageHero from "../assets/img-hero.svg";
import BlogPage from "../pages/BlogPage.jsx";
import Contact from "./Contact.jsx";
import Footer from "../component/Footer.jsx";
import Hero from "./About.jsx";
import Review from "./Review.jsx";
import Popular from "./Popular.jsx";
import PackagePage from './PackagePage.jsx'

import { Package } from "lucide-react";

function Home() {
  const [showFlowers, setShowFlowers] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFlowers(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Sticky flowers */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-0 z-30">
        <img
          src={RedFlower}
          alt="Red Flower"
          className={`w-50 lg:w-120 absolute top-50 left-0 lg:top-20  transition-all duration-700 ease-in-out ${
            showFlowers
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        />
        <img
          src={WhiteFlower}
          alt="White Flower"
          className={`w-50 lg:w-120 absolute top-40 right-0 lg:top-10 transition-all duration-700 ease-in-out ${
            showFlowers
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        />
      </div>

      <div className="pb-24">
        {/* Hero Section */}
        <section ref={heroRef} id="hero-section" className="pt-28 max-w-[1300px] mx-auto">
          <div className="flex flex-col items-center text-yellow-950">
            <h1 className="text-7xl font-[274] text-center max-md:text-4xl">
              A <span className="font-bold text-[#4e2a1e]">bloom</span> for
            </h1>
            <div className="flex gap-4 mt-4 text-7xl font-veryvogue max-md:text-4xl">
              <span>precious</span>
              <span className="italic underline">person.</span>
            </div>
          </div>
        </section>

        {/* Banner */}
        <img
          src={ImageHero}
          alt="Featured banner"
          className="object-contain  mt-7 w-full rounded-2xl aspect-[2.84] max-w-[1300px] mx-auto max-md:max-w-full"
        />

        {/* Other Sections */}
        <section className="pt-20">
          <Hero />
          <PackagePage/>
          <Popular />
          <BlogPage />
          <Review />
          <Contact />
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default Home;
