import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { Service } from '../../types/service';

const defaultServices: Service = {
    title: 'Services',
    description: 'Explore the range of services I offer to bring your ideas to life.',
    services: [],
};

interface ServicesState {
  data: Service;
  setData: (language: string) => Promise<void>;
}

export const useServicesStore = create<ServicesState>((set) => ({
  data: defaultServices,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/services?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const servicesJson = await response.json();
      set({ data: servicesJson });
    } catch (error) {
      console.error('Failed to fetch services data:', error);
      set({ data: defaultServices });
    }
  },
}));

// 👇 Suscribimos el store services info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando services info: ${newLang}`);
    useServicesStore.getState().setData(newLang);
  }
);
