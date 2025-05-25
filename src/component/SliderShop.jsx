import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

export default function SliderShop() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

   // Fetch data dari API
  useEffect(() => {
    axios.get("http://localhost:8000/api/slider") // ganti URL sesuai base API kamu
      .then((res) => {
        setSlides(res.data.data); // karena kamu pakai resource collection, datanya ada di res.data.data
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current, slides.length]);

  return (
    <div className="relative h-[400px] mx-auto overflow-hidden rounded-2xl shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6 text-white">
            <h2 className="lg:text-5xl text-4xl mt-12 italic font-veryvogue">{slide.title}</h2>
            <p className="max-w-lg text-sm py-12">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol navigasi */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full z-10"
      >
        <ChevronRight />
      </button>

      {/* Dot Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
