import React from "react";

const DetailPayment = () => {
  return (
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] mt-5 lg:p-15 p-5 rounded-2xl bg-white lg:ms-5 w-full">
      <div>
        <h1 className="text-2xl text-[#4E2A1E] mb-5">Product Detail</h1>
        <div className="overflow-x-auto">
          <table className="w-full hidden md:table">
            <thead className="text-end">
              <tr className="text-xl">
                <th className="px-4 py-2 text-left">Produk</th>
                <th className="px-4 py-2">Harga Satuan</th>
                <th className="px-4 py-2">Jumlah</th>
                <th className="px-4 py-2">Subtotal Produk</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, i) => (
                <tr key={i} className="text-xl text-end">
                  <td className="px-4 py-2 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-20 bg-gray-200 overflow-hidden">
                        <img
                          src="/src/assets/gradu-flower.svg"
                          alt="Produk"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h1>Baby Rose Flower</h1>
                    </div>
                  </td>
                  <td className="px-4 py-2">Rp4.000</td>
                  <td className="px-4 py-2">10</td>
                  <td className="px-4 py-2">Rp40.000</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 shadow-sm bg-white text-[#3e1f1f]"
              >
                <div className="flex gap-4 items-center mb-2">
                  <div className="w-20 h-20 bg-gray-200 overflow-hidden rounded">
                    <img
                      src="/src/assets/gradu-flower.svg"
                      alt="Produk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Baby Rose Flower</h2>
                  </div>
                </div>
                <div className="text-sm">
                  <p>
                    Harga Satuan: <strong>Rp4.000</strong>
                  </p>
                  <p>
                    Jumlah: <strong>10</strong>
                  </p>
                  <p>
                    Subtotal: <strong>Rp40.000</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex gap-3 justify-end text-3xl mt-5">
          <h3 className="lg:text-3xl text-lg">Total Pesanan : </h3>
          <h1 className=" lg:text-3xl font-bold">Rp80.000</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailPayment;
