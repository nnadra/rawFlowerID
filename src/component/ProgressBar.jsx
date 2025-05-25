
const ProgressBar = () => {
  return (
    <div className="">
      <div className="flex w-full lg:mt-20 mt-10">
        {/* Ordered */}
        <div className="w-full">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-4 border-[#6B3F2D] bg-transparent" />
            <div className="flex-1 h-1 bg-[#6B3F2D]" />
          </div>
        </div>

        {/* Processing */}
        <div className="w-full">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-4 border-[#6B3F2D] bg-transparent" />
            <div className="flex-1 h-1 bg-[#6B3F2D]" />
          </div>
        </div>

        {/* Shipped */}
        <div className="w-full justify-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-4 border-[#6B3F2D] bg-transparent" />
            <div className="flex-1 h-1 bg-[#6B3F2D]" />
          </div>
        </div>

        {/* Delivered (Aktif) */}
        <div className=" justify-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#6B3F2D] text-white flex items-center justify-center text-xl">
              ✓
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full justify-between text-center'>
            <p className="mt-2 text-[#6B3F2D]">Ordered</p>
            <p className="mt-2 text-[#6B3F2D]">Processing</p>
            <p className="mt-2 text-[#6B3F2D]">Shipped</p>
            <p className="mt-2 text-[#6B3F2D]">Delivered</p>
      </div>
    </div>
  );
};

export default ProgressBar;
