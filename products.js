// ============================================================
// DONNÉES PRODUITS — AizenTech 2026
// Prix dynamiques par mémoire ET couleur (comme Apple)
// ============================================================

const products = [
  // ——— APPLE ———
  {
    brand: 'Apple', name: 'iPhone 17 Pro Max', cat: 'Apple',
    img: 'image/17 PM2.JPG',
    colors: [
      { name: 'Titane naturel', hex: '#C9BFB0', priceBonus: 0 },  // Apple Natural Titanium
      { name: 'Titane noir',    hex: '#3A3A3C', priceBonus: 0 },  // Apple Black Titanium
      { name: 'Titane blanc',   hex: '#EAE5DA', priceBonus: 0 },  // Apple White Titanium
      { name: 'Titane désert',  hex: '#C49A6C', priceBonus: 20 }, // Apple Desert Titanium
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    memoryPrices: { '256 Go': 1199, '512 Go': 1349, '1 To': 1549 },
    price: 1199, oldPrice: null,
    specs: { Écran: '6.9" Super Retina XDR', Puce: 'A19 Pro', Caméra: '48 MP ProRAW', Batterie: '4685 mAh', OS: 'iOS 26', '5G': 'Oui' },
    badge: 'new', rating: 4.9, reviews: 2341, stock: 'in',
    desc: 'L\'iPhone le plus avancé jamais conçu. Puce A19 Pro, système de caméra Pro et écran ProMotion 120Hz.'
  },
  {
    brand: 'Apple', name: 'iPhone 16 Pro Max', cat: 'Apple',
    img: 'image/16 PM.JPG',
    colors: [
      { name: 'Titane naturel', hex: '#C9BFB0', priceBonus: 0 },
      { name: 'Titane noir',    hex: '#3A3A3C', priceBonus: 0 },
      { name: 'Titane blanc',   hex: '#EAE5DA', priceBonus: 0 },
      { name: 'Titane désert',  hex: '#C49A6C', priceBonus: 10 },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    memoryPrices: { '256 Go': 1099, '512 Go': 1249, '1 To': 1449 },
    price: 1099, oldPrice: null,
    specs: { Écran: '6.9" Super Retina XDR', Puce: 'A18 Pro', Caméra: '48 MP ProRAW', Batterie: '4685 mAh', OS: 'iOS 18', '5G': 'Oui' },
    badge: null, rating: 4.9, reviews: 4521, stock: 'in',
    desc: 'iPhone 16 Pro Max avec Dynamic Island, puce A18 Pro et zoom optique 5x. Le meilleur iPhone jamais créé.'
  },
  {
    brand: 'Apple', name: 'iPhone 16 Plus', cat: 'Apple',
    img: 'image/16 plus.JPG',
    colors: [
      { name: 'Noir',       hex: '#1D1D1F', priceBonus: 0 },  // Apple Black
      { name: 'Blanc',      hex: '#F5F0E8', priceBonus: 0 },  // Apple White
      { name: 'Rose',       hex: '#F2A7B0', priceBonus: 0 },  // Apple Pink
      { name: 'Bleu azur',  hex: '#AECAD6', priceBonus: 0 },  // Apple Ultramarine
      { name: 'Vert sauge', hex: '#B4C4B2', priceBonus: 0 },  // Apple Teal
    ],
    memory: ['128 Go', '256 Go', '512 Go'],
    memoryPrices: { '128 Go': 899, '256 Go': 1009, '512 Go': 1229 },
    price: 899, oldPrice: null,
    specs: { Écran: '6.7" Super Retina XDR', Puce: 'A18', Caméra: '48 MP', Batterie: '4685 mAh', OS: 'iOS 18', '5G': 'Oui' },
    badge: 'new', rating: 4.7, reviews: 1123, stock: 'in',
    desc: 'Grand écran, longue autonomie et puce A18. L\'iPhone 16 Plus offre le meilleur de l\'écosystème Apple.'
  },
  {
    brand: 'Apple', name: 'iPhone 15', cat: 'Apple',
    img: 'image/15 simple.JPG',
    colors: [
      { name: 'Noir',        hex: '#1D1D1F', priceBonus: 0 },
      { name: 'Jaune',       hex: '#F9E379', priceBonus: 0 },  // Apple Yellow
      { name: 'Rose',        hex: '#F2A7B0', priceBonus: 0 },  // Apple Pink
      { name: 'Vert',        hex: '#B5D4C4', priceBonus: 0 },  // Apple Green
      { name: 'Bleu',        hex: '#A8C5D8', priceBonus: 0 },  // Apple Blue
    ],
    memory: ['128 Go', '256 Go'],
    memoryPrices: { '128 Go': 699, '256 Go': 829 },
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
      { name: 'Titanium Black',       hex: '#2C2C2E', priceBonus: 0  },
      { name: 'Titanium Silver Blue', hex: '#C8D4E0', priceBonus: 0  },  // Light blue-silver
      { name: 'Titanium White Silver',hex: '#E8E6E0', priceBonus: 0  },  // Warm white
      { name: 'Titanium Jade Green',  hex: '#9BB5A4', priceBonus: 30 },  // Samsung Jade
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    memoryPrices: { '256 Go': 1099, '512 Go': 1269, '1 To': 1499 },
    price: 1099, oldPrice: 1299,
    specs: { Écran: '6.9" Dynamic AMOLED', Puce: 'Snapdragon 8 Elite', Caméra: '200 MP', Batterie: '5000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.8, reviews: 1892, stock: 'in',
    desc: 'Le flagship ultime de Samsung. S Pen intégré, zoom 200MP et IA Galaxy avancée.'
  },
  {
    brand: 'Samsung', name: 'Galaxy S25 Ultra', cat: 'Samsung',
    img: 'image/s25 ultra.JPG',
    colors: [
      { name: 'Titanium Black',       hex: '#2C2C2E', priceBonus: 0  },
      { name: 'Titanium Silver Blue', hex: '#C8D4E0', priceBonus: 0  },
      { name: 'Titanium White Silver',hex: '#E8E6E0', priceBonus: 0  },
      { name: 'Titanium Jade Green',  hex: '#9BB5A4', priceBonus: 20 },
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    memoryPrices: { '256 Go': 999, '512 Go': 1149, '1 To': 1349 },
    price: 999, oldPrice: 1199,
    specs: { Écran: '6.9" Dynamic AMOLED', Puce: 'Snapdragon 8 Elite', Caméra: '200 MP', Batterie: '5000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.8, reviews: 1892, stock: 'in',
    desc: 'Le flagship ultime de Samsung. S Pen intégré, zoom 200MP et IA Galaxy avancée.'
  },
  {
    brand: 'Samsung', name: 'Galaxy S25+', cat: 'Samsung',
    img: 'image/S25 plus.JPG',
    colors: [
      { name: 'Icy Blue',      hex: '#B8D4E8', priceBonus: 0 },  // Samsung Icy Blue
      { name: 'Mint',          hex: '#B5D5C4', priceBonus: 0 },  // Samsung Mint
      { name: 'Navy',          hex: '#2C3E6B', priceBonus: 0 },  // Samsung Navy
      { name: 'Silver Shadow', hex: '#D4D2CC', priceBonus: 0 },  // Samsung Silver
    ],
    memory: ['256 Go', '512 Go'],
    memoryPrices: { '256 Go': 899, '512 Go': 1049 },
    price: 899, oldPrice: 999,
    specs: { Écran: '6.7" Dynamic AMOLED', Puce: 'Snapdragon 8 Elite', Caméra: '50 MP', Batterie: '4900 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.7, reviews: 876, stock: 'in',
    desc: 'Grand écran, longue autonomie et performances haut de gamme. Le meilleur rapport qualité/prix Samsung.'
  },
  {
    brand: 'Samsung', name: 'Galaxy Z Fold 6', cat: 'Samsung',
    img: 'image/fold 6.JPG',
    colors: [
      { name: 'Black',  hex: '#1C1C1E', priceBonus: 0  },
      { name: 'Silver', hex: '#C8C6C0', priceBonus: 0  },
      { name: 'Blue',   hex: '#3A5F8A', priceBonus: 50 }, // Ed. spéciale +50$
    ],
    memory: ['256 Go', '512 Go'],
    memoryPrices: { '256 Go': 1799, '512 Go': 1999 },
    price: 1799, oldPrice: 1999,
    specs: { Écran: '7.6" AMOLED pliable', Puce: 'Snapdragon 8 Gen 3', Caméra: '50 MP', Batterie: '4400 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'sale', rating: 4.5, reviews: 432, stock: 'low',
    desc: 'Le smartphone pliable de référence. Deux écrans, productivité maximale et design futuriste.'
  },
  {
    brand: 'Samsung', name: 'Galaxy Z Flip 6', cat: 'Samsung',
    img: 'image/flip 6.JPG',
    colors: [
      { name: 'Mint',          hex: '#9DD4B6', priceBonus: 0 },
      { name: 'Yellow',        hex: '#FFD60A', priceBonus: 0 },
      { name: 'Blue',          hex: '#007AFF', priceBonus: 0 },
      { name: 'Crafted Black', hex: '#1C1C1E', priceBonus: 0 },
    ],
    memory: ['256 Go', '512 Go'],
    memoryPrices: { '256 Go': 1099, '512 Go': 1249 },
    price: 1099, oldPrice: null,
    specs: { Écran: '6.7" AMOLED clapet', Puce: 'Snapdragon 8 Gen 3', Caméra: '50 MP', Batterie: '4000 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: 'new', rating: 4.6, reviews: 654, stock: 'in',
    desc: 'Compact, élégant et tendance. Le flip phone réinventé avec un grand écran FlexWindow.'
  },

  // ——— GOOGLE ———
  {
    brand: 'Google', name: 'Pixel 10 Pro', cat: 'Google',
    img: 'image/g 10 pro.JPG',
    colors: [
      { name: 'Obsidian',    hex: '#1C1C1E', priceBonus: 0 },
      { name: 'Porcelain',   hex: '#EDE9E3', priceBonus: 0 },
      { name: 'Hazel',       hex: '#7A8B6F', priceBonus: 0 },
      { name: 'Rose Quartz', hex: '#E8C4C4', priceBonus: 0 },
    ],
    memory: ['128 Go', '256 Go', '1 To'],
    memoryPrices: { '128 Go': 499, '256 Go': 599, '1 To': 799 },
    price: 499, oldPrice: null,
    specs: { Écran: '6.3" OLED 120Hz', Puce: 'Google Tensor G5', Caméra: '50 MP + Zoom 5x', Batterie: '4700 mAh', OS: 'Android 16', '5G': 'Oui' },
    badge: 'new', rating: 4.8, reviews: 1204, stock: 'in',
    desc: 'La caméra la plus intelligente sur smartphone. IA Gemini intégrée et 7 ans de mises à jour garanties.'
  },
  {
    brand: 'Google', name: 'Pixel 9 Pro', cat: 'Google',
    img: 'image/ pixel 9 pro.JPG',
    colors: [
      { name: 'Obsidian',    hex: '#1C1C1E', priceBonus: 0 },
      { name: 'Porcelain',   hex: '#EDE9E3', priceBonus: 0 },
      { name: 'Hazel',       hex: '#7A8B6F', priceBonus: 0 },
      { name: 'Rose Quartz', hex: '#E8C4C4', priceBonus: 0 },
    ],
    memory: ['128 Go', '256 Go', '1 To'],
    memoryPrices: { '128 Go': 899, '256 Go': 999, '1 To': 1199 },
    price: 899, oldPrice: null,
    specs: { Écran: '6.3" OLED 120Hz', Puce: 'Google Tensor G4', Caméra: '50 MP + Zoom 5x', Batterie: '4700 mAh', OS: 'Android 15', '5G': 'Oui' },
    badge: null, rating: 4.7, reviews: 987, stock: 'low',
    desc: 'La caméra la plus intelligente sur smartphone. IA Gemini intégrée et 7 ans de mises à jour garanties.'
  },
  {
    brand: 'Google', name: 'Pixel 9a', cat: 'Google',
    img: 'image/pixel 9a.JPG',
    colors: [
      { name: 'Obsidian', hex: '#1C1C1E', priceBonus: 0 },
      { name: 'Porcelain',hex: '#EDE9E3', priceBonus: 0 },
      { name: 'Iris',     hex: '#8B7EC8', priceBonus: 0 },
      { name: 'Peony',    hex: '#F4A0B5', priceBonus: 0 },
    ],
    memory: ['128 Go', '256 Go'],
    memoryPrices: { '128 Go': 499, '256 Go': 599 },
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
      { name: 'Black',    hex: '#1C1C1E', priceBonus: 0  },
      { name: 'White',    hex: '#F2F2F7', priceBonus: 0  },
      { name: 'Titanium', hex: '#9E9E9E', priceBonus: 30 }, // Titanium +30$
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    memoryPrices: { '256 Go': 799, '512 Go': 929, '1 To': 1099 },
    price: 799, oldPrice: null,
    specs: { Écran: '6.73" AMOLED 120Hz', Puce: 'Snapdragon 8 Gen 3', Caméra: '50 MP Leica', Batterie: '5000 mAh', OS: 'Android 14', '5G': 'Oui' },
    badge: null, rating: 4.6, reviews: 654, stock: 'in',
    desc: 'Collaboration Leica pour une photographie exceptionnelle. Le flagship Xiaomi le plus complet.'
  },
  {
    brand: 'Xiaomi', name: 'Redmi Note 13 Pro', cat: 'Xiaomi',
    img: 'image/Redmi Note 13 Pro.JPG',
    colors: [
      { name: 'Midnight Black', hex: '#1C1C1E', priceBonus: 0 },
      { name: 'Arctic White',   hex: '#F2F2F7', priceBonus: 0 },
      { name: 'Coral Purple',   hex: '#9B59B6', priceBonus: 0 },
      { name: 'Ocean Teal',     hex: '#20B2AA', priceBonus: 0 },
    ],
    memory: ['128 Go', '256 Go'],
    memoryPrices: { '128 Go': 329, '256 Go': 399 },
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
      { name: 'Midnight Ocean', hex: '#1A2F5A', priceBonus: 0  },
      { name: 'Arctic Dawn',    hex: '#E8E4DC', priceBonus: 0  },
      { name: 'Black Eclipse',  hex: '#1C1C1E', priceBonus: 30 }, // Black Eclipse exclusif
    ],
    memory: ['256 Go', '512 Go', '1 To'],
    memoryPrices: { '256 Go': 899, '512 Go': 1029, '1 To': 1199 },
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
      { name: 'Black',            hex: '#1C1C1E', priceBonus: 0  },
      { name: 'Platinum Silver',  hex: '#D0D0D0', priceBonus: 0  },
      { name: 'Khaki Green',      hex: '#7A8B6F', priceBonus: 50 }, // Édition spéciale +50$
    ],
    memory: ['256 Go', '512 Go'],
    memoryPrices: { '256 Go': 1199, '512 Go': 1399 },
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
      { name: 'Forest Grey', hex: '#5A6B5A', priceBonus: 0  },
      { name: 'Peach Fuzz',  hex: '#FFBBA0', priceBonus: 0  },
      { name: 'Nordic Wood', hex: '#8B6F47', priceBonus: 50 }, // Bois naturel +50$
    ],
    memory: ['256 Go', '512 Go'],
    memoryPrices: { '256 Go': 699, '512 Go': 849 },
    price: 699, oldPrice: 849,
    specs: { Écran: '6.7" pOLED 165Hz', Puce: 'Snapdragon 8s Gen 3', Caméra: '50 MP', Batterie: '4500 mAh', OS: 'Android 14', '5G': 'Oui' },
    badge: 'sale', rating: 4.4, reviews: 412, stock: 'in',
    desc: 'Design en vrai bois, écran 165Hz ultra-fluide et charge sans fil rapide 50W.'
  },
];

// Fonction utilitaire : calcule le prix selon mémoire + couleur
function getProductPrice(product, memory, colorHex) {
  const memPrice = product.memoryPrices
    ? (product.memoryPrices[memory] ?? product.price)
    : product.price;
  const colorObj = product.colors.find(c => c.hex === colorHex);
  const colorBonus = (colorObj && colorObj.priceBonus) ? colorObj.priceBonus : 0;
  return memPrice + colorBonus;
}

// Catégories de filtres
const filterCategories = {
  fr: ['Tous', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Sony', 'Motorola', 'Promo'],
  en: ['All', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Sony', 'Motorola', 'Sale'],
};
