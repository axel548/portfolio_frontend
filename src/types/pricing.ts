export interface Pricing {
    title: string;
    description: string;
    plans: {
      type: string;
      price: string;
      description: string;
      features: {
        feature: string;
        available: boolean;
      }[];
      button: string;
    }[];
  }