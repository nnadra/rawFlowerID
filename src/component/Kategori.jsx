import{ useEffect, useState } from 'react'

const Kategori = () => {
   const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data); // karena biasanya API Laravel pake "data"
      })
      .catch((err) => console.error('Gagal fetch kategori:', err));
  }, []);

  return (
    <div>
      <nav className="flex justify-center border-b border-[#33261f] bg-[url('src/assets/imageHeader.png')] bg-cover bg-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex-1 text-center py-4 border-x border-[#33261f] italic lg:text-lg md:text-lg text-sm text-[#443122] font-medium hover:bg-[#583529] hover:text-white cursor-pointer"
        >
          {category.name.split(" ").slice(0, 2).join(" ")}
        </div>
      ))}
    </nav>
    </div>
  )
}

export default Kategori
