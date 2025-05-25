import { useEffect, useState } from 'react';
import useImageCustom from '../data/ImageCustom'; // custom hook dari zustand atau lainnya
import axiosClient, { generateTabsFromData } from '../utils/helper';
import { useNavigate } from "react-router-dom";

const CardItem = ({ item }) => {

  return (
    <div
      className="py-8 px-8 bg-white rounded-2xl shadow-lg flex flex-col items-center min-w-[150px]"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('src', item.image);
        e.dataTransfer.setData('price', item.harga);
      }}
    >
      <img src={item.image} alt={item.nama} className="w-18 mb-4" />
      <div className="text-center">
        <h3 className="customproduct text-lg font-bold">{item.nama}</h3>
        <p className="price text-lg">Rp {Number(item.harga ?? 0).toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
};

// Komponen konten tab (grid biasa)
const TabContent = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
    {data.map((item, idx) => (
      <CardItem key={idx} item={item} />
    ))}
  </div>
);

// Komponen utama
const ComponentCustom = () => {

  const navigate = useNavigate();

  const [customData, setCustomData] = useState({});
  const [activeTab, setActiveTab] = useState('');
  const [tabs, setTabs] = useState([]);
  const images = useImageCustom((state) => state.images);
  const totalPrice = images.reduce((acc, item) => acc + (item.price || 0), 0);

  useEffect(() => {
    axiosClient.get('api/custom')
      .then((res) => {
        const data = res.data;
        setCustomData(data);
        const tabsArray = generateTabsFromData(data);
        setTabs(tabsArray);
        setActiveTab(tabsArray[0]?.id || '');
      })
      .catch((err) => {
        console.error('Error fetching custom items', err);
      });
  }, []); 
  
  const tabContent = activeTab
  ? tabs.find(tab => tab.id === activeTab)?.type === 'flower'
    ? <TabContent data={customData.flowers?.[activeTab] || []} />
    : <TabContent data={customData[activeTab] || []} />
  : null;

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
      <div className="flex-1 overflow-y-auto px-4">{tabContent}</div>

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

