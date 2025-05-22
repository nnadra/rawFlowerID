import React from 'react'
import PaymentNavbar from '../component/PaymentNavbar'
import CheckoutProduct from '../component/CheckoutProduct'
import DetailPayment from '../component/DetailPayment'
import PaymentMethod from '../component/PaymentMethod'
import ButtonPayment from '../component/ButtonPayment'
import Address from '../component/Address'
import Courier from '../component/Courier'

const CheckoutDetail = () => {
  return (
    <div className='lg:px-15 px-5 py-5 bg-[url("/src/assets/bgreview.png")] overflow-hidden'>
      <PaymentNavbar/>
      <Address/>

      <div className='lg:flex'>
      <CheckoutProduct/>
      <DetailPayment/>
      </div>

      <Courier/>
      <PaymentMethod/>
      <ButtonPayment/>
    </div>
  )
}

export default CheckoutDetail
