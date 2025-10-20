import { create } from 'zustand';
import { useMenuStore } from './menu.store';
import { Contact } from '../../types/contact';

const defaultContact: Contact = {
    title: 'Contact Me',
    description: 'Feel free to reach out for collaborations or just a friendly chat!',
    info: {
        address: {
            title: 'Location',
            description: '',
            status: true,
        },
        phone: {
            title: 'Phone',
            description: '',
            status: true,
        },
        email: {
            title: 'Email',
            description: '',
            status: true
        },
        linkedin: {
            title: 'LinkedIn',
            description: '',
            status: true
        }
    },
    form: {
        name: 'Name:',
        email: 'Email:',
        subject: 'Subject:',
        message: 'Message:',
        button: 'Send Message'
    }
};

interface ContactState {
  data: Contact;
  setData: (language: string) => Promise<void>;
}

export const useContactStore = create<ContactState>((set) => ({
  data: defaultContact,

  setData: async (language: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/contact?lang=${language}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const contactJson = await response.json();
      set({ data: contactJson });
    } catch (error) {
      console.error('Failed to fetch contact data:', error);
      set({ data: defaultContact });
    }
  },
}));

// 👇 Suscribimos el store contact info a los cambios de idioma del menú
useMenuStore.subscribe(
  (state) => state.language,
  (newLang) => {
    console.log(`Idioma cambiado en el menú, actualizando contact info: ${newLang}`);
    useContactStore.getState().setData(newLang);
  }
);
