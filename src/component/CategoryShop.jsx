import React from 'react'
import CardShop from './CardShop';
import DropDownShop from './DropDownShop';

const CategoryShop = () => {

  return (
    <div className='mt-10'>
      <h1 className='text-5xl font-veryvogue italic text-[#4E2A1E]'>Our Collection</h1>
      <div className='flex justify-end items-center gap-2 text-lg'>Short by : <DropDownShop/></div>
      <div className='mt-10 lg:flex lg:justify-between justify-center'>
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
      </div>
      <div className='mt-10 lg:flex lg:justify-between justify-center'>
        <CardShop/>
        <CardShop/>
        <CardShop/>
        <CardShop/>
      </div>
    </div>
  )
}

export default CategoryShop
