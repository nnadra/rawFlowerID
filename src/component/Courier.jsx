
const Courier = () => {
  return (
    <div className="">
  <div className="flex flex-col lg:flex-row shadow-[0_0_10px_rgba(0,0,0,0.1)] p-6 md:p-10 mt-5 rounded-2xl bg-white w-full gap-6 lg:justify-between">
    
    {/* Notes */}
    <div className="lg:w-1/2">
      <p className="text-xl mb-2">Notes:</p>
      <input
        type="text"
        placeholder="*Messages are optional"
        className="placeholder-neutral-400 bg-white border-2 rounded-lg border-neutral-600 p-4 w-full lg:w-90"
      />
    </div>

    {/* Shipping Option */}
    <div className="lg:w-1/2 flex flex-col gap-4">
      <h1 className="text-xl">Shipping Option:</h1>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex gap-4">
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src="https://images.seeklogo.com/logo-png/13/2/tiki-jne-logo-png_seeklogo-139992.png"
              alt="JNE Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="font-semibold">JNE Express</h1>
            <p>
              estimated arrival:{" "}
              <span className="font-bold">8 - 10 Mei</span>
            </p>
            <div className="text-lg lg:hidden block font-bold sm:text-start">Rp 5.000</div>
            <a href="#" className="text-blue-500 underline">Ubah</a>
          </div>
        </div>
        <div className="text-lg hidden lg:block font-bold text-end sm:text-start">Rp 5.000</div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Courier
