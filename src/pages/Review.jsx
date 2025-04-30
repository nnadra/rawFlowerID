import React from 'react'

const Review = () => {
  return (
    <div className="relative overflow-hidden p-8 bg-[url(src/assets/bgreview.png)]">
       <img src="src/assets/kiribunga.png" alt="Bunga Kiri" className="absolute top-0 left-0 w-72 h-auto" />
        <img src="src/assets/kananbunga.png" alt="Bunga Kanan" className="absolute bottom-0 right-0 w-72 h-auto" />

        <div className='relative text-center'>
            <h1 className='text-7xl text-[#4E2A1E]'>Hear <span className='font-veryvogue'>From</span> Our</h1>
            <h1 className='text-7xl font-veryvogue text-[#4E2A1E]'>Happy <span className='italic'>Customer</span></h1>
        </div>

        <div className=''>
            <div className="flex flex-wrap justify-center gap-5 mt-10">
                <div className="bg-[url('src/assets/bgcard1.png')] rotate-2 text-center p-10 text-[#4E2A1E] max-w-120 hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='text-xl m-5'>“Great service and beautiful arrangements. The only reason I’m giving 4 stars is that the bouquet was slightly smaller than expected. But overall, very happy with my purchase!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Louis Partridge</p>
                    <p>Actor</p>
                </div>

                <div className="bg-[#BC863C] p-10 max-w-120 -rotate-2 text-center text-white hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='text-xl m-5'>“The flowers were fresh and smelled amazing! They lasted over a week. Highly recommended!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Louis Partridge</p>
                    <p>Actor</p>
                </div>

                <div className="bg-[url('src/assets/bgcard2.png')] p-10 max-w-120 rotate-1 text-center text-[#4E2A1E] hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='text-xl m-5'>“Absolutely stunning flowers! 
                    I ordered a bouquet for my mom’s birthday, and she loved it. Fresh, beautifully arranged, and delivered on time. Will definitely order again!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Louis Partridge</p>
                    <p>Actor</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

                <div className="bg-[#FFC457] p-10 max-w-120 rotate-2 text-center text-[#4E2A1E] hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='text-xl m-5'>“Got a bouquet for my sister’s graduation. The colors were vibrant, and she loved it! Took a bit longer to arrive, but the quality made up for it.”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Louis Partridge</p>
                    <p>Actor</p>
                </div>


                <div className="bg-[url('src/assets/bgcard3.png')] p-10 max-w-120 -rotate-2 text-center text-[#4E2A1E] hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='text-xl m-5'>“Ordered an anniversary bouquet, and it was stunning! The flowers were fresh, beautifully arranged, and smelled amazing. Fast delivery and great service—definitely ordering again!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Louis Partridge</p>
                    <p>Actor</p>
                </div>


                <div className="bg-[#C15D11] p-10 max-w-120 rotate-1 text-center text-white hover:shadow-lg hover:scale-105 transition duration-300">
                    <p className='text-xl m-5'>“The wedding bouquet was perfect! Fresh, elegant, and lasted for days. Super happy with the arrangement and packaging. Highly recommend!”</p>
                    <p className="mt-5 font-bold text-xl font-veryvogue">Louis Partridge</p>
                    <p>Actor</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
