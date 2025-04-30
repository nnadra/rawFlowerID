import React from 'react'

const Kategori = () => {
  const menuItems = ["Fresh Flower", "Dummy Flower", "Snack Bouquet", "Custom Bouquet"];

  return (
    <div>
      <nav className="flex justify-center border-b border-[#33261f] bg-[url('src/assets/imageHeader.png')] bg-cover bg-center">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex-1 text-center py-4 border-x border-[#33261f] italic text-[1.2rem] text-[#443122] font-medium hover:bg-[#583529] hover:text-white cursor-pointer"
        >
          {item}
        </div>
      ))}
    </nav>
    </div>
  )
}

export default Kategori
