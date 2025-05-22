import React from 'react'

const DetailPayment = () => {
    return (
        <div className='shadow-[0_0_10px_rgba(0,0,0,0.1)] p-10 mt-5 rounded-2xl bg-white lg:ms-5 w-full'>
            <div>
                <h1 className='text-2xl text-[#4E2A1E] mb-5'>Product Detail</h1>
                    <table className='w-full'>
                        <thead className="text-end">
                        <tr className='text-xl'>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Harga Satuan</th>
                            <th className="px-4 py-2">Jumlah</th>
                            <th className="px-4 py-2">Subtotal Produk</th>
                        </tr>
                        </thead>

                        <tbody>

                        {/* Ini yang di copy */}
                        <tr className='text-xl text-end'>
                            <td className="px-4 py-2">
                                <div className='flex items-center gap-3'>
                                    <div className='w-20 h-20 bg-gray-200  overflow-hidden'>
                                        <img src="../public/b1.jpg" className='w-full h-full object-cover'/>
                                    </div>
                                    <h1 className=''>Baby Rose Flower </h1>
                                </div>
                            </td>
                            <td className="px-4 py-2">Rp4.000</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">Rp40.000</td>
                        </tr>

                        {/* Ini yang di copy */}
                        <tr className='text-xl text-end'>
                            <td className="px-4 py-2">
                                <div className='flex items-center gap-3'>
                                    <div className='w-20 h-20 bg-gray-200  overflow-hidden'>
                                        <img src="../public/b1.jpg" className='w-full h-full object-cover'/>
                                    </div>
                                    <h1 className=''>Baby Rose Flower </h1>
                                </div>
                            </td>
                            <td className="px-4 py-2">Rp4.000</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">Rp40.000</td>
                        </tr>

                        {/* Ini yang di copy */}
                        <tr className='text-xl text-end'>
                            <td className="px-4 py-2">
                                <div className='flex items-center gap-3'>
                                    <div className='w-20 h-20 bg-gray-200  overflow-hidden'>
                                        <img src="../public/b1.jpg" className='w-full h-full object-cover'/>
                                    </div>
                                    <h1 className=''>Baby Rose Flower </h1>
                                </div>
                            </td>
                            <td className="px-4 py-2">Rp4.000</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">Rp40.000</td>
                        </tr>

                        </tbody>
                    </table>

                    <div className='flex gap-3 justify-end text-3xl mt-5'>
                        <h3>Total Pesanan : </h3>
                        <h1 className='font-bold'>Rp80.000</h1>
                    </div>
            </div>
        </div>
      );
}

export default DetailPayment
