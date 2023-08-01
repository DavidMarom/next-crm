import { create } from 'zustand';

const usePopupStore = create((set) => ({
  id: 0,
  setId: (id) => set(() => ({ id: id })),
}));

export default usePopupStore;
