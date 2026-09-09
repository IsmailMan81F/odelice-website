import { MenuItem, Testimonial, OpeningHour, Language } from './types';

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  items: MenuItem[];
}

export const MENU_ITEMS_EN: MenuItem[] = [
  {
    id: 'item-1',
    name: 'HERB ROASTED QUARTER PLATTER',
    description: 'Slow-roasted herb chicken leg served with seasonal vegetables, crispy fries, and pan gravy.',
    price: 850,
    rating: 5,
    category: 'platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_XZt4VdPHDWbHYr16OzlIXratPauPY0fwsYsYXMEXHPhRUJPzdDd3UaCRDLcDT_EmJIoio48hPEQqBf8bLTrQ3p1oszpdVAXA6IDYfqTgwSj3oT_vchclfyy_-ARI3jADGB0-a-2WEsflTVRsPT_Ne0M8nfCYvAEwv8iCh31zOD_dQz2yKeI5KCV3LsMCxk5hqw-hzVcPD-OTiui_8v79q9Z7b1JAL4P_zDkeKitLTvZmZh-bzA',
  },
  {
    id: 'item-2',
    name: 'CLASSIC CHICKEN BURGER',
    description: 'Crispy fried chicken fillet, fresh lettuce, and creamy garlic mayo in a soft bun.',
    price: 450,
    rating: 4,
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxCT5iXkNvx1Trn4LY2pMzkSuqye2K1lbujZjG38xUumBdyxwBqxfZ7ITKjAfjmXthWiMqS62Vaf12THChHEYMQUlQSWUCN-dWqy5NdZVRdlmHmjaKVcZaRmRrKGw0K7VAhYcv0pVgvKEFNV2eU1TQnFpXrouVHmxMeX28jkvmWPeDjRc7APRAAZCqI2FQ6IsR31oSU0Q2194r3hJ2jmhy-nKgIX2eFnidsg3qG6XlJLsTHum72Gg',
  },
  {
    id: 'item-3',
    name: 'ZINGER CHICKEN BURGER',
    description: 'Golden-fried spicy chicken, aged cheese, lettuce, and signature hot sauce.',
    price: 650,
    rating: 5,
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWvSqndMr6c40dNvbQ33nzCO_jQw7cITTtxZGOINzZXB_d0YeCkBfKcgX_gQ1A2sf5bQaztf3-SIEJpopLNSIJ3rK_Zz7VoIkGayPym5gnpv6p5BDSMYVQZ4ZgKG68X8h1JSOcFh0j8GfbPoPpirTxKNn2Kugzlj5lnM5RZhrMJCCsr5vVQvXv4oEEpzCQvEjCLakWbU7ZrsmG5Pl4PC674AKutEMAC2kahEvlftIvrEYrEp26OM',
  },
  {
    id: 'item-4',
    name: 'SPICY FRIED CHICKEN',
    description: 'Deep-fried chicken coated in bold, flavourful and spicy house seasoning.',
    price: 700,
    rating: 5,
    category: 'platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQOJJtkcJ5v7KhEc_TfMaQNSr_DukOfK9wy0A-OHViG7JTiNenQLAUZvwBHex4_AptQsR-vFgUpdK6JmSYrYcpqPUq28MjIZFflB27N5WDvGXoW1mBOL2qeRrcrOdq5LQ99iNaouewZ2OKRBmqCo2yQs3CBLexPV8wF8x9L42DcDfyeooso-tfTmYLJRDzjxGRg71vv4iJ4tyo2os1vov2uwrTl_zDP_bZmOAk6RLGvKwfohPC80c',
  },
  {
    id: 'item-5',
    name: 'CLASSIC FRIED CHICKEN PLATTER',
    description: 'Juicy chicken fried to golden perfection with signature spices and fries.',
    price: 950,
    rating: 5,
    category: 'platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduVUD3ryCSreO95AEM2q8BcbZZj4NNC00BtzcUjZx32Gfgw2w8juX8lrLBDfx8cxzPPwZZSTa-dIJVW-UyBnN88TUVPF-ywPA1e-hTssHjNR0W0a-uLryse4_1nosYp0tXWz8PZrosWzPJ7th7jO6NHmfneIhSFH1wlGZehMaPiaab_VZSq4kt1krDSPRZ7wnZX5YOeIK7MUda97pR1LdcBuvVo1W4a5pkLHDstqL0I5EePwjO_A',
  },
  {
    id: 'item-6',
    name: 'GRILLED CHICKEN BURGER',
    description: 'Juicy grilled chicken breast with lettuce, tomato, and house burger sauce.',
    price: 600,
    rating: 5,
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeIM0M8WKEpEAOHnMWo1-41Mw_Miw1QXAKoP7ADXGSNmkYjvjeqizGbtEJKy8vi254Da0XVsy10z86rrrDMD493Fe4Yg0oWOGicvpu8kc4OL4rH-KK0kD2XNgP6iiG0rEjNvOB-T40jaDvsVYkSjeVdgHERfHHYZ5rfXEU0eiWnKJMDlphmTfXn2pFY2JvHTlqPFBB0E4FDQRSPf0qcUfTajFBBWp2p2izeA2pdkUIOoJ7J5lPjjo',
  },
];

export const MENU_ITEMS_FR: MenuItem[] = [
  {
    id: 'item-1',
    name: 'QUART DE POULET RÔTI AUX HERBES',
    description: 'Cuisse de poulet rôti aux herbes servie avec légumes de saison, frites dorées et jus de cuisson.',
    price: 850,
    rating: 5,
    category: 'platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_XZt4VdPHDWbHYr16OzlIXratPauPY0fwsYsYXMEXHPhRUJPzdDd3UaCRDLcDT_EmJIoio48hPEQqBf8bLTrQ3p1oszpdVAXA6IDYfqTgwSj3oT_vchclfyy_-ARI3jADGB0-a-2WEsflTVRsPT_Ne0M8nfCYvAEwv8iCh31zOD_dQz2yKeI5KCV3LsMCxk5hqw-hzVcPD-OTiui_8v79q9Z7b1JAL4P_zDkeKitLTvZmZh-bzA',
  },
  {
    id: 'item-2',
    name: 'BURGER POULET CLASSIQUE',
    description: 'Filet de poulet croustillant, salade croquante et mayonnaise crémeuse à l’ail dans un pain moelleux.',
    price: 450,
    rating: 4,
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxCT5iXkNvx1Trn4LY2pMzkSuqye2K1lbujZjG38xUumBdyxwBqxfZ7ITKjAfjmXthWiMqS62Vaf12THChHEYMQUlQSWUCN-dWqy5NdZVRdlmHmjaKVcZaRmRrKGw0K7VAhYcv0pVgvKEFNV2eU1TQnFpXrouVHmxMeX28jkvmWPeDjRc7APRAAZCqI2FQ6IsR31oSU0Q2194r3hJ2jmhy-nKgIX2eFnidsg3qG6XlJLsTHum72Gg',
  },
  {
    id: 'item-3',
    name: 'BURGER POULET ZINGER',
    description: 'Poulet frit doré et épicé, fromage affiné fondu, salade fraîche et sauce piquante signature.',
    price: 650,
    rating: 5,
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWvSqndMr6c40dNvbQ33nzCO_jQw7cITTtxZGOINzZXB_d0YeCkBfKcgX_gQ1A2sf5bQaztf3-SIEJpopLNSIJ3rK_Zz7VoIkGayPym5gnpv6p5BDSMYVQZ4ZgKG68X8h1JSOcFh0j8GfbPoPpirTxKNn2Kugzlj5lnM5RZhrMJCCsr5vVQvXv4oEEpzCQvEjCLakWbU7ZrsmG5Pl4PC674AKutEMAC2kahEvlftIvrEYrEp26OM',
  },
  {
    id: 'item-4',
    name: 'POULET FRIT ÉPICÉ',
    description: 'Poulet croustillant frit à cœur, enrobé d’un assaisonnement relevé et riche en arômes.',
    price: 700,
    rating: 5,
    category: 'platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQOJJtkcJ5v7KhEc_TfMaQNSr_DukOfK9wy0A-OHViG7JTiNenQLAUZvwBHex4_AptQsR-vFgUpdK6JmSYrYcpqPUq28MjIZFflB27N5WDvGXoW1mBOL2qeRrcrOdq5LQ99iNaouewZ2OKRBmqCo2yQs3CBLexPV8wF8x9L42DcDfyeooso-tfTmYLJRDzjxGRg71vv4iJ4tyo2os1vov2uwrTl_zDP_bZmOAk6RLGvKwfohPC80c',
  },
  {
    id: 'item-5',
    name: 'ASSIETTE POULET FRIT CLASSIQUE',
    description: 'Morceaux de poulet juteux dorés à la perfection avec notre mélange d’épices et frites.',
    price: 950,
    rating: 5,
    category: 'platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduVUD3ryCSreO95AEM2q8BcbZZj4NNC00BtzcUjZx32Gfgw2w8juX8lrLBDfx8cxzPPwZZSTa-dIJVW-UyBnN88TUVPF-ywPA1e-hTssHjNR0W0a-uLryse4_1nosYp0tXWz8PZrosWzPJ7th7jO6NHmfneIhSFH1wlGZehMaPiaab_VZSq4kt1krDSPRZ7wnZX5YOeIK7MUda97pR1LdcBuvVo1W4a5pkLHDstqL0I5EePwjO_A',
  },
  {
    id: 'item-6',
    name: 'BURGER POULET GRILLÉ',
    description: 'Blanc de poulet grillé fondant avec salade verte, tomates mûres et sauce burger maison.',
    price: 600,
    rating: 5,
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeIM0M8WKEpEAOHnMWo1-41Mw_Miw1QXAKoP7ADXGSNmkYjvjeqizGbtEJKy8vi254Da0XVsy10z86rrrDMD493Fe4Yg0oWOGicvpu8kc4OL4rH-KK0kD2XNgP6iiG0rEjNvOB-T40jaDvsVYkSjeVdgHERfHHYZ5rfXEU0eiWnKJMDlphmTfXn2pFY2JvHTlqPFBB0E4FDQRSPf0qcUfTajFBBWp2p2izeA2pdkUIOoJ7J5lPjjo',
  },
];

export const MENU_CATEGORIES_EN: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'PIZZA',
    tagline: 'HAND-STRETCHED DOUGH, RICH SAN MARZANO SAUCE & BOLD TOPPINGS',
    items: [
      {
        id: 'pizza-1',
        name: 'SPICY PEPPERONI FEAST',
        description: 'Loaded with crispy beef pepperoni cups, mozzarella, hot honey drizzle, and fresh oregano.',
        price: 850,
        rating: 5,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pizza-2',
        name: 'MARGHERITA SUPREME',
        description: 'Fresh mozzarella fior di latte, crushed San Marzano tomato sauce, fresh basil and extra virgin olive oil.',
        price: 650,
        rating: 5,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pizza-3',
        name: 'WOOD-FIRED TRUFFLE FUNGHI',
        description: 'Wild forest mushrooms, roasted garlic white sauce, smoked provolone and aromatic truffle glaze.',
        price: 1100,
        rating: 5,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pizza-4',
        name: 'FOUR CHEESE QUATTRO',
        description: 'Melted blend of mozzarella, sharp aged gorgonzola, parmesan crisp and fontina on garlic crust.',
        price: 900,
        rating: 4,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'tacos',
    name: 'TACOS',
    tagline: 'DOUBLE CORN TORTILLAS, CHARRED MEATS & SIGNATURE SALSAS',
    items: [
      {
        id: 'tacos-1',
        name: 'SMOKY BIRRIA BEEF TACOS',
        description: 'Slow-braised beef shank folded in charred tortillas with melted cheese, diced onions, and rich dipping consommé.',
        price: 750,
        rating: 5,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'tacos-2',
        name: 'FLAME CARNE ASADA TACOS',
        description: 'Citrus-marinated flame grilled skirt steak, fresh guacamole, cilantro, pickled radish, and salsa verde.',
        price: 800,
        rating: 5,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'tacos-3',
        name: 'CRISPY BAJA FISH TACOS',
        description: 'Beer-battered golden fish fillets, shredded lime slaw, chipotle crema, and fresh mango salsa.',
        price: 650,
        rating: 4,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'tacos-4',
        name: 'CHIPOTLE PULLED CHICKEN',
        description: 'Tender pulled adobo chicken, charred corn, cotija cheese, pickled red onions and creamy avocado drizzle.',
        price: 550,
        rating: 5,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'burgers',
    name: 'BURGERS',
    tagline: 'BUTTER-TOASTED BRIOCHE, SMASHED PATTIES & MELTED CHEDDAR',
    items: [
      {
        id: 'burger-1',
        name: 'ZINGER CHICKEN BURGER',
        description: 'Golden-fried spicy chicken breast, melted aged cheese, crisp shredded lettuce, and signature spicy sauce.',
        price: 650,
        rating: 5,
        category: 'burgers',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWvSqndMr6c40dNvbQ33nzCO_jQw7cITTtxZGOINzZXB_d0YeCkBfKcgX_gQ1A2sf5bQaztf3-SIEJpopLNSIJ3rK_Zz7VoIkGayPym5gnpv6p5BDSMYVQZ4ZgKG68X8h1JSOcFh0j8GfbPoPpirTxKNn2Kugzlj5lnM5RZhrMJCCsr5vVQvXv4oEEpzCQvEjCLakWbU7ZrsmG5Pl4PC674AKutEMAC2kahEvlftIvrEYrEp26OM',
      },
      {
        id: 'burger-2',
        name: 'CLASSIC CHICKEN BURGER',
        description: 'Crispy fried chicken fillet, fresh leaf lettuce, heirloom tomatoes, and creamy garlic mayo in a soft bun.',
        price: 450,
        rating: 4,
        category: 'burgers',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxCT5iXkNvx1Trn4LY2pMzkSuqye2K1lbujZjG38xUumBdyxwBqxfZ7ITKjAfjmXthWiMqS62Vaf12THChHEYMQUlQSWUCN-dWqy5NdZVRdlmHmjaKVcZaRmRrKGw0K7VAhYcv0pVgvKEFNV2eU1TQnFpXrouVHmxMeX28jkvmWPeDjRc7APRAAZCqI2FQ6IsR31oSU0Q2194r3hJ2jmhy-nKgIX2eFnidsg3qG6XlJLsTHum72Gg',
      },
      {
        id: 'burger-3',
        name: 'DOUBLE SMOKED BACON BURGER',
        description: 'Two smashed prime beef patties, applewood smoked bacon, double American cheddar, and caramelized onion relish.',
        price: 850,
        rating: 5,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'burger-4',
        name: 'TRUFFLE ANGUS BURGER',
        description: 'Seared black angus beef, sautéed swiss brown mushrooms, melted gruyere cheese, and black truffle aioli.',
        price: 950,
        rating: 5,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'platters',
    name: 'PLATTERS',
    tagline: 'GENEROUS PLATTERS SERVED WITH CRISPY FRIES, GRAVY & SIDES',
    items: [
      {
        id: 'plat-1',
        name: 'HERB ROASTED QUARTER PLATTER',
        description: 'Slow-roasted herb chicken quarter leg served with seasonal vegetables, golden fries, and rich pan gravy.',
        price: 850,
        rating: 5,
        category: 'platters',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_XZt4VdPHDWbHYr16OzlIXratPauPY0fwsYsYXMEXHPhRUJPzdDd3UaCRDLcDT_EmJIoio48hPEQqBf8bLTrQ3p1oszpdVAXA6IDYfqTgwSj3oT_vchclfyy_-ARI3jADGB0-a-2WEsflTVRsPT_Ne0M8nfCYvAEwv8iCh31zOD_dQz2yKeI5KCV3LsMCxk5hqw-hzVcPD-OTiui_8v79q9Z7b1JAL4P_zDkeKitLTvZmZh-bzA',
      },
      {
        id: 'plat-2',
        name: 'CLASSIC FRIED CHICKEN PLATTER',
        description: 'Three crispy golden chicken pieces seasoned with house herbs, accompanied by garlic dip, coleslaw and fries.',
        price: 950,
        rating: 5,
        category: 'platters',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduVUD3ryCSreO95AEM2q8BcbZZj4NNC00BtzcUjZx32Gfgw2w8juX8lrLBDfx8cxzPPwZZSTa-dIJVW-UyBnN88TUVPF-ywPA1e-hTssHjNR0W0a-uLryse4_1nosYp0tXWz8PZrosWzPJ7th7jO6NHmfneIhSFH1wlGZehMaPiaab_VZSq4kt1krDSPRZ7wnZX5YOeIK7MUda97pR1LdcBuvVo1W4a5pkLHDstqL0I5EePwjO_A',
      },
      {
        id: 'plat-3',
        name: 'SLOW-SMOKED BBQ RIBS PLATTER',
        description: 'Fall-off-the-bone smoked beef ribs basted in sticky barbecue glaze, served with grilled butter corn and fries.',
        price: 1450,
        rating: 5,
        category: 'platters',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'plat-4',
        name: 'GRILLED RIBEYE STEAK PLATTER',
        description: 'Char-grilled prime ribeye steak cooked to medium rare perfection, topped with herb butter, salad, and potato wedges.',
        price: 1800,
        rating: 5,
        category: 'platters',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export const MENU_CATEGORIES_FR: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'PIZZA',
    tagline: 'PÂTE ÉTIRÉE À LA MAIN, SAUCE SAN MARZANO ET GARNITURES GÉNÉREUSES',
    items: [
      {
        id: 'pizza-1',
        name: 'FESTIN PEPPERONI ÉPICÉ',
        description: 'Garnie de tranches de pepperoni de bœuf croustillant, mozzarella fondante, filet de miel pimenté et origan frais.',
        price: 850,
        rating: 5,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pizza-2',
        name: 'MARGHERITA SUPRÊME',
        description: 'Mozzarella fraîche fior di latte, sauce tomate San Marzano concassée, basilic frais et huile d’olive vierge extra.',
        price: 650,
        rating: 5,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pizza-3',
        name: 'PIZZA TRUFFE ET CHAMPIGNONS',
        description: 'Mélange de champignons sauvages, sauce blanche à l’ail rôti, provolone fumé et glaçage parfumé à la truffe.',
        price: 1100,
        rating: 5,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pizza-4',
        name: 'QUATRE FROMAGES GOURMET',
        description: 'Mélange fondant de mozzarella, gorgonzola affiné, copeaux de parmesan et fontina sur pâte dorée à l’ail.',
        price: 900,
        rating: 4,
        category: 'pizza',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'tacos',
    name: 'TACOS',
    tagline: 'DOUBLES TORTILLAS DE MAÏS, VIANDES GRILLÉES ET SALSAS MAISON',
    items: [
      {
        id: 'tacos-1',
        name: 'TACOS BIRRIA DE BŒUF FUMÉ',
        description: 'Jarret de bœuf mijoté fondant plié dans tortillas grillées avec fromage fondu, oignons émincés et consommé savoureux.',
        price: 750,
        rating: 5,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'tacos-2',
        name: 'TACOS CARNE ASADA FLAMBÉE',
        description: 'Bavette de bœuf marinée aux agrumes et grillée à la flamme, guacamole maison, coriandre, radis et salsa verde.',
        price: 800,
        rating: 5,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'tacos-3',
        name: 'TACOS POISSON CROUSTILLANT BAJA',
        description: 'Filets de poisson panés dorés, salade de chou acidulée au citron vert, crème chipotle et salsa fraîche de mangue.',
        price: 650,
        rating: 4,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'tacos-4',
        name: 'POULET EFFILOCHÉ AU CHIPOTLE',
        description: 'Poulet tendre effiloché à l’adobo, maïs rôti, fromage cotija, oignons rouges marinés et filet d’avocat onctueux.',
        price: 550,
        rating: 5,
        category: 'tacos',
        image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'burgers',
    name: 'BURGERS',
    tagline: 'BRIOCHE TOASTÉE AU BEURRE, STEAKS SMASHÉS ET CHEDDAR FONDU',
    items: [
      {
        id: 'burger-1',
        name: 'BURGER POULET ZINGER',
        description: 'Blanc de poulet croustillant et épicé, fromage affiné fondu, salade croquante et sauce piquante signature.',
        price: 650,
        rating: 5,
        category: 'burgers',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBWvSqndMr6c40dNvbQ33nzCO_jQw7cITTtxZGOINzZXB_d0YeCkBfKcgX_gQ1A2sf5bQaztf3-SIEJpopLNSIJ3rK_Zz7VoIkGayPym5gnpv6p5BDSMYVQZ4ZgKG68X8h1JSOcFh0j8GfbPoPpirTxKNn2Kugzlj5lnM5RZhrMJCCsr5vVQvXv4oEEpzCQvEjCLakWbU7ZrsmG5Pl4PC674AKutEMAC2kahEvlftIvrEYrEp26OM',
      },
      {
        id: 'burger-2',
        name: 'BURGER POULET CLASSIQUE',
        description: 'Filet de poulet croustillant, salade verte, tomates fraîches et mayonnaise crémeuse à l’ail.',
        price: 450,
        rating: 4,
        category: 'burgers',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxCT5iXkNvx1Trn4LY2pMzkSuqye2K1lbujZjG38xUumBdyxwBqxfZ7ITKjAfjmXthWiMqS62Vaf12THChHEYMQUlQSWUCN-dWqy5NdZVRdlmHmjaKVcZaRmRrKGw0K7VAhYcv0pVgvKEFNV2eU1TQnFpXrouVHmxMeX28jkvmWPeDjRc7APRAAZCqI2FQ6IsR31oSU0Q2194r3hJ2jmhy-nKgIX2eFnidsg3qG6XlJLsTHum72Gg',
      },
      {
        id: 'burger-3',
        name: 'BURGER DOUBLE BACON FUMÉ',
        description: 'Deux steaks de bœuf smashés, tranches de bacon fumé, double cheddar fondant et compotée d’oignons.',
        price: 850,
        rating: 5,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'burger-4',
        name: 'BURGER ANGUS À LA TRUFFE',
        description: 'Bœuf Black Angus saisi, champignons bruns sautés, fromage gruyère fondu et aïoli à la truffe noire.',
        price: 950,
        rating: 5,
        category: 'burgers',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'platters',
    name: 'PLATS',
    tagline: 'ASSIETTES GÉNÉREUSES SERVIES AVEC FRITES CROUSTILLANTES, SAUCE & GARNITURES',
    items: [
      {
        id: 'plat-1',
        name: 'QUART DE POULET RÔTI AUX HERBES',
        description: 'Cuisse de poulet fermier rôti aux herbes servie avec légumes de saison, frites dorées et jus de cuisson.',
        price: 850,
        rating: 5,
        category: 'platters',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_XZt4VdPHDWbHYr16OzlIXratPauPY0fwsYsYXMEXHPhRUJPzdDd3UaCRDLcDT_EmJIoio48hPEQqBf8bLTrQ3p1oszpdVAXA6IDYfqTgwSj3oT_vchclfyy_-ARI3jADGB0-a-2WEsflTVRsPT_Ne0M8nfCYvAEwv8iCh31zOD_dQz2yKeI5KCV3LsMCxk5hqw-hzVcPD-OTiui_8v79q9Z7b1JAL4P_zDkeKitLTvZmZh-bzA',
      },
      {
        id: 'plat-2',
        name: 'ASSIETTE POULET FRIT CLASSIQUE',
        description: 'Trois généreux morceaux de poulet croustillants aux épices maison, sauce à l’ail, salade de chou et frites.',
        price: 950,
        rating: 5,
        category: 'platters',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduVUD3ryCSreO95AEM2q8BcbZZj4NNC00BtzcUjZx32Gfgw2w8juX8lrLBDfx8cxzPPwZZSTa-dIJVW-UyBnN88TUVPF-ywPA1e-hTssHjNR0W0a-uLryse4_1nosYp0tXWz8PZrosWzPJ7th7jO6NHmfneIhSFH1wlGZehMaPiaab_VZSq4kt1krDSPRZ7wnZX5YOeIK7MUda97pR1LdcBuvVo1W4a5pkLHDstqL0I5EePwjO_A',
      },
      {
        id: 'plat-3',
        name: 'TRAVERS DE BŒUF FUMÉS BBQ',
        description: 'Travers de bœuf tendres et fondants laqués à la sauce barbecue, servis avec épi de maïs beurré et frites.',
        price: 1450,
        rating: 5,
        category: 'platters',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'plat-4',
        name: 'ASSIETTE ENTRECÔTE GRILLÉE',
        description: 'Belle pièce d’entrecôte grillée à la flamme cuite à point, surmontée de beurre aux herbes, salade et potatoes.',
        price: 1800,
        rating: 5,
        category: 'platters',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: 't1',
    name: 'NADJIB HAFIANE',
    title: 'TASTES SO GOOD!',
    quote:
      '“Tastes so good😍😍😍😍 very cosy place. The service is so much respectful and kind😃😃. I highly recommend their TACOS 😋😋 …”',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 't2',
    name: 'MAVI OCEAN',
    title: 'WELCOMING ATMOSPHERE!',
    quote:
      '“I liked the atmosphere of the place!! Location also is good, at least for me 😅. Anyway, it is very well organized and the STAFF working there are very welcoming and respectful. 👍🏻🥰💝”',
    rating: 4,
    avatar:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 't3',
    name: 'ANIS LOURICHE',
    title: 'LOVED THE TACOS!',
    quote:
      '“I loved their tacos.”',
    rating: 4,
    avatar:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 't4',
    name: 'SAMIR BOUCHEMA',
    title: 'EXCELLENT CUISINE!',
    quote:
      '“Remarkable cuisine with great variety, very careful presentation and a superb atmosphere. A real gem with impeccable service, we will come back very soon!”',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=240&q=80',
  },
];

export const TESTIMONIALS_FR: Testimonial[] = [
  {
    id: 't1',
    name: 'NADJIB HAFIANE',
    title: 'TELLEMENT BON !',
    quote:
      '« Tellement bon😍😍😍😍 endroit très cosy. Le service est très respectueux et chaleureux😃😃. Je recommande vivement leurs TACOS 😋😋 … »',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 't2',
    name: 'MAVI OCEAN',
    title: 'AMBIANCE CHALEUREUSE !',
    quote:
      '« J’ai aimé l’ambiance de l’endroit ! L’emplacement est également agréable, du moins pour moi 😅. L’espace est très bien organisé et le personnel est très accueillant et respectueux. 👍🏻🥰💝 »',
    rating: 4,
    avatar:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 't3',
    name: 'ANIS LOURICHE',
    title: 'J’AI ADORÉ LES TACOS !',
    quote:
      '« J’ai adoré leurs tacos. »',
    rating: 4,
    avatar:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 't4',
    name: 'SAMIR BOUCHEMA',
    title: 'CUISINE EXCELLENTE !',
    quote:
      '« Une cuisine remarquable avec une belle variété, une présentation très soignée et une superbe ambiance. Une véritable pépite avec un service irréprochable, nous reviendrons très vite ! »',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=240&q=80',
  },
];

export const OPENING_HOURS_EN: OpeningHour[] = [
  { day: 'SATURDAY', hours: '11 AM–00.00 AM' },
  { day: 'SUNDAY', hours: '11 AM–00.00 AM' },
  { day: 'MONDAY', hours: '11 AM–00.00 AM' },
  { day: 'TUESDAY', hours: '11 AM–00.00 AM' },
  { day: 'WEDNESDAY', hours: '11 AM–00.00 AM' },
  { day: 'THURSDAY', hours: '11 AM–00.00 AM' },
  { day: 'FRIDAY', hours: '3:30 PM–00.00 AM' },
];

export const OPENING_HOURS_FR: OpeningHour[] = [
  { day: 'SAMEDI', hours: '11 AM–00.00 AM' },
  { day: 'DIMANCHE', hours: '11 AM–00.00 AM' },
  { day: 'LUNDI', hours: '11 AM–00.00 AM' },
  { day: 'MARDI', hours: '11 AM–00.00 AM' },
  { day: 'MERCREDI', hours: '11 AM–00.00 AM' },
  { day: 'JEUDI', hours: '11 AM–00.00 AM' },
  { day: 'VENDREDI', hours: '3:30 PM–00.00 AM' },
];

export function getMenuItems(language?: Language): MenuItem[] {
  return MENU_ITEMS_FR;
}

export function getMenuCategories(language?: Language): MenuCategory[] {
  return MENU_CATEGORIES_FR;
}

export function getTestimonials(language?: Language): Testimonial[] {
  return TESTIMONIALS_FR;
}

export function getOpeningHours(language?: Language): OpeningHour[] {
  return OPENING_HOURS_FR;
}

// Default export values for standard imports
export const MENU_ITEMS = MENU_ITEMS_FR;
export const MENU_CATEGORIES = MENU_CATEGORIES_FR;
export const TESTIMONIALS = TESTIMONIALS_FR;
export const OPENING_HOURS = OPENING_HOURS_FR;
