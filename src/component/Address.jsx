import { MapPin, Pin } from 'lucide-react'
import React from 'react'

const Address = () => {
  return (
    <div className='shadow-[0_0_10px_rgba(0,0,0,0.1)] border-t-10 border-[#4E2A1E] p-15 rounded-2xl bg-white'>
      <div className='flex gap-3'>
        <MapPin color='#4E2A1E' size={30}/>
        <h3 className='text-2xl text-[#4E2A1E]'>Alamat Pengiriman</h3>
      </div>

      <div className='flex justify-between mt-10 text-lg'>
        <h1 className='font-bold'>Naila Nadra Fahira J (+62) 823456789876</h1>
        <p className='font-thin text-[#8D8D8D] mx-5'>Jl. Raya kerajaan Raya kec.Raya Kel. Raya RT 01/05, Bekasi, Jawa...</p>
        <a href="#" className='underline text-[#4080EF]'>Ubah</a>
      </div>
    </div>
  )
}

export default Address
