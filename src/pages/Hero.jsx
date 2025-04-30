import React from 'react'
import ButtonDark from '../component/common/ButtonDark';
import Kategori from '../component/common/Kategori';

const Hero = () => {
  return (
    <>
    <Kategori/>
     <div className="flex h-screen overflow-hidden bg-[#FFF5E3]">
      {/* Image */}
      <div className="w-1/2 h-full overflow-hidden border-r-4 border-[#4E2A1E]">
        <img src="src/assets/imageBunga.png" alt="Bouquet" className="w-full h-full object-cover"/>
      </div>

      {/* Teks Judul & Deskripsi */}
      <div className="flex flex-col justify-center items-center text-center h-screen w-full">
        <h1 className='font-veryvogue text-6xl my-2 text-[#4E2A1E] mx-5'>Made a Beauty</h1>
        <h1 className='font-veryvogue italic text-6xl text-[#4E2A1E] mx-5'> Flowers</h1>

        <p className='text-xl my-8 max-w-[950px] text-[#4E2A1E] m-5'>Lorem ipsum dolor sit amet, I Love you but your are jamet. consectetur adipiscing elit. Vivamus dictum arcu at ultrices semper. Nulla congue tempus quam, in interdum dui vestibulum ac. Aliquam tincidunt nisi eu neque auctor, ac mattis mi iaculis. Sed pretium a nulla non rhoncus. </p>

        <ButtonDark/>
      </div>
    </div>
    </>
  )
}

export default Hero
