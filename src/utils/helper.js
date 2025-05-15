import axios from "axios";

// Ambil token dari localStorage
export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

// Fungsi add to cart
// export const addToCart = async (product) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/api/cart",
//       {
//         product_id: product.id,
//         quantity: 1,
//       },
//       {
//         headers: getAuthHeaders(),
//       }
//     );
//     console.log("Berhasil nambah ke cart");
//     return response.data;
//   } catch (err) {
//     console.error("Gagal nambah ke cart", err);
//     throw err;
//   }
// };