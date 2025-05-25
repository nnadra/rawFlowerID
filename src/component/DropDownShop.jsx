import { useEffect, useState } from "react";
import axiosClient from "../utils/helper";

export default function DropDownShop() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Choose a category");
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
      axiosClient.get('/api/categories')
        .then((response) => {
        setCategories(response.data.data);  // Sesuaikan dengan struktur data dari backend
        })
        .catch((err) => console.error('Gagal fetch kategori:', err));
    }, []);
  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
      >
        {selected}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(category);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#4E2A1E] hover:text-[#FFF5E3] cursor-pointer"
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
