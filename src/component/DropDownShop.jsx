import { useState } from "react";

export default function DropDownShop() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Choose a category");

  const options = ["Popular", "Fresh Flower", "Dummy Flower", "Snack Bouquet"];

  return (
    <div className="relative inline-block w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
      >
        {selected}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#4E2A1E] hover:text-[#FFF5E3] cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
