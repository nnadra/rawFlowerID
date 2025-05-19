import React from 'react'
import ComponentCustom from '../component/ComponentCustom.jsx'
import DragAndDrop from '../component/DragAndDrop.jsx'


const Custom = () => {
  return (
    <div className='lg:flex justify-between overflow-hidden'>
      <div className=' flex-1 bg-white'>
        <DragAndDrop/>
      </div>
      <div className=''>
        <ComponentCustom/>
      </div>
    </div>
  )
}

export default Custom
