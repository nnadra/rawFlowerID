import React, { useEffect, useState } from 'react'
import CardPopular from '../component/CardPopular'
import ButtonDark from '../component/ButtonDark'
import axios from 'axios'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/popular')
    .then(res => {
      console.log(res.data.data)
      setPopularProducts(res.data.data)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className='p-8 bg-[#FFF5E3] overflow-hidden'>
        <div className='flex justify-between items-center'>
            <h1 className='font-veryvogue lg:text-6xl text-2xl text-[#4E2A1E]'>a <span className='italic'>Popular</span> Section</h1>
            <ButtonDark/>
        </div>

        <div className='flex justify-between pt-10 lg:w-fit w-90 overflow-x-auto max-md:items-center'>
        {popularProducts.slice(0,4).map((product) => (
          <CardPopular key={product.id} product = {product} />
        ))}
        </div>
    </div>
  )
}

export default Popular
