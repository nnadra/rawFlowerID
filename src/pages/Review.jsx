import React from 'react'

const Review = () => {
  return (
    <div className="relative overflow-hidden lg:p-20 p-5 bg-[url(src/assets/bgreview.png)] ">
       <img src="src/assets/kiribunga.png" alt="Bunga Kiri" className="absolute top-0 left-0 w-72 h-auto hidden lg:block" />
        <img src="src/assets/kananbunga.png" alt="Bunga Kanan" className="absolute bottom-0 right-0 w-72 h-auto" />

        <div className='relative text-center'>
            <h1 className='lg:text-7xl text-4xl text-[#4E2A1E]'>Hear <span className='font-veryvogue'>From</span> Our</h1>
            <h1 className='lg:text-7xl text-4xl font-veryvogue text-[#4E2A1E]'>Happy <span className='italic'>Customer</span></h1>
        </div>

        <div className=''>
            <div className="flex flex-wrap justify-center gap-5 mt-10">
                <div className="bg-[url('src/assets/bgcard1.png')] rotate-2 text-center p-10 text-[#4E2A1E] max-w-120 hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='lg:text-xl lg:m-5'>“Rangkaian bunganya cantik banget! Warna, bentuk, dan detailnya semua pas. Cocok banget buat surprise orang tersayang. Pelayanannya juga ramah dan cepat. Rawflower.id memang juara!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Anindya Putri Kusumawardhani</p>
                    <p>Karyawan Swasta</p>
                </div>

                <div className="bg-[#BC863C] p-10 max-w-120 -rotate-2 text-center text-white hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='lg:text-xl lg:m-5'>“Super puas! Buketnya wangi, segar, dan sesuai banget sama request aku. Bahkan bungkus dan pitanya juga estetik. Recommended banget buat kamu yang cari florist lokal berkualitas.”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Rifqi Nur Hidayatullah</p>
                    <p>Mahasiswa</p>
                </div>

                <div className="bg-[url('src/assets/bgcard2.png')] p-10 max-w-120 rotate-1 text-center text-[#4E2A1E] hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='lg:text-xl lg:m-5'>“Bunganya tiba tepat waktu dan kondisinya masih sangat segar. Rangkaiannya artistik, nggak pasaran. Terlihat banget kalau dirangkai dengan hati. Fix, bakal order lagi nanti!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Clarissa Ayu Larasati</p>
                    <p>Beauty Enthusiast</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

                <div className="bg-[#FFC457] p-10 max-w-120 rotate-2 text-center text-[#4E2A1E] hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='lg:text-xl lg:m-5'>“Baru pertama kali coba dan langsung jatuh hati. Rawflower.id ngerti banget cara bikin momen jadi spesial lewat buket bunga. Simple tapi classy! Servisnya juga oke!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Rini Fitriani</p>
                    <p>Ibu Rumah Tangga</p>
                </div>


                <div className="bg-[url('src/assets/bgcard3.png')] p-10 max-w-120 -rotate-2 text-center text-[#4E2A1E] hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='lg:text-xl lg:m-5'>“Buketnya bener-bener bikin seneng. Warnanya soft, rapi, dan aromanya enak banget. Cocok buat acara formal ataupun hadiah. Rawflower.id nggak pernah mengecewakan!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Nadira Putri Rahmawati</p>
                    <p>Wedding Planner</p>
                </div>


                <div className="bg-[#C15D11] p-10 max-w-120 rotate-1 text-center text-white hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='lg:text-xl lg:m-5'>“Dari pemesanan sampai pengantaran semuanya lancar. Bunganya fresh, rangkaiannya kekinian, dan bisa request gaya sesuai selera. Suka banget sama hasilnya. Makasih rawflower.id!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Dwi Prasetyo</p>
                    <p>Ibu Rumah Tangga</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
