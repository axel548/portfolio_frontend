import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { About } from '../../types/about';

const defaultAbout: About = {
    title: 'About me',
    description: 'I am a passionate developer with a love for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code.',
    button: 'Contact Me',
};

interface AboutState {
  data: About;
  setData: (language: string) => Promise<void>;
}

export const useAboutStore = create<AboutState>((set) => ({
  data: defaultAbout,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/about?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const aboutJson = await response.json();
      set({ data: aboutJson });
    } catch (error) {
      console.error('Failed to fetch about data:', error);
      set({ data: defaultAbout });
    }
  },
}));

// 👇 Suscribimos el store about info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando about info: ${newLang}`);
    useAboutStore.getState().setData(newLang);
  }
);