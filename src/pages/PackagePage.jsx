import React from "react";
import spring1 from "../assets/spring-flower.svg";
import graduation from "../assets/gradu-flower.svg";

const PackagePage = () => {
  return (
    <div className="bg-[url('/src/assets/bgreview.png')] bg-cover bg-center p-10">
      <div className="py-10 px-4">
        <h1 className="text-center text-3xl md:text-5xl font-thin text-[#4E2A1E] mb-10">
          <span className="font-veryvogue italic font-semibold text-6xl md:text-5xl text-[#4E2A1E]">
            Explore
          </span>{" "}
          Our Package
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
          {/* Card Template */}
          {[
            { src: spring1, label: "Spring Flowers" },
            { src: graduation, label: "Graduation", scale: true },
            { src: spring1, label: "Spring Flowers" },
          ].map(({ src, label, scale }, i) => (
            <div
              key={i}
              className={`bg-white rounded-md overflow-hidden shadow-md relative ${
                scale ? "lg:scale-110 scale-100  z-10" : ""
              }`}
            >
              <img src={src} alt={label} className="w-full h-64 object-cover" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#f9f2e9] px-4 py-2 rounded text-lg italic text-brown-700">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagePage;
