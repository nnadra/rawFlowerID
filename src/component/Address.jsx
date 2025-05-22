import { MapPin, Pin } from 'lucide-react'
import React from 'react'

const Address = () => {
  return (
    <div className='shadow-[0_0_10px_rgba(0,0,0,0.1)] border-t-10 border-[#4E2A1E] lg:p-15 p-5 rounded-2xl bg-white'>
      <div className='flex gap-3'>
        <MapPin color='#4E2A1E' size={30}/>
        <h3 className='text-2xl text-[#4E2A1E]'>Alamat Pengiriman</h3>
      </div>

      <div className='lg:flex justify-between lg:mt-10 mt-5 text-lg'>
        <h1 className='font-bold lg:flex'>Naila Nadra Fahira J <span className='lg:mt-0 mt-5'>(+62) 823456789876</span></h1>
        <p className='font-thin text-[#8D8D8D] lg:mx-5 mt-3 lg:mt-0'>Jl. Raya kerajaan Raya kec.Raya Kel. Raya RT 01/05, Bekasi, Jawa...</p>
        <a href="#" className='underline lg:mt-0 text-[#4080EF]'>Ubah</a>
      </div>
    </div>
  )
}

export default Address
