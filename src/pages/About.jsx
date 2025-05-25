import ButtonDark from "../component/ButtonDark";
import Kategori from "../component/Kategori";
import ImgAbout from "../assets/img-about.svg";

const Hero = () => {
  return (
    <div className="">
      <Kategori />
      <div className="lg:flex items-center bg-[#FFF5E3]">
        {/* Gambar */}
        <div className="lg:w-1/2 lg:h-full w-full overflow-hidden lg:border-r-4">
          <img
            src={ImgAbout}
            alt="Bouquet"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teks Judul & Deskripsi */}
        <div className="flex flex-col justify-center items-center lg:h-full mt-10 lg:mt-0 lg:w-1/2 px-10">
          <h1 className="font-veryvogue lg:text-6xl text-3xl text-[#4E2A1E] mb-2">
            Made a Beauty
          </h1>
          <h2 className="font-veryvogue italic lg:text-6xl text-3xl text-[#4E2A1E] mb-6">
            Flowers
          </h2>

          <p className="lg:text-xl text-md text-center text-[#4E2A1E] mb-5 max-w-2xl">
            <span className="font-bold">Rawflower.id</span> is more than just a
            flower shop — it’s a place where emotion meets artistry. Every
            bouquet is handcrafted with care, combining natural beauty with a
            modern aesthetic to create meaningful floral experiences. Whether
            it's for a celebration, a gesture of love, or simply to brighten
            someone’s day, our arrangements speak when words fall short.
          </p>
          <p className="lg:text-xl text-md text-center text-[#4E2A1E] mb-10 max-w-2xl">
            Rooted in local creativity, rawflower.id aims to make beautiful
            blooms accessible for everyone — from close friends to distant
            hearts. We believe flowers hold stories, and we’re here to help you
            tell yours.
          </p>

          <ButtonDark />
        </div>
      </div>
    </div>
  );
};

export default Hero;
