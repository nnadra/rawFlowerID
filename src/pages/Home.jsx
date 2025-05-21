"use client";
import React, { useEffect, useState, useRef } from "react";
import RedFlower from "../assets/hero-redFlower.svg";
import WhiteFlower from "../assets/hero-whiteFlower.svg";
import ImageHero from "../assets/img-hero.svg";
import BlogPage from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Footer from "../component/Footer.jsx";
import Hero from "./About.jsx";
import Review from "./Review.jsx";
import Popular from "./Popular.jsx";
import PackagePage from "./PackagePage.jsx";
import Navbar from "../component/Navbar.jsx";

function Home() {
  const [showFlowers, setShowFlowers] = useState(false);
  const heroRef = useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

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
      <div className="pointer-events-none w-screen h-screen fixed top-0 left-0 z-30">
        <img
          src={RedFlower}
          alt="Red Flower"
          className={`w-75 lg:w-120 absolute top-70 lg:left-0 -rotate-35 lg:rotate-0 -left-25 lg:top-20 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "lg:opacity-0 lg:-translate-y-10 -left-100"
          }`}
        />
        <img
          src="/src/assets/set1.png"
          alt="set1"
          className={`lg:hidden md:hidden w-45 absolute top-75 -right-10 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "-right-50"
          }`}
        />
        <img
          src="/src/assets/set2.png"
          alt="set2"
          className={`lg:hidden md:hidden -rotate-25 w-35 absolute top-120 -left-10 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "-left-50"
          }`}
        />
        <img
          src="/src/assets/set6.png"
          alt="set6"
          className={`lg:hidden md:hidden rotate-30 w-50 absolute top-175 left-0 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "top-250"
          }`}
        />
        <img
          src="/src/assets/set7.png"
          alt="set3"
          className={`lg:hidden md:hidden w-50 absolute top-170 -right-15 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "-right-50 top-180"
          }`}
        />
        <img
          src="/src/assets/set5.png"
          alt="set3"
          className={`lg:hidden md:hidden -rotate-9 w-20 absolute top-155 right-35 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 scale-0"
          }`}
        />
        <img
          src={WhiteFlower}
          alt="White Flower"
          className={`w-90 lg:w-120 absolute top-95 lg:rotate-0 rotate-50 -right-15 lg:right-0 lg:top-10 transition-all duration-700 ease-in-out ${
            showFlowers ? "opacity-100 translate-y-0" : "lg:opacity-0 lg:-translate-y-10 -right-100"
          }`}
        />
      </div>

      <div className="">
        {/* Hero Section */}
        <section ref={heroRef} id="hero-section" className="lg:pt-28 pt-10 h-screen lg:h-full mx-auto bg-[url('/src/assets/bgreview.png')] bg-no-repeat lg:bg-none">
          <div className="flex flex-col items-center text-yellow-950">
            <h1 className="text-7xl font-[274] text-center max-md:text-4xl">
              A <span className="font-bold text-[#4e2a1e]">bloom</span> for
            </h1>
            <div className="flex gap-4 mt-4 text-7xl font-veryvogue max-md:text-4xl">
              <span>precious</span>
              <span className="italic underline">person.</span>
            </div>
          </div>

          {/* Banner */}
        <img
          src={ImageHero}
          alt="Featured banner"
          className="object-contain lg:block md:block hidden mt-7 w-full rounded-2xl aspect-[2.84] max-w-[1300px] mx-auto max-md:max-w-full"
        />

        </section>

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
