import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { Pricing } from '../../types/pricing';

const defaultPricing: Pricing = {
    title: 'Pricing Plans',
    description: 'Choose a plan that fits your needs.',
    plans: [],
};

interface PricingState {
  data: Pricing;
  setData: (language: string) => Promise<void>;
}

export const usePricingStore = create<PricingState>((set) => ({
  data: defaultPricing,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/pricing?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const pricingJson = await response.json();
      set({ data: pricingJson });
    } catch (error) {
      console.error('Failed to fetch pricing data:', error);
      set({ data: defaultPricing });
    }
  },
}));

// 👇 Suscribimos el store pricing info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando pricing info: ${newLang}`);
    usePricingStore.getState().setData(newLang);
  }
);
