import React, { useState } from 'react'

const tabs = [
  { id: "tab1", label: <img src="https://antinomi.org/wp-content/uploads/2022/03/logo-gopay-vector.png" alt="Gopay" className="w-20" /> },
  { id: "tab2", label: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png" alt="Qris" className="w-20" /> },
  { id: "tab3", label: "Bank Transfer" },
];

const PaymentMethod = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedOption, setSelectedOption] = useState("option1");

  const tabContent = {
    tab1: (
      <div>
        <h1 className='mb-3 text-xl font-bold'>Step Gopay Payment</h1>
        <p className='mb-2'>1. Click on the <span className='font-bold'>"Order"</span> button to make payment.</p>
        <p className='mb-2'>2. Scan the QR Code (if on desktop) or get redirected to Gojek or Gopay app (if on mobile).</p>
        <p className='mb-2'>3. Open Gojek App, tap Pay (if on mobile).</p>
        <p className='mb-2'>4. Scan the QR or confirm payment details (if on desktop).</p>
        <p className='mb-2'>5. Tap “Pay” and enter your GoPay PIN.</p>
        <p className='mb-2'>6. Done! Payment successful.</p>
      </div>
    ),
    tab2: (
      <div>
        <h1 className='mb-3 text-xl font-bold'>Step QRIS Payment</h1>
        <p className='mb-2'>1. Click on the <span className='font-bold'>"Order"</span> button to make payment.</p>
        <p className='mb-2'>2. Scan the QR Code shown on screen using any e-wallet or banking app that supports QRIS.</p>
        <p className='mb-2'>3. Confirm payment details in your app.</p>
        <p className='mb-2'>4. Tap “Pay” and enter your PIN if needed.</p>
        <p className='mb-2'>5. Done! Payment confirmed.</p>
      </div>
    ),
    tab3: (
      <div>
        <h1 className='mb-5 text-xl font-bold'>Choose Your Bank</h1>
        <div className="flex items-center gap-2 my-5">
          <input
            type="radio"
            name="payment"
            value="option1"
            className="scale-150 accent-amber-800"
            checked={selectedOption === "option1"}
            onChange={() => setSelectedOption("option1")}
          />
          <div className='w-40'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" alt="" /></div>
        </div>
       
        <div className="flex items-center gap-2 my-5">
          <input
            type="radio"
            name="payment"
            value="option2"
            className="scale-150 accent-amber-800"
            checked={selectedOption === "option1"}
            onChange={() => setSelectedOption("option1")}
          />
          <div className='w-40'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png" alt="" /></div>
        </div>
       
        <div className="flex items-center gap-2 my-5">
          <input
            type="radio"
            name="payment"
            value="option3"
            className="scale-150 accent-amber-800"
            checked={selectedOption === "option1"}
            onChange={() => setSelectedOption("option1")}
          />
          <div className='w-40'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png" alt="" /></div>
        </div>
       
      </div>
    ),
  };

  return (
    <div className='mt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] p-10 rounded-2xl bg-white'>
      <div className='flex items-center'>
        <h1 className='me-10 text-amber-900 text-xl'>Payment Method</h1>
        <div className='flex flex-wrap'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`mt-5 lg:mt-0 mx-5 py-2 font-semibold text-amber-950 border-2 p-5 rounded-lg transition-all ease-in delay-100 ${
                activeTab === tab.id
                  ? "border-amber-950"
                  : "text-gray-400 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-10'>{tabContent[activeTab]}</div>
      <div className="mt-10 flex justify-end w-full">
        <div>
          <div className="flex items-center max-w-100 gap-28 mt-2 ">
            <p className="text-2xl text-[#8D8D8D]">Product Subtotal</p>
            <p className="text-2xl">Rp80.000</p>
          </div>
          <div className="flex items-center max-w-100 gap-26 mt-2 ">
            <p className="text-2xl text-[#8D8D8D]">Shipping Subtotal</p>
            <p className="text-2xl">Rp80.000</p>
          </div>
          <div className="flex items-center max-w-120 gap-26 mt-2 ">
            <p className="text-2xl text-[#8D8D8D]">Total Payment</p>
            <p className="text-3xl font-bold text-[#4E2A1E]">Rp80.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
