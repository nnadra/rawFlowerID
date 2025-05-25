import ComponentCustom from '../component/ComponentCustom.jsx'
import DragAndDrop from '../component/DragAndDrop.jsx'


const Custom = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen overflow-hidden'>
      <div className='w-full lg:w-[65%] h-[60vh] lg:h-full overflow-hidden'>
        <DragAndDrop/>
      </div>
      <div className='w-full lg:w-[35%] h-[40vh] lg:h-full overflow-hidden'>
        <ComponentCustom/>
      </div>
    </div>
  )
}
console.log('Rendering Custom component');
export default Custom
