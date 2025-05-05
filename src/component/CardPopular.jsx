import React from 'react'

const CardPopular = () => {
  return (
    <div className="p-3 mx-3 bg-[url('src/assets/image.png')] w-fit border-2 border-[#4E2A1E] rounded-2xl mb-5">
        {/* Image */}
      <div className='w-full h-90 relative overflow-hidden'>
        <img src="src/assets/popular.png" alt="" className='inset-0 w-full h-full object-cover rounded-2xl border-2 border-[#4E2A1E]' />
      </div>
      {/* Text */}
      <div className='p-3'>
        <h1 className='text-3xl my-1 font-bold text-[#4E2A1E]'>Bunga Warna</h1>
        <p className='text-xl text-[#4E2A1E]'>Letterbox Flowers</p>
        <div className='flex mt-3 justify-between items-center'>
            <p className='text-2xl text-[#4E2A1E]'>Rp 300.000</p>
            <button type="button" className='bg-[#4E2A1E] p-3 text-white rounded-md font-bold'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default CardPopular
