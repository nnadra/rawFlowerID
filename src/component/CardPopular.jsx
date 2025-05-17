import React from 'react'

const CardPopular = ({product}) => {
  // const imageUrl = `http://localhost:8000/storage/products/${product.images?.[0] || 'default.jpg'}`

  return (
    <div className="p-3 mx-3 bg-[url('src/assets/image.png')] w-full border-2 border-[#4E2A1E] rounded-2xl mb-5">
        {/* Image */}
      <div className='w-full lg:h-90 h-50 relative overflow-hidden'>
        {/* product diambilnya dri backend */}
        <img src={product.images[0]} alt={product.name} className='inset-0 w-full h-full object-cover rounded-2xl border-2 border-[#4E2A1E]' />
      </div>
      {/* Text */}
      <div className='p-3'>
        <h1 className='lg:text-3xl text-xl my-1 font-bold text-[#4E2A1E]'>{product.name}</h1>
        <p className='lg:text-xl text-[#4E2A1E]'>{product.category?.name}</p>
        <div className='flex mt-3 justify-between items-center'>
            <p className='lg:text-2xl text-lg text-[#4E2A1E]'>Rp {Number(product.original_price).toLocaleString('id-ID')}</p>
            <button type="button" className='bg-[#4E2A1E] p-2 text-sm lg:p-3 text-white rounded-md font-bold'>Detail</button>
        </div>
      </div>
    </div>
  )
}

export default CardPopular
