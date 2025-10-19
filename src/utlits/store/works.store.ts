import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { Works } from '../../types/works';

const defaultWorks: Works = {
    title: 'Works & Projects',
    description: 'Feel free to reach out for collaborations or just a friendly chat!',
    categories: [],
    projects: [],
};

interface WorksState {
  data: Works;
  setData: (language: string) => Promise<void>;
}

export const useWorksStore = create<WorksState>((set) => ({
  data: defaultWorks,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/works?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const worksJson = await response.json();
      set({ data: worksJson });
    } catch (error) {
      console.error('Failed to fetch works data:', error);
      set({ data: defaultWorks });
    }
  },
}));

// 👇 Suscribimos el store works info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando works info: ${newLang}`);
    useWorksStore.getState().setData(newLang);
  }
);
