import { Trash } from 'lucide-react'
import React from 'react'

const DragAndDrop = () => {
  return (
    <div>
        <div className=''>
            <div className='h-full flex justify-center items-center py-21 bg-white'>
            <img src="/src/assets/SampleItemDrop.png" alt="" />
            </div>
        </div>
        <div className=' bg-[#FFF5E3] h-full p-5'>
            <div className='flex flex-nowrap overflow-x-auto snap-x snap-mandatory md:max-w-227'>
                <div className='relative snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3 border-2 border-amber-950'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                    <div className='absolute top-0 end-0 w-10 h-10 bg-amber-950 rounded-full text-center flex items-center justify-center text-white'>
                        <Trash className='items-center' size={20}/>
                    </div>
                </div>

                <div className='relative min-w-[160px] max-w-[160px] snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                </div>
                
                <div className='relative min-w-[160px] max-w-[160px] snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                </div>
                <div className='relative min-w-[160px] max-w-[160px] snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                </div>
                <div className='relative min-w-[160px] max-w-[160px] snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                </div>
                <div className='relative min-w-[160px] max-w-[160px] snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                </div>
                <div className='relative min-w-[160px] max-w-[160px] snap-start'>
                    <div className='h-fit py-2 px-5 bg-white rounded-2xl shadow-lg m-3'>
                        <div>
                        <img src="src/assets/FlowerBg.png" className='w-20' />
                        </div>
                        <div className='text-center'>
                        <h3 className='text-lg font-bold whitespace-nowrap'>Red Rose</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DragAndDrop
