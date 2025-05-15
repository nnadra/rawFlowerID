import React from 'react'
import bgreview from '../assets/bgreview.png'
import spring1 from '../assets/spring-flower.svg'
import graduation from '../assets/gradu-flower.svg'



const PackagePage = () => {
  return (
  <div className="bg-[url('/src/assets/bgreview.png')] w-full h-full">
  <h1 className="text-center text-3xl md:text-5xl font-thin mb-30 text-brown-800 text-[#4E2A1E]">
    <span className="font-veryvogue italic font-semibold text-6xl md:text-5xl text-[#4E2A1E]">Explore</span>{' '}
    Our Package
  </h1>

  <div className="flex flex-col md:flex-row justify-center gap-20">
    
    {/* First Card */}
    <div className="bg-white rounded-md overflow-hidden shadow-md relative">
      <img src={spring1} alt="Spring Flowers" className="w-full h-64 object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-[#f9f2e9] px-4 py-2 rounded text-lg italic text-brown-700">
          Spring Flowers
        </span>
      </div>
    </div>

    {/* Middle Card */}
    <div className="bg-white rounded-md overflow-hidden shadow-md scale-120 z-10 relative">
      <img src={graduation} alt="Graduation" className="w-full h-64 object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-[#f9f2e9] px-4 py-2 rounded text-lg italic text-brown-700">
          Graduation
        </span>
      </div>
    </div>

    {/* Third Card */}
    <div className="bg-white rounded-md overflow-hidden shadow-md relative">
      <img src={spring1} alt="Spring Flowers" className="w-full h-64 object-cover" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-[#f9f2e9] px-4 py-2 rounded text-lg italic text-brown-700">
          Spring Flowers
        </span>
      </div>
    </div>
  </div>
</div>

  )
}

export default PackagePage
