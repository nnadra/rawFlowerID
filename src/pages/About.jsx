import React from 'react'
import ButtonDark from '../component/ButtonDark';
import Kategori from '../component/Kategori';
import ImgAbout from '../assets/img-about.svg'


const Hero = () => {
  return (
    <>
    <Kategori/>
    <div className="lg:flex items-center h-screen bg-[#FFF5E3]">
  {/* Gambar */}
  <div className="lg:w-1/2 lg:h-full w-full overflow-hidden lg:border-r-4 lg:border-[#4E2A1E]">
    <img src={ImgAbout} alt="Bouquet" className="w-full h-full object-cover"/>
  </div>

  {/* Teks Judul & Deskripsi */}
  <div className="flex flex-col justify-center items-center lg:h-full mt-10 lg:mt-0 lg:w-1/2 px-10">
    <h1 className="font-veryvogue lg:text-6xl text-3xl text-[#4E2A1E] mb-2">Made a Beauty</h1>
    <h2 className="font-veryvogue italic lg:text-6xl text-3xl text-[#4E2A1E] mb-6">Flowers</h2>

    <p className="lg:text-xl text-md text-center text-[#4E2A1E] lg:mb-20 mb-10 max-w-lg">
      Lorem ipsum dolor sit amet, I Love you but your are jamet. consectetur adipiscing elit. Vivamus dictum arcu at ultrices semper. Nulla congue tempus quam, in interdum dui vestibulum ac. Aliquam tincidunt nisi eu neque auctor, ac mattis mi iaculis. Sed pretium a nulla non rhoncus.
    </p>

    <ButtonDark />
  </div>
</div>
    </>
  )
}

export default Hero
