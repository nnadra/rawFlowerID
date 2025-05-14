import React, { useState } from 'react'
const tabs = [
  { id: "tab1", label: "Style" },
  { id: "tab2", label: "Paper" },
  { id: "tab3", label: "Flower" },
  { id: "tab4", label: "Bow" },
  { id: "tab5", label: "Additional" },
];

const ComponentCustom = () => {
  const [activeTab, setActiveTab] = useState("tab1");
    const [selectedOption, setSelectedOption] = useState("option1");
  
    const tabContent = {
      tab1: (
        <div className='h-150 overflow-y-auto'>
          <div className='flex gap-5 mt-5'>
            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>

            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>
          </div>

          <div className='flex gap-5 mt-5'>
            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>

            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>
          </div>
          
          <div className='flex gap-5 mt-5'>
            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>

            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>
          </div>
          <div className='flex gap-5 mt-5'>
            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>

            <div className='w-fit h-fit py-10 px-15 bg-white rounded-2xl shadow-lg'>
              <div className='max-w-35 max-h-35'>
                <img src="src/assets/FlowerBg.png" alt=""/>
              </div>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>Red Rose</h3>
                <p className='text-md'>Rp. 2.000,00</p>
              </div>
            </div>
          </div>
        </div>
        
      ),
      tab2: (
        <div>
          Tes 2
        </div>
      ),
      tab3: (
        <div>
          Tes 3
        </div>
      ),
      tab4: (
        <div>
          Tes 4
        </div>
      ),
      tab5: (
        <div>
          Tes 5
        </div>
      ),
    };

  return (
    <div className='bg-[#E5D5B7]'>
        <div className='p-10'>
            <h1 className='text-3xl my-7 font-bold text-amber-950'>Custom Boquet</h1>
        <div className='mt-5'>
          <div className='flex items-center flex-row'>
            <div className='flex'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`mt-5 lg:mt-0 me-4 px-5 py-3 text-xl font-semibold rounded-lg transition-all ease-in delay-100 ${
                    activeTab === tab.id
                      ? "bg-amber-950 text-white"
                      : "text-amber-950/64 hover:text-amber-900"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-10'>{tabContent[activeTab]}</div>
        </div>
      </div>
      <div className='bg-[#E5D5B7] p-5'>
          <div className='flex justify-between'>
            <p className='text-2xl'>Price: </p>
            <p className='text-2xl font-bold'>Rp 300.000</p>
          </div>
          <button className='w-full h-fit p-5 mt-3 rounded-xl bg-amber-950 text-white text-2xl'>Add to cart</button>
      </div>
    </div>
  )
}

export default ComponentCustom
