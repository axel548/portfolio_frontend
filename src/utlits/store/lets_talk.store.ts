import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { LetsTalk } from '../../types/letsTalk';

const defaultLetsTalk: LetsTalk = {
    title: 'Let’s Talk',
    description: 'I am open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through the contact form or via email. I look forward to connecting with you!',
    button: 'Contact Me',
};

interface LetsTalkState {
  data: LetsTalk;
  setData: (language: string) => Promise<void>;
}

export const useLetsTalkStore = create<LetsTalkState>((set) => ({
  data: defaultLetsTalk,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/lets-talk?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const letsTalkJson = await response.json();
      set({ data: letsTalkJson });
    } catch (error) {
      console.error('Failed to fetch lets talk data:', error);
      set({ data: defaultLetsTalk });
    }
  },
}));

// 👇 Suscribimos el store lets talk info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando lets talk info: ${newLang}`);
    useLetsTalkStore.getState().setData(newLang);
  }
);
