import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { PersonalInfo } from '../../types/personalInfo';

const defaultPersonalInfo: PersonalInfo = {
  hero: { name: '', description: '', linkedin: '', github: '' },
  summary: {
    greeting: 'Hello There!',
    description: 'Welcome to my personal portfolio website.',
    cv_button: { url: '#', label: 'Download CV' },
    available_to_freelance: { status: true, label: 'Available for Freelancing' },
  },
  company: { title: 'Company I Worked With', companies: [] },
};

interface PersonalnfoState {
  data: PersonalInfo;
  setData: (language: string) => Promise<void>;
}

export const usePersonalnfoStore = create<PersonalnfoState>((set) => ({
  data: defaultPersonalInfo,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/personal-info?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const personalInfoJson = await response.json();
      set({ data: personalInfoJson });
    } catch (error) {
      console.error('Failed to fetch personal info data:', error);
      set({ data: defaultPersonalInfo });
    }
  },
}));

// 👇 Suscribimos el store personal info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando personal info: ${newLang}`);
    usePersonalnfoStore.getState().setData(newLang);
  }
);
