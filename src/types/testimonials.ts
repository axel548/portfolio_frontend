export interface Testimonial {
    title: string;
    description: string;
    testimonials: {
      name: string;
      role: string;
      company: string;
      image: string;
      description: string;
    }[];
  }