import React from 'react'
import ButtonDark from '../component/ButtonDark';
import Kategori from '../component/Kategori';
import ImgAbout from '../assets/img-about.svg'


const Hero = () => {
  return (
    <>
    <Kategori/>
    <div className="flex items-center h-screen bg-[#FFF5E3]">
  {/* Gambar */}
  <div className="w-1/2 h-full overflow-hidden border-r-4 border-[#4E2A1E]">
    <img src={ImgAbout} alt="Bouquet" className="w-full h-full object-cover"/>
  </div>

  {/* Teks Judul & Deskripsi */}
  <div className="flex flex-col justify-center items-center  h-full w-1/2 px-10">
    <h1 className="font-veryvogue text-6xl text-[#4E2A1E] mb-2">Made a Beauty</h1>
    <h2 className="font-veryvogue italic text-6xl text-[#4E2A1E] mb-6">Flowers</h2>

    <p className="text-xl text-[#4E2A1E] mb-20 max-w-lg">
      Lorem ipsum dolor sit amet, I Love you but your are jamet. consectetur adipiscing elit. Vivamus dictum arcu at ultrices semper. Nulla congue tempus quam, in interdum dui vestibulum ac. Aliquam tincidunt nisi eu neque auctor, ac mattis mi iaculis. Sed pretium a nulla non rhoncus.
    </p>

    <ButtonDark />
  </div>
</div>
    </>
  )
}

export default Hero
