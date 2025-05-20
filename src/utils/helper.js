import axios from "axios";

// Ambil token dari localStorage
export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Ganti sesuai backend kamu
  withCredentials: true,
});

export default axiosClient;
