import { create } from 'zustand';

interface MenuState {
  language: string;
  data: any | null;
  setData: (language: string) => Promise<void>;
  setLanguage: (language: string) => void;
}


export const useMenuStore = create<MenuState>((set) => ({
  language : 'es',
  data: null,
  setData: async (language) => {
    try {
      language = language || 'es';
      const response = await fetch('http://localhost:4000/api/languages?lang=' + language);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const menuJson = await response.json();
      console.log('Fetched menu data:', menuJson);
      set({ data: menuJson });
    } catch (error) {
      console.error('Failed to fetch menu data:', error);
      set({ data: null });
    }
  },
  setLanguage: (language: string) => set({ language})
}));
