import { create } from 'zustand';
import { useMenuStore } from './menu.store';

interface GeneralState {
  data: any | null;
  setData: (language: string) => Promise<void>;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  data: null,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/general?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const generalJson = await response.json();
      set({ data: generalJson });
    } catch (error) {
      console.error('Failed to fetch general data:', error);
      set({ data: null });
    }
  },
}));

// 👇 Suscribimos el store general a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando general: ${newLang}`);
    useGeneralStore.getState().setData(newLang);
  }
);
