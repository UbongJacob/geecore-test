import { create } from "zustand";

interface SideBarStore {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const sidebarStore = create<Readonly<SideBarStore>>((set, get) => ({
  isVisible: false,
  toggleVisibility: () => set(() => ({ isVisible: !get().isVisible })),
}));

export const useSidebarStore = (): SideBarStore => {
  const store = sidebarStore(({ isVisible, toggleVisibility }) => ({
    isVisible,
    toggleVisibility,
  }));
  return store;
};
