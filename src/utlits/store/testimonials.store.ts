import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { Testimonial } from '../../types/testimonials';

const defaultTestimonial: Testimonial = {
    title: 'Testimonials',
    description: 'What clients are saying about me',
    testimonials: [],
};

interface TestimonialState {
  data: Testimonial;
  setData: (language: string) => Promise<void>;
}

export const useTestimonialStore = create<TestimonialState>((set) => ({
  data: defaultTestimonial,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/testimonials?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const testimonialsJson = await response.json();
      set({ data: testimonialsJson });
    } catch (error) {
      console.error('Failed to fetch testimonials data:', error);
      set({ data: defaultTestimonial });
    }
  },
}));

// 👇 Suscribimos el store works info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando testimonials info: ${newLang}`);
    useTestimonialStore.getState().setData(newLang);
  }
);
