import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMainPageStore = create(
  persist(
    // eslint-disable-next-line no-unused-vars
    (set, get) => ({
      mainPageLayouts: "",
      setMainPageLayouts: (layout) => set({ mainPageLayouts: layout }),
    }),
    {
      name: "mainPageLayouts", // unique name
      getStorage: () => localStorage,
    }
  )
);
