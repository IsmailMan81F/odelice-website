export const translations = {
  fr: {
    nav: {
      home: 'ACCUEIL',
      menu: 'MENU',
      about: 'À PROPOS',
      orderNow: 'COMMANDER',
      contact: 'CONTACT',
    },
    hero: {
      title1: 'GOURMAND, JUTEUX',
      title2: 'BURGERS',
      exploreMenu: 'DÉCOUVRIR LE MENU',
    },
    quote: {
      part1: 'LE PUBLIC',
      part2: "A DIT QU'O'DÉLICES",
      part3: 'SERVE DES SAVEURS EXCEPTIONNELLES',
      part4: 'ET UNE QUALITÉ AUTHENTIQUE',
    },
    ribbon: {
      delivery: 'DISPONIBLE EN LIVRAISON À DOMICILE',
    },
    favorites: {
      title1: 'SAVOUREZ NOS',
      title2: 'DÉLICES PRÉFÉRÉS',
      exploreAll: 'VOIR TOUT LE MENU',
    },
    promo: {
      heading1: 'GROS BURGERS.',
      heading2: 'POULET CROUSTILLANT.',
      heading3: 'VRAIES SAVEURS.',
      description:
        'Des burgers juteux et du poulet croustillant préparés à la commande, assaisonnés à la perfection et servis chauds.',
      cta: 'EN SAVOIR PLUS',
    },
    reviews: {
      title1: 'DES CLIENTS QUI',
      title2: "RAFFOLENT DÉJÀ D'O'DÉLICES",
    },
    menuPage: {
      title: 'NOTRE CARTE COMPLÈTE',
      subtitle:
        'PIZZAS ARTISANALES • TACOS GOURMANDS • BURGERS JUTEUX • ASSIETTES COMPLÈTES',
      allItems: 'TOUS LES ARTICLES',
      options: 'OPTIONS',
      orderNow: 'COMMANDER',
      orderDirectly: 'PASSER COMMANDE DIRECTEMENT ?',
      callDirectly:
        'Appelez-nous au 0674 58 37 06 pour commander rapidement à emporter ou en livraison.',
      callToOrder: 'APPELER POUR COMMANDER',
      bottomTitle: 'VOUS AVEZ FAIT VOTRE CHOIX ?',
      bottomSubtitle: 'APPELEZ-NOUS & DÉGUSTEZ TOUT CHAUD',
    },
    aboutPage: {
      title: 'NOTRE HISTOIRE',
      subtitle: 'PRÉPARÉ AVEC PASSION • SAISI À LA PERFECTION',
      welcome: "BIENVENUE CHEZ O'DÉLICES",
      heading: 'DES SAVEURS INTENSES ET FRAÎCHES, CHAQUE JOUR.',
      p1: "Chez O'délices, nous croyons qu'une cuisine d'exception naît d'une passion authentique et d'une exigence de qualité sans compromis. De nos steaks de bœuf frais saisis sur plaque brûlante à notre poulet croustillant mariné selon notre recette secrète, chaque bouchée est une explosion de saveurs.",
      p2: 'Nous rassemblons les gourmands autour de pizzas façonnées à la main, de tacos généreux, de burgers savoureux et d’assiettes complètes préparées pour satisfaire les plus fins palais.',
      feature1Title: 'SAISIE HAUTE TEMPÉRATURE',
      feature1Desc:
        'Des bords dorés et croustillants avec un cœur ultra tendre et juteux à chaque dégustation.',
      feature2Title: 'INGRÉDIENTS FRAIS',
      feature2Desc:
        'Légumes frais, pâte à pizza pétrie chaque jour et sauces maison faites avec amour.',
      feature3Title: 'ÉPICES SIGNATURE',
      feature3Desc:
        'Un mélange exclusif d’épices et de marinades pour une profondeur aromatique incomparable.',
      feature4Title: 'SERVI AVEC FIERTÉ',
      feature4Desc:
        'Un accueil chaleureux, un service rapide et des plats servis bien chauds par une équipe dévouée.',
      visitorGuide: 'GUIDE & INFOS PRATIQUES',
      amenitiesTitle: 'SERVICES, ÉQUIPEMENTS & COMMODITÉS',
      amenitiesSubtitle:
        "TOUT CE QUE VOUS DEVEZ SAVOIR SUR LA RESTAURATION ET LES SERVICES CHEZ O'DÉLICES",
    },
    footer: {
      tagline:
        'Des saveurs audacieuses faites maison, à chaque commande. Préparé avec soin. Servi avec fierté.',
      navigation: 'NAVIGATION',
      location: 'EMPLACEMENT',
      viewInGoogleMaps: 'VOIR SUR GOOGLE MAPS',
      openingHours: "HORAIRES D'OUVERTURE",
      rights: "© O'DÉLICES. TOUS DROITS RÉSERVÉS.",
    },
  },
} as const;

export type Translations = typeof translations.fr;
