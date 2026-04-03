// ============================================================
// DONNÉES PRODUITS — AizenTech
// ============================================================
// Images depuis Unsplash (libres de droits) — remplacez par vos vraies photos
// Format: { brand, name, img, colors:[{name,hex}], memory:[...], price, oldPrice, specs:{}, badge, rating, reviews, stock, cat, desc }

const products = [
  // ——— APPLE ———
    {
    brand: 'Apple', name: 'iPhone 17 Pro Max', cat: 'Apple',
    img: 'image/17 PM2.JPG',
    colors: [
      { name: 'Titane naturel', hex: '#C4B9A8' },
      { name: 'Titane noir', hex: '#2D2D2D' },
      { name: 'Titane blanc', hex: '#E8E4DC' },
      { name: 'Titane désert', hex: '#C2956C' },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    price: 1199, oldPrice: null,
    specs: { Écran: '6.9" Super Retina XDR', Puce: 'A18 Pro', Caméra: '48 MP ProRAW', Batterie: '4685 mAh', OS: 'iOS 26', '5G': 'Oui' },
    badge: 'new', rating: 4.9, reviews: 2341, stock: 'in',
    desc: 'L\'iPhone le plus avancé jamais conçu. Puce A18 Pro, système de caméra Pro et écran ProMotion 120Hz.'
  },
  {
    brand: 'Apple', name: 'iPhone 16 Pro Max', cat: 'Apple',
    img: 'image/16 PM.JPG',
    colors: [
      { name: 'Titane naturel', hex: '#C4B9A8' },
      { name: 'Titane noir', hex: '#2D2D2D' },
      { name: 'Titane blanc', hex: '#E8E4DC' },
      { name: 'Titane désert', hex: '#C2956C' },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    price: 1199, oldPrice: null,
    specs: { Écran: '6.9" Super Retina XDR', Puce: 'A18 Pro', Caméra: '48 MP ProRAW', Batterie: '4685 mAh', OS: 'iOS 18', '5G': 'Oui' },
    badge: 'new', rating: 4.9, reviews: 2341, stock: 'in',
    desc: 'L\'iPhone le plus avancé jamais conçu. Puce A18 Pro, système de caméra Pro et écran ProMotion 120Hz.'
  },
  {
    brand: 'Apple', name: 'iPhone 16 plus', cat: 'Apple',
    img: 'image/16 plus.JPG',
    colors: [
      { name: 'Noir', hex: '#1C1C1E' },
      { name: 'Blanc', hex: '#F2F2F7' },
      { name: 'Rose', hex: '#F4A0B5' },
      { name: 'Bleu', hex: '#4A90D9' },
      { name: 'Vert', hex: '#5AC8A0' },
    ],
    memory: ['128 Go', '256 Go', '512 Go'],
    price: 899, oldPrice: null,
    specs: { Écran: '6.1" Super Retina XDR', Puce: 'A18', Caméra: '48 MP', Batterie: '3561 mAh', OS: 'iOS 26', '5G': 'Oui' },
    badge: 'new', rating: 4.7, reviews: 1123, stock: 'in',
    desc: 'La nouvelle génération iPhone avec la puce A18, un superbe appareil photo 48MP et Dynamic Island.'
  },
  {
    brand: 'Apple', name: 'iPhone 15', cat: 'Apple',
    img: 'image/15 simple.JPG',
    colors: [
      { name: 'Noir', hex: '#2C2C2E' },
      { name: 'Jaune', hex: '#FFD60A' },
      { name: 'Rose', hex: '#FF9FAD' },
      { name: 'Vert', hex: '#4CD964' },
      { name: 'Bleu', hex: '#007AFF' },
    ],
    memory: ['128 Go', '256 Go'],
    price: 699, oldPrice: 799,
    specs: { Écran: '6.1" Super Retina XDR', Puce: 'A16', Caméra: '48 MP', Batterie: '3349 mAh', OS: 'iOS 18', '5G': 'Oui' },
    badge: 'sale', rating: 4.8, reviews: 4521, stock: 'in',
    desc: 'iPhone 15 avec Dynamic Island, appareil photo 48MP et charge USB-C. Une valeur sûre.'
  },

  // ——— SAMSUNG ———
    {
    brand: 'Samsung', name: 'Galaxy S26 Ultra', cat: 'Samsung',
    img: 'image/S 26 ultra.JPG',
    colors: [
      { name: 'Titanium Black', hex: '#2A2A2A' },
      { name: 'Titanium Gray', hex: '#7A7A7A' },
      { name: 'Titanium Whitesilver', hex: '#D0CEC9' },
      { name: 'Titanium Blue Black', hex: '#1C2B4A' },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    price: 1099, oldPrice: 1299,
    specs: { Écran: '6.9" Dynamic AMOLED', Puce: 'Snapdragon 8 Elite', Caméra: '200 MP', Batterie: '5000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.8, reviews: 1892, stock: 'in',
    desc: 'Le flagship ultime de Samsung. S Pen intégré, zoom 200MP et IA Galaxy avancée.'
  },
  {
    brand: 'Samsung', name: 'Galaxy S25 Ultra', cat: 'Samsung',
    img: 'image/s25 ultra.JPG',
    colors: [
      { name: 'Titanium Black', hex: '#2A2A2A' },
      { name: 'Titanium Gray', hex: '#7A7A7A' },
      { name: 'Titanium Whitesilver', hex: '#D0CEC9' },
      { name: 'Titanium Blue Black', hex: '#1C2B4A' },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    price: 1099, oldPrice: 1299,
    specs: { Écran: '6.9" Dynamic AMOLED', Puce: 'Snapdragon 8 Elite', Caméra: '200 MP', Batterie: '5000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.8, reviews: 1892, stock: 'in',
    desc: 'Le flagship ultime de Samsung. S Pen intégré, zoom 200MP et IA Galaxy avancée.'
  },
  {
    brand: 'Samsung', name: 'Galaxy S25+', cat: 'Samsung',
    img: 'image/S25 plus.JPG',
    colors: [
      { name: 'Icy Blue', hex: '#9BBFD4' },
      { name: 'Mint', hex: '#9DD4B6' },
      { name: 'Navy', hex: '#1C2B4A' },
      { name: 'Silver Shadow', hex: '#C8C6C0' },
    ],
    memory: ['256 Go', '512 Go'],
    price: 899, oldPrice: 999,
    specs: { Écran: '6.7" Dynamic AMOLED', Puce: 'Snapdragon 8 Elite', Caméra: '50 MP', Batterie: '4900 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.7, reviews: 876, stock: 'in',
    desc: 'Grand écran, longue autonomie et performances haut de gamme. Le meilleur rapport qualité/prix Samsung.'
  },
  {
    brand: 'Samsung', name: 'Galaxy Z Fold 6', cat: 'Samsung',
    img: 'image/fold 6.JPG',
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Silver', hex: '#C8C6C0' },
      { name: 'Blue', hex: '#3A5F8A' },
    ],
    memory: ['256 Go', '512 Go'],
    price: 1799, oldPrice: 1999,
    specs: { Écran: '7.6" AMOLED pliable', Puce: 'Snapdragon 8 Gen 3', Caméra: '50 MP', Batterie: '4400 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.5, reviews: 432, stock: 'low',
    desc: 'Le smartphone pliable de référence. Deux écrans, productivité maximale et design futuriste.'
  },
  {
    brand: 'Samsung', name: 'Galaxy Z Flip 6', cat: 'Samsung',
    img: 'image/flip 6.JPG',
    colors: [
      { name: 'Mint', hex: '#9DD4B6' },
      { name: 'Yellow', hex: '#FFD60A' },
      { name: 'Blue', hex: '#007AFF' },
      { name: 'Crafted Black', hex: '#1C1C1E' },
    ],
    memory: ['256 Go', '512 Go'],
    price: 1099, oldPrice: null,
    specs: { Écran: '6.7" AMOLED clapet', Puce: 'Snapdragon 8 Gen 3', Caméra: '50 MP', Batterie: '4000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'new', rating: 4.6, reviews: 654, stock: 'in',
    desc: 'Compact, élégant et tendance. Le flip phone réinventé avec un grand écran FlexWindow.'
  },

  // ——— GOOGLE ———
  {
    brand: 'Google', name: 'Pixel 9 Pro', cat: 'Google',
    img: 'image/ pixel 9 pro.JPG',
    colors: [
      { name: 'Obsidian', hex: '#1C1C1E' },
      { name: 'Porcelain', hex: '#EDE9E3' },
      { name: 'Hazel', hex: '#7A8B6F' },
      { name: 'Rose Quartz', hex: '#E8C4C4' },
    ],
    memory: ['128 Go', '256 Go', '1 To'],
    price: 899, oldPrice: null,
    specs: { Écran: '6.3" OLED 120Hz', Puce: 'Google Tensor G4', Caméra: '50 MP + Zoom 5x', Batterie: '4700 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'new', rating: 4.7, reviews: 987, stock: 'low',
    desc: 'La caméra la plus intelligente sur smartphone. IA Gemini intégrée et 7 ans de mises à jour garanties.'
  },
  {
    brand: 'Google', name: 'Pixel 9a', cat: 'Google',
    img: 'image/pixel 9a.JPG',
    colors: [
      { name: 'Obsidian', hex: '#1C1C1E' },
      { name: 'Porcelain', hex: '#EDE9E3' },
      { name: 'Iris', hex: '#8B7EC8' },
      { name: 'Peony', hex: '#F4A0B5' },
    ],
    memory: ['128 Go', '256 Go'],
    price: 499, oldPrice: null,
    specs: { Écran: '6.1" OLED 120Hz', Puce: 'Google Tensor G4', Caméra: '64 MP', Batterie: '5100 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: null, rating: 4.5, reviews: 234, stock: 'in',
    desc: 'Le meilleur Pixel accessible. Excellente autonomie, IA Google et caméra remarquable pour le prix.'
  },

  // ——— XIAOMI ———
  {
    brand: 'Xiaomi', name: 'Xiaomi 14 Ultra', cat: 'Xiaomi',
    img: 'image/Xiaomi 14 Ultra.JPG',
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'White', hex: '#F2F2F7' },
      { name: 'Titanium', hex: '#9E9E9E' },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    price: 799, oldPrice: null,
    specs: { Écran: '6.73" AMOLED 120Hz', Puce: 'Snapdragon 8 Gen 3', Caméra: '50 MP Leica', Batterie: '5000 mAh', OS: 'Android 14', '5G': 'Oui' },
    badge: null, rating: 4.6, reviews: 654, stock: 'in',
    desc: 'Collaboration Leica pour une photographie exceptionnelle. Le flagship Xiaomi le plus complet.'
  },
  {
    brand: 'Xiaomi', name: 'Redmi Note 13 Pro', cat: 'Xiaomi',
    img: 'image/Redmi Note 13 Pro.JPG',
    colors: [
      { name: 'Midnight Black', hex: '#1C1C1E' },
      { name: 'Arctic White', hex: '#F2F2F7' },
      { name: 'Coral Purple', hex: '#9B59B6' },
      { name: 'Ocean Teal', hex: '#20B2AA' },
    ],
    memory: ['128 Go', '256 Go'],
    price: 329, oldPrice: 399,
    specs: { Écran: '6.67" AMOLED 120Hz', Puce: 'Snapdragon 7s Gen 2', Caméra: '200 MP', Batterie: '5100 mAh', OS: 'Android 14', '5G': 'Oui' },
    badge: 'sale', rating: 4.5, reviews: 1234, stock: 'in',
    desc: 'Caméra 200MP à prix abordable. Écran AMOLED magnifique et charge rapide 67W.'
  },

  // ——— ONEPLUS ———
  {
    brand: 'OnePlus', name: 'OnePlus 13', cat: 'OnePlus',
    img: 'image/OnePlus 13.JPG',
    colors: [
      { name: 'Midnight Ocean', hex: '#1A2F5A' },
      { name: 'Arctic Dawn', hex: '#E8E4DC' },
      { name: 'Black Eclipse', hex: '#1C1C1E' },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    price: 899, oldPrice: null,
    specs: { Écran: '6.82" AMOLED 120Hz', Puce: 'Snapdragon 8 Elite', Caméra: '50 MP Hasselblad', Batterie: '6000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'new', rating: 4.7, reviews: 543, stock: 'in',
    desc: 'Charge ultra-rapide 100W, caméra Hasselblad et l\'une des meilleures batteries du marché.'
  },

  // ——— SONY ———
  {
    brand: 'Sony', name: 'Xperia 1 VI', cat: 'Sony',
    img: 'image/Xperia 1 VI.JPG',
    colors: [
      { name: 'Black', hex: '#1C1C1E' },
      { name: 'Platinum Silver', hex: '#D0D0D0' },
      { name: 'Khaki Green', hex: '#7A8B6F' },
    ],
    memory: ['256 Go', '512 Go'],
    price: 1199, oldPrice: null,
    specs: { Écran: '6.5" 4K OLED 120Hz', Puce: 'Snapdragon 8 Gen 3', Caméra: '52 MP Zeiss', Batterie: '5000 mAh', OS: 'Android 14', '5G': 'Oui' },
    badge: null, rating: 4.6, reviews: 321, stock: 'low',
    desc: 'Écran 4K HDR, caméra Zeiss et qualité audio Sony de référence. Pour les créatifs exigeants.'
  },

  // ——— MOTOROLA ———
  {
    brand: 'Motorola', name: 'Motorola Edge 50 Ultra', cat: 'Motorola',
    img: 'image/Motorola Edge 50 Ultra.JPG',
    colors: [
      { name: 'Forest Grey', hex: '#5A6B5A' },
      { name: 'Peach Fuzz', hex: '#FFBBA0' },
      { name: 'Nordic Wood', hex: '#8B6F47' },
    ],
    memory: ['256 Go', '512 Go'],
    price: 699, oldPrice: 849,
    specs: { Écran: '6.7" pOLED 165Hz', Puce: 'Snapdragon 8s Gen 3', Caméra: '50 MP', Batterie: '4500 mAh', OS: 'Android 14', '5G': 'Oui' },
    badge: 'sale', rating: 4.4, reviews: 412, stock: 'in',
    desc: 'Design en vrai bois, écran 165Hz ultra-fluide et charge sans fil rapide 50W.'
  },
];

// Catégories de filtres
const filterCategories = {
  fr: ['Tous', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Sony', 'Motorola', 'Promo'],
  en: ['All', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Sony', 'Motorola', 'Sale'],
};
