import { useState } from 'react';
import Images from '../assets/FlowerBg.png';
import useImageCustom from '../data/ImageCustom';

// Data untuk tab menu
const tabs = [
  { id: 'tab1', label: 'Style' },
  { id: 'tab2', label: 'Paper' },
  { id: 'tab3', label: 'Flower' },
  { id: 'tab4', label: 'Bow' },
  { id: 'tab5', label: 'Additional' },
];

// Komponen kartu item (bisa dipakai berulang)
const CardItem = () => (
  <div className=" py-8 px-8 bg-white rounded-2xl shadow-lg flex flex-col items-center">
    {/* Gambar yang bisa di-drag */}
    <img
      src={Images}
      alt="Flower"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('src', Images)}
      className="w-18 mb-4"
    />
    {/* Informasi item */}
    <div className="text-center">
      <h3 className="text-lg font-bold">Red Rose</h3>
      <p className="text-lg">Rp. 2.000,00</p>
    </div>
  </div>
);

// Komponen isi tab (menggunakan grid untuk tata letak)
const TabContent = () => (
  <div className="grid grid-cols-2 gap-4">
    {/* Render 6 kartu */}
    {[...Array(6)].map((_, idx) => (
      <CardItem key={idx} />
    ))}
  </div>
);

// Komponen utama
const ComponentCustom = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Tab aktif saat ini

  // Isi konten tiap tab
  const tabContent = {
    tab1: <TabContent />,
    tab2: <div>Tes 2</div>,
    tab3: <div>Tes 3</div>,
    tab4: <div>Tes 4</div>,
    tab5: <div>Tes 5</div>,
  };

  return (
    <div className="bg-[#E5D5B7] h-screen flex flex-col">
      {/* Header dan tab menu */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-amber-950 text-center">Custom Bouquet</h1>
        {/* Tab navigasi */}
        <div className="flex justify-center mt-5 flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-xl font-light rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-950 text-white'
                  : 'text-amber-950/64 hover:text-amber-900'
              }`}
              onClick={() => setActiveTab(tab.id)} // Ganti tab saat diklik
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Konten scrollable */}
      <div className="flex-1 overflow-y-auto px-4">
        {tabContent[activeTab]}
      </div>

      {/* Bagian bawah: harga dan tombol */}
      <div className="p-4">
        <div className="flex justify-between text-2xl">
          <p>Price:</p>
          <p className="font-bold">Rp 300.000</p>
        </div>
        <button className="w-full mt-3 p-5 rounded-xl bg-amber-950 text-white text-2xl">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ComponentCustom;
