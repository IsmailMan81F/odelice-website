export type Language = 'en' | 'fr';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
