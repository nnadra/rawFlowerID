import React from 'react'

const CheckoutProduct = () => {
  return (
    <div className='mt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] lg:p-10 p-5 rounded-2xl bg-white'>
      <h1 className='text-2xl text-[#4E2A1E] mb-5'>Checkout Product</h1>
      <div className='lg:w-80 w-full h-80 bg-gray-200  overflow-hidden'>
        <img src="/src/assets/b1.jpg" className='w-full h-full object-cover rounded-xl'/>
      </div>
    </div>
  )
}

export default CheckoutProduct
