import React from "react";

const CardProgress = () => {
  return (
    <div className="border-4 border-[#703B2B]/30 lg:p-10 p-5 rounded-2xl text-[#703B2B] lg:mt-20 mt-10">
      <div className="lg:flex items-center mb-10">
        <div className="lg:w-50 w-full h-50 me-10">
          <img
            src="/src/assets/b1.jpg"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <div className="lg:flex items-center">
            <h1 className="lg:text-4xl text-2xl lg:mt-0 mt-5 me-10 text-[#703B2B]">
              Sunny Flower Bouquet
            </h1>
            <h1 className="lg:text-2xl text-xl">Rp. 350.000</h1>
          </div>
          <p className="text-lg mt-5 text-[#703B2B]">
            Transaction ID: <span className="font-bold">358990320</span>
          </p>
          <p className="text-lg text-[#703B2B]">
            QTY : <span className="font-bold">Custom Bouquet</span>
          </p>
          <p className="text-lg text-[#703B2B]">
            Type: <span className="font-bold">Brown Scrap Bouquet</span>
          </p>
        </div>
      </div>
      <div className="h-1 w-full bg-[#703B2B]/30" />

      <div className="lg:my-10 my-5 lg:flex justify-between">
        <div>
          <h1 className="text-2xl hidden lg:block">Shipping Address</h1>
          <h3 className="text-xl font-bold mt-3">Naila Nadra</h3>
          <p className="max-w-80 lg:text-lg text-sm">
            123 Maple Street, Apartment 4BDowntown District, SpringfieldIllinois
            62704United States of America
          </p>
          <p className="lg:text-lg text-sm mb-3">+1 555-678-9101</p>
        </div>
        <div className="lg:w-70">
          <h1 className="text-2xl">
            Paid with <span className="font-bold">BCA</span>
          </h1>
          <div className="flex justify-between text-lg mt-5">
            <p>Subtotal</p>
            <p className="font-bold">Rp 350.000</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Shipping</p>
            <p className="font-bold">Rp 10.000</p>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-[#703B2B]/30" />

      <div className="lg:my-10 my-5 flex justify-between lg:text-5xl text-xl">
        <h1>Total ( 1 Item)</h1>
        <h1 className="font-bold">Rp 360.000</h1>
      </div>
    </div>
  );
};

export default CardProgress;
