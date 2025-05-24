import { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useCart } from '../component/CartContext';
import Footer from '../component/Footer';
import toast from 'react-hot-toast';
import axiosClient from '../utils/helper';

export default function DetailProduct() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState(null);
  const [liked, setLiked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  const { addToCart } = useCart();

  const options = ['Ribbon', 'Thanks Card', 'Card holder'];

  useEffect(() => {
    axiosClient.get(`/api/products/${id}/detail`)
      .then((res) => {
        setDetailProduct(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching product detail:", err);
      });
  }, [id]);

  useEffect(() => {
    if (detailProduct?.images?.length > 0) {
      setActiveImg(detailProduct.images[0]);
    }
  }, [detailProduct]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-white">
      <div className="bg-white py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <img
              src={activeImg}
              alt="Main Product"
              className="rounded-xl object-cover w-full h-auto sm:h-[22rem] md:h-[22rem] lg:h-[28rem] xl:h-[30rem]"
            />
            <div className="flex gap-4 flex-wrap">
              {detailProduct?.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`product-${i}`}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-24 rounded-md object-cover cursor-pointer transition-all duration-200 ${
                    activeImg === img ? 'scale-105 ring-2 ring-[#4E2A1E]' : ''
                  }`}
                  onClick={() => setActiveImg(img)}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-5 pt-12">
            <div className="flex gap-2">
              {detailProduct?.popular && (
                <span className="bg-[#4E2A1E] text-white px-3 py-1 rounded-full text-sm">Popular</span>
              )}
              {detailProduct?.category && (
                <span className="bg-[#4E2A1E] text-white px-3 py-1 rounded-full text-sm">
                  {detailProduct.category}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-semibold text-[#4E2A1E]">{detailProduct?.name}</h1>
            <h2 className="text-2xl font-bold text-[#4E2A1E]">
              Rp. {Number(detailProduct?.original_price).toLocaleString('id-ID')}
            </h2>

            <div>
              <h2 className="font-medium text-[#4E2A1E]">Paper color</h2>
              <div className="flex gap-3 mt-2">
                {detailProduct?.colors?.map((color, i) => (
                  <img
                    key={i}
                    src={color.image}
                    alt={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded object-cover border-2 cursor-pointer transition ${
                      selectedColor?.name === color.name ? 'border-[#4E2A1E]' : 'border-transparent'
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-medium text-[#4E2A1E] mt-4">Additional</h2>
              <div className="flex gap-2 mt-2 flex-wrap">
                {options.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => handleSelect(item)}
                    className={`px-3 py-1 rounded border cursor-pointer transition ${
                      selectedItem === item
                        ? 'bg-[#4E2A1E] text-white'
                        : 'text-[#4E2A1E] hover:bg-[#4E2A1E] hover:text-white'
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 ">
              <button
                onClick={async () => {
                  const user = JSON.parse(localStorage.getItem('user') || 'null');
                   if (!user) {
                    toast.error('Silakan login terlebih dahulu yaa 🥹');
                    window.location.href = '/signin';
                    return;
                  }

                  if (!selectedColor) {
                    toast.error('Please select a paper color first!');
                    return;
                  }

                  if (!detailProduct?.id) {
                    toast.error('The product is not ready to be added.');
                    return;
                  }

                  try {
                    await addToCart({ product_id: detailProduct.id, quantity: 1 });

                    toast.success('Add to cart');
                  } catch (err) {
                    toast.error('Failed to add product to cart!');
                    console.error(err);
                  }
                }}
                className="bg-[#4E2A1E] text-white px-10 py-2 rounded-lg text-lg hover:bg-[#3c2218] cursor-pointer transition"
              >
                Add to cart
              </button>

              <button
                onClick={() => setLiked(!liked)}
                className="w-10 h-10 border border-[#4E2A1E] rounded-lg flex items-center justify-center cursor-pointer"
              >
                {liked ? (
                  <FaHeart className="text-red-500 transition-all duration-300 transform scale-110" />
                ) : (
                  <FiHeart className="text-[#4E2A1E] transition-all duration-300 transform hover:scale-110" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="px-6 md:px-20 mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-[#4E2A1E] mb-2">Description</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {detailProduct?.description}
            </p>

            <div className="text-sm space-y-1 text-[#4E2A1E]">
              <p><strong>Type :</strong> {detailProduct?.category || '-'}</p>
              <p>
                <strong>Paper Color :</strong>{' '}
                {detailProduct?.colors?.map((color) => color.name).join(', ') || '-'}
              </p>
              <p><strong>Additional :</strong> Ribbon, Thanks card, Card holder</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-[url('src/assets/bgreview.png')] rounded-lg p-5 text-[#4E2A1E]">
              <h3 className="font-bold text-xl leading-snug">
                Celebrate Special
                <br />
                Moments with
                <br />
                20% Off All
                <br />
                Bouquets!
              </h3>
              <p className="text-xs mt-2 font-semibold">RAWFLOWER.ID</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}