import React from 'react'

const Courier = () => {
  return (
    <div className=''>
      <div className='lg:flex shadow-[0_0_10px_rgba(0,0,0,0.1)] p-10 mt-5 rounded-2xl bg-white w-full flex justify-between'>
        <div className=''>
            <p className='text-xl'>Notes: </p>
            <input type="text" placeholder='*Messages its optional' className='placeholder-neutral-400 bg-white border-2 rounded-lg border-neutral-600 p-5 w-full lg:w-fit' />
        </div>
        
        <div className='lg:flex'>
            <h1 className='mx-5'>Shipping Option :</h1>
            <div className='flex'>
                <div className='w-20 h-20 me-3'><img src="https://images.seeklogo.com/logo-png/13/2/tiki-jne-logo-png_seeklogo-139992.png" alt="" /></div>
                <div>
                    <h1>JNE Express</h1>
                    <p>estimated arrival : <span className='font-bold'>8 - 10 Mei</span></p>
                </div>
                <a href="#" className='text-blue-400 underline mx-10'>Ubah</a>
            </div>
            <h1 className='font-bold'>Rp 5.000</h1>
        </div>
      </div>
    </div>
  )
}

export default Courier
