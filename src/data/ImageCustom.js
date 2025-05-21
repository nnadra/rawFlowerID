//buat kirim data antar halaman jadi pake zustand
import { create } from 'zustand';

const useImageCustom = create((set) => ({
  images: [],
  addImage: (image) => set((state) => ({
  images: [...state.images, image],
    })),
  removeImage: (index) =>
    set((state) => ({
      images: state.images.filter((_, i) => i !== index),
    })),
}));

export default useImageCustom;

