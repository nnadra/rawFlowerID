import { useState } from 'react';
import Images from '../assets/FlowerBg.png';
import useImageCustom from '../data/ImageCustom'; // custom hook dari zustand atau lainnya

// Data produk bunga
const flowerData = [
  { src: Images, name: 'Red Rose', price: 2000 },
  { src: Images, name: 'White Rose', price: 2500 },
  { src: Images, name: 'Tulip', price: 3000 },
  { src: Images, name: 'Lily', price: 2800 },
  { src: Images, name: 'Sunflower', price: 3500 },
  { src: Images, name: 'Daisy', price: 2200 },
];

// Data tab navigasi
const tabs = [
  { id: 'tab1', label: 'Style' },
  { id: 'tab2', label: 'Paper' },
  { id: 'tab3', label: 'Flower' },
  { id: 'tab4', label: 'Bow' },
  { id: 'tab5', label: 'Additional' },
];

// Komponen kartu produk
const CardItem = ({ item }) => (
  <div className="py-8 px-8 bg-white rounded-2xl shadow-lg flex flex-col items-center">
    {/* Gambar yang bisa di-drag */}
    <img
      src={item.src}
      alt={item.name}
      draggable
      onDragStart={(e) => {
        // Saat di-drag, set data image dan harga
        e.dataTransfer.setData('src', item.src);
        e.dataTransfer.setData('price', item.price);
      }}
      className="w-18 mb-4"
    />
    {/* Nama dan harga bunga */}
    <div className="text-center">
      <h3 className="customproduct text-lg font-bold">{item.name}</h3>
      <p className="price text-lg">Rp. {item.price.toLocaleString('id-ID')}</p>
    </div>
  </div>
);

// Komponen konten tab (menampilkan semua bunga)
const TabContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {flowerData.map((item, idx) => (
      <CardItem key={idx} item={item} />
    ))}
  </div>
);

// Komponen utama
const ComponentCustom = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // state tab aktif
  const images = useImageCustom((state) => state.images); // ambil data gambar yang ditambahkan ke stage

  // Hitung total harga dari gambar yang sudah ditambahkan
  const totalPrice = images.reduce((acc, item) => acc + (item.price || 0), 0);

  // Konten sesuai tab
  const tabContent = {
    tab1: <TabContent />,
    tab2: <div>Tes 2</div>,
    tab3: <div>Tes 3</div>,
    tab4: <div>Tes 4</div>,
    tab5: <div>Tes 5</div>,
  };

  return (
    <div className="bg-[#E5D5B7] h-screen flex flex-col">
      {/* Header dan navigasi tab */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-amber-950 text-center">Custom Bouquet</h1>
        <div className="flex justify-center mt-5 flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-xl font-light rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-950 text-white'
                  : 'text-amber-950/64 hover:text-amber-900'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Konten bunga sesuai tab */}
      <div className="flex-1 overflow-y-auto px-4">{tabContent[activeTab]}</div>

      {/* Total harga dinamis */}
      <div className="p-4">
        <div className="flex justify-between text-2xl">
          <p>Total:</p>
          <p className="font-bold">Rp {totalPrice.toLocaleString('id-ID')}</p>
        </div>
        <button className="w-full mt-3 p-5 rounded-xl bg-amber-950 text-white text-2xl">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ComponentCustom;
