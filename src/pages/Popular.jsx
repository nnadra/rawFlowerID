import React from 'react'
import CardPopular from '../component/common/CardPopular'
import ButtonDark from '../component/common/ButtonDark'

const Popular = () => {
  return (
    <div className='p-8 bg-[#FFF5E3] overflow-hidden'>
        <div className='flex justify-between items-center'>
            <h1 className='font-veryvogue text-6xl text-[#4E2A1E]'>a <span className='italic'>Popular</span> Section</h1>
            <ButtonDark/>
        </div>

        <div className='flex justify-between pt-10 max-md:flex-col max-md:items-center'>
        <CardPopular/>
        <CardPopular/>
        <CardPopular/>
        <CardPopular/>
        </div>
    </div>
  )
}

export default Popular
