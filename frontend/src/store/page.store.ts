import { create } from 'zustand';

interface PageStore {
  page: string;
  location: string;
  setPage: (page: string) => void;
  setLocation: (location: string) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  page: 'Dashboard',
  location: '/',
  setPage: (page: string) => set({ page }),
  setLocation: (location: string) => set({ location }),
}));
