import axios from "axios";

// Ambil token dari localStorage
// export const getAuthHeaders = () => {
//   const token = localStorage.getItem("token");
//   return {
//     Authorization: `Bearer ${token}`,
//   };
// };

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Ganti sesuai backend kamu
  withCredentials: true,
});

// ✅ Interceptor nempelin token otomatis
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;

// ✅ Fungsi login
export async function sanctumLogin({ email, password }) {
  await axiosClient.get('/sanctum/csrf-cookie');
  return axiosClient.post('/api/login', { email, password });
}

export const generateTabsFromData = (data) => {
  const flowerCategories = Object.keys(data.flowers || {});

  const flowerTabs = flowerCategories.map(cat => ({
    id: cat,
    label: cat,
    type: 'flower'
  }));

  const otherTabs = [
    { id: 'bows', label: 'Bows', type: 'other' },
    { id: 'papers', label: 'Papers', type: 'other' }
  ];

  return [...flowerTabs, ...otherTabs];
};