import { useEffect, useState } from 'react';
import Images from '../assets/FlowerBg.png';
import useImageCustom from '../data/ImageCustom'; // custom hook dari zustand atau lainnya
import axiosClient from '../utils/helper';
import { useNavigate } from "react-router-dom";

// Data produk bunga untuk tiap kategori/tab
// const flowerData = [
//   { src: Images, name: 'Red Rose', price: 2000 },
//   { src: Images, name: 'White Rose', price: 2500 },
//   { src: Images, name: 'Tulip', price: 3000 },
//   { src: Images, name: 'Lily', price: 2800 },
//   { src: Images, name: 'Sunflower', price: 3500 },
//   { src: Images, name: 'Daisy', price: 2200 },
// ];

// // Data produk dried flowers untuk tab2
// const driedFlowersData = [
//   { src: Images, name: 'Lavender', price: 1500 },
//   { src: Images, name: 'Baby Breath', price: 1200 },
//   { src: Images, name: 'Statice', price: 1300 },
// ];

// // Data produk artificial flowers untuk tab3
// const artificialFlowersData = [
//   { src: Images, name: 'Silk Rose', price: 1800 },
//   { src: Images, name: 'Plastic Tulip', price: 1400 },
//   { src: Images, name: 'Fabric Daisy', price: 1600 },
// ];

// // Data produk bow untuk tab4
// const bowData = [
//   { src: Images, name: 'Red Bow', price: 800 },
//   { src: Images, name: 'Gold Bow', price: 1000 },
// ];

// // Data produk wrapping untuk tab5
// const wrappingData = [
//   { src: Images, name: 'Brown Paper', price: 300 },
//   { src: Images, name: 'Cellophane', price: 500 },
// ];

// // Data produk additional untuk tab7
// const additionalData = [
//   { src: Images, name: 'Greeting Card', price: 200 },
//   { src: Images, name: 'Ribbon', price: 150 },
// ];


// Tabs
const tabs = [
  { id: 'flowers', label: 'Flowers' },
  { id: 'bows', label: 'Bows' },
  { id: 'papers', label: 'Papers' },
];

// Komponen kartu produk
const CardItem = ({ item }) => (
  <div className="py-8 px-8 bg-white rounded-2xl shadow-lg flex flex-col items-center min-w-[150px]">
    <img
      src={item.image}
      alt={item.nama}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('src', item.image);
        e.dataTransfer.setData('price', item.harga);
      }}
      className="w-18 mb-4"
    />
    <div className="text-center">
      <h3 className="customproduct text-lg font-bold">{item.nama}</h3>
      <p className="price text-lg">Rp {Number(item.harga ?? 0).toLocaleString('id-ID')}</p>
    </div>
  </div>
);

// Komponen konten tab (grid biasa)
// Komponen konten tab (grid biasa)
const TabContent = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
    {data.map((item, idx) => (
      <CardItem key={idx} item={item} />
    ))}
  </div>
);

// Komponen utama
// Komponen utama
const ComponentCustom = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('flowers');
  const [customData, setCustomData] = useState({
        flowers: [],
        bows: [],
        papers: [],
      });
  const images = useImageCustom((state) => state.images);
  const totalPrice = images.reduce((acc, item) => acc + (item.price || 0), 0);

  useEffect(() => {
    axiosClient.get('api/custom')
      .then((res) => {
        setCustomData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching custom items', err);
      });
  }, []); 
  
  // Mapping data sesuai tab
  const tabContent = {
    flowers: <TabContent data={customData.flowers || []} />,
    bows: <TabContent data={customData.bows || []} />,
    papers: <TabContent data={customData.papers || []} />,
    // tab4: <TabContent data={bowData} />,
    // tab5: <TabContent data={wrappingData} />,
    // tab6: <TabContent data={bowData} />,
    // tab7: <TabContent data={additionalData} />,
  };

  return (
    
    <div className="bg-[#E5D5B7] h-screen flex flex-col">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-amber-950 text-center">Custom Bouquet</h1>

        {/* Tabs navigasi dengan scroll horizontal */}
        <div
          className="my-5 flex space-x-3 overflow-x-auto scrollbar-hide px-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-shrink-0 px-4 py-2 text-lg font-light rounded-lg transition-all whitespace-nowrap ${
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

      {/* Konten tab */}
      <div className="flex-1 overflow-y-auto px-4">{tabContent[activeTab]}</div>

      {/* Total harga dan tombol */}
      <div className="p-4">
        <div className="flex justify-between text-2xl">
          <p>Total:</p>
          <p className="font-bold">Rp {totalPrice.toLocaleString('id-ID')}</p>
        </div>
        <button 
            onClick={() => navigate("/checkout")}
            className="w-full mt-3 p-5 rounded-xl bg-amber-950 text-white text-2xl">
            Checkout
        </button>
      </div>
    </div>
  );
};

export default ComponentCustom;

// INI YG MATI DRAG DROP NYA TP AD BACKENDNNYA
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import useImageCustom from '../data/ImageCustom'; // sesuai dengan state management lo
// import axiosClient from '../utils/helper';



// const CardItem = ({ item }) => (
//   <div className="py-8 px-8 bg-white rounded-2xl shadow-lg flex flex-col items-center min-w-[150px]">
//     <img
//       src={item.image}
//       alt={item.name}
//       draggable
//       onDragStart={(e) => {
//         e.dataTransfer.setData('src', item.image);
//         e.dataTransfer.setData('price', item.harga);
//       }}
//       className="w-18 mb-4"
//     />
//     <div className="text-center">
//       <h3 className="customproduct text-lg font-bold">{item.nama}</h3>
//       <p className="price text-lg">Rp {Number(item.harga ?? 0).toLocaleString('id-ID')}</p>
//     </div>
//   </div>
// );

// const TabContent = ({ data }) => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
//     {data.map((item, idx) => (
//       <CardItem key={idx} item={item} />
//     ))}
//   </div>
// );

// // Tabs cuma 3 sesuai backend
// const tabs = [
//   { id: 'flowers', label: 'Flowers' },
//   { id: 'bows', label: 'Bows' },
//   { id: 'papers', label: 'Papers' },
// ];

// const ComponentCustom = () => {
//   const [activeTab, setActiveTab] = useState('flowers');
//   const [customData, setCustomData] = useState({
//     flowers: [],
//     bows: [],
//     papers: [],
//   });

//   const images = useImageCustom((state) => state.images);
//   const totalPrice = images.reduce((acc, item) => acc + (item.price || 0), 0);

//   useEffect(() => {
//     axiosClient
//       .get('/api/custom')
//       .then((res) => {
//         setCustomData(res.data);
//       })
//       .catch((err) => {
//         console.error('Error fetching custom items:', err);
//       });
//   }, []);

//   // ✅ DEBUG LOG DI SINI
//   console.log('Data aktif:', customData[activeTab]);
//   // atau kalau mau semua:
//   console.log('Semua data:', customData);

//   // Map tab content berdasarkan activeTab yang sesuai
//   const tabContent = {
//     flowers: <TabContent data={customData.flowers || []} />,
//     bows: <TabContent data={customData.bows || []} />,
//     papers: <TabContent data={customData.papers || []} />,
    
//   };
  

//   return (
//     <div className="bg-[#E5D5B7] h-screen flex flex-col">
//       {/* Header */}
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-amber-950 text-center">Custom Bouquet</h1>

//         {/* Tabs */}
//         <div
//           className="my-5 flex space-x-3 overflow-x-auto scrollbar-hide px-2"
//           style={{ WebkitOverflowScrolling: 'touch' }}
//         >
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`flex-shrink-0 px-4 py-2 text-lg font-light rounded-lg transition-all whitespace-nowrap ${
//                 activeTab === tab.id
//                   ? 'bg-amber-950 text-white'
//                   : 'text-amber-950/64 hover:text-amber-900'
//               }`}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Konten tab */}
//       <div className="flex-1 overflow-y-auto px-4">{tabContent[activeTab]}</div>

//       {/* Total harga dan tombol */}
//       <div className="p-4">
//         <div className="flex justify-between text-2xl">
//           <p>Total:</p>
//           <p className="font-bold">Rp {totalPrice.toLocaleString('id-ID')}</p>
//         </div>
//         <button className="w-full mt-3 p-5 rounded-xl bg-amber-950 text-white text-2xl">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ComponentCustom;