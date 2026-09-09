export interface MenuImageItem {
  id: string;
  image: string;
  alt: string;
}

export interface MenuImageGroup {
  id: string;
  name: string;
  tagline: string;
  items: MenuImageItem[];
}

export const MENU_IMAGE_GROUPS: MenuImageGroup[] = [
  {
    id: 'burgers',
    name: 'BURGERS',
    tagline: 'NOS BURGERS',
    items: [{ id: 'burger-menu', image: '/assets/menu-images/burger/image.png', alt: 'Menu burgers avec les prix' }],
  },
  {
    id: 'pizza',
    name: 'PIZZA',
    tagline: 'NOS PIZZA',
    items: [
      { id: 'pizza-menu-1', image: '/assets/menu-images/pizza/1.png', alt: 'Menu pizza avec les prix' },
      { id: 'pizza-menu-2', image: '/assets/menu-images/pizza/2.png', alt: 'Menu pizza avec les prix' },
    ],
  },
  {
    id: 'plats',
    name: 'PLATS',
    tagline: 'NOS PLATS',
    items: [{ id: 'plats-menu', image: '/assets/menu-images/plats/image.png', alt: 'Menu plats avec les prix' }],
  },
  {
    id: 'tacos',
    name: 'TACOS',
    tagline: 'NOS TACOS',
    items: [
      { id: 'tacos-menu-1', image: '/assets/menu-images/tacos/1.png', alt: 'Menu tacos avec les prix' },
      { id: 'tacos-menu-2', image: '/assets/menu-images/tacos/2.png', alt: 'Menu tacos avec les prix' },
      { id: 'tacos-menu-3', image: '/assets/menu-images/tacos/3.png', alt: 'Menu tacos avec les prix' },
    ],
  },
  {
    id: 'sandwitch',
    name: 'SANDWICHS',
    tagline: 'NOS SANDWICHS',
    items: [{ id: 'sandwitch-menu', image: '/assets/menu-images/sandwitch/image.png', alt: 'Menu sandwichs avec les prix' }],
  },
  {
    id: 'entree',
    name: 'ENTRÉES',
    tagline: 'NOS ENTRÉES',
    items: [{ id: 'entree-menu', image: '/assets/menu-images/entrée/image.png', alt: 'Menu entrées avec les prix' }],
  },
];