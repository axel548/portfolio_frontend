import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { ExperienceEducation } from '../../types/experienceEducation';

const defaultExperienceEducation: ExperienceEducation = {
    experience: {
        title: 'Experience',
        experience: [],
    },
    education: {
        title: 'Education',
        education: [],
    },
};

interface ExperienceEducationState {
  data: ExperienceEducation;
  setData: (language: string) => Promise<void>;
}

export const useExperienceEducationStore = create<ExperienceEducationState>((set) => ({
  data: defaultExperienceEducation,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/experience-education?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const experienceEducationJson = await response.json();
      set({ data: experienceEducationJson });
    } catch (error) {
      console.error('Failed to fetch experience and education data:', error);
      set({ data: defaultExperienceEducation });
    }
  },
}));

// 👇 Suscribimos el store experience and education info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando experience and education info: ${newLang}`);
    useExperienceEducationStore.getState().setData(newLang);
  }
);
