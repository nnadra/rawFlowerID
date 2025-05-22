import { create } from 'zustand';

const useImageCustom = create((set) => ({
  images: [],
  addImage: (image) =>
    set((state) => ({ images: [...state.images, image] })),
  clearImages: () => set({ images: [] }),
}));

export default useImageCustom;
