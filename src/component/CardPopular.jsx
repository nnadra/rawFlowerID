import React from 'react'

const CardPopular = ({ product }) => {
  return (
    <div className="p-3 mx-3 bg-[url('src/assets/image.png')] border-2 border-[#4E2A1E] rounded-2xl mb-5 flex flex-col justify-between min-h-[460px] w-70">
      
      {/* Gambar Produk */}
      <div className="w-full h-60 relative overflow-hidden rounded-2xl border-2 border-[#4E2A1E]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten Teks */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-bold text-[#4E2A1E] line-clamp-1">
          {product.name}
        </h1>
        <p className="text-[#4E2A1E] text-sm line-clamp-1">
          {product.category?.name}
        </p>

        {/* Harga & Tombol */}
        <div className="mt-auto lg:flex items-center justify-between pt-3">
          <p className="text-lg text-[#4E2A1E] font-semibold">
            Rp {Number(product.original_price).toLocaleString('id-ID')}
          </p>
          <button
            type="button"
            className="bg-[#4E2A1E] px-3 py-2 lg:w-fit w-45 text-white text-sm rounded-md font-bold"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPopular
