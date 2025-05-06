import React from 'react'

const NavbarLogin = () => {
  return (
    <div className="bg-[#FFF5E3] px-6 md:px-12 flex items-center justify-between">
    
    
     <div className="flex gap-5 items-center">
        <div className='w-13 h-13 rounded-full bg-amber-950'></div>
        <h1 className='text-xl'>Chika Maharani</h1>
     </div>

       <img src={Logo} alt="logo" className='w-26 h-auto'/>

     <div className="flex gap-4">
        <button><Heart size={30}/></button>
        <button><ShoppingCart size={30}/></button>
      </div>
    
   </div>
  )
}

export default NavbarLogin
