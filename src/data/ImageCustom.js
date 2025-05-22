

//buat kirim data antar halaman jadi pake zustand
import { create } from 'zustand';

const useImageCustom = create((set) => ({
  images: [],
  addImage: (img) => set((state) => ({ images: [...state.images, img] })),
  removeImage: (index) =>
    set((state) => ({
      images: state.images.filter((_, i) => i !== index),
    })),
    clearImages: () => set({ images: [] }) //buat reset semua gambar custom
}));

export default useImageCustom;

