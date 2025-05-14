import React from 'react'
import ComponentCustom from '../component/ComponentCustom'
import DragAndDrop from '../component/DragAndDrop'


const Custom = () => {
  return (
    <div className='lg:flex overflow-hidden'>
      <div className=''>
        <DragAndDrop/>
      </div>
      <div className=''>
        <ComponentCustom/>
      </div>
    </div>
  )
}

export default Custom
