// ============================================================
// DONNÉES PRODUITS — AizenTech 2026
// Tous modèles de 2018 (XR) à 2026 — toutes marques
// ============================================================

const products = [

  // ══════ APPLE — XR (2018) → iPhone 17 (2026) ══════

  // 2026
  { brand:'Apple', name:'iPhone 17 Pro Max', cat:'Apple', img:'image/17 pro max.JPG',
    colors:[{name:'Titane naturel',hex:'#C9BFB0',priceBonus:0},{name:'Titane noir',hex:'#3A3A3C',priceBonus:0},{name:'Titane blanc',hex:'#EAE5DA',priceBonus:0},{name:'Titane désert',hex:'#C49A6C',priceBonus:20}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':1199,'512 Go':1349,'1 To':1549},
    price:1199, oldPrice:null,
    specs:{Écran:'6.9" Super Retina XDR',Puce:'A19 Pro',Caméra:'48 MP ProRAW',Batterie:'4685 mAh',OS:'iOS 26','5G':'Oui'},
    badge:'new', rating:4.9, reviews:2341, stock:'in',
    desc:"L'iPhone le plus avancé. Puce A19 Pro, caméra ProRAW et écran ProMotion 120Hz." },

  { brand:'Apple', name:'iPhone 17 Pro', cat:'Apple', img:'image/17 pro.JPG',
    colors:[{name:'Titane naturel',hex:'#C9BFB0',priceBonus:0},{name:'Titane noir',hex:'#3A3A3C',priceBonus:0},{name:'Titane blanc',hex:'#EAE5DA',priceBonus:0},{name:'Titane désert',hex:'#C49A6C',priceBonus:20}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':999,'512 Go':1149,'1 To':1349},
    price:999, oldPrice:null,
    specs:{Écran:'6.3" Super Retina XDR',Puce:'A19 Pro',Caméra:'48 MP ProRAW',Batterie:'3650 mAh',OS:'iOS 26','5G':'Oui'},
    badge:'new', rating:4.9, reviews:1540, stock:'in',
    desc:"iPhone 17 Pro compact et ultra-puissant. Puce A19 Pro et Dynamic Island." },

  { brand:'Apple', name:'iPhone 17 AIR', cat:'Apple', img:'image/17 AIR.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Blanc',hex:'#F5F0E8',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Bleu',hex:'#AECAD6',priceBonus:0},{name:'Vert sauge',hex:'#B4C4B2',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':799,'256 Go':899,'512 Go':1099},
    price:799, oldPrice:null,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A19',Caméra:'48 MP',Batterie:'3800 mAh',OS:'iOS 26','5G':'Oui'},
    badge:'new', rating:4.8, reviews:921, stock:'in',
    desc:"iPhone 17 avec puce A19, Dynamic Island et caméra 48MP améliorée." },

  // 2025
  { brand:'Apple', name:'iPhone 16 Pro Max', cat:'Apple', img:'image/16 pro max.JPG',
    colors:[{name:'Titane naturel',hex:'#C9BFB0',priceBonus:0},{name:'Titane noir',hex:'#3A3A3C',priceBonus:0},{name:'Titane blanc',hex:'#EAE5DA',priceBonus:0},{name:'Titane désert',hex:'#C49A6C',priceBonus:10}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':1099,'512 Go':1249,'1 To':1449},
    price:1099, oldPrice:null,
    specs:{Écran:'6.9" Super Retina XDR',Puce:'A18 Pro',Caméra:'48 MP ProRAW',Batterie:'4685 mAh',OS:'iOS 18','5G':'Oui'},
    badge:null, rating:4.9, reviews:4521, stock:'in',
    desc:"iPhone 16 Pro Max avec Dynamic Island, puce A18 Pro et zoom optique 5x." },

  { brand:'Apple', name:'iPhone 16 Pro', cat:'Apple', img:'image/16 pro.JPG',
    colors:[{name:'Titane naturel',hex:'#C9BFB0',priceBonus:0},{name:'Titane noir',hex:'#3A3A3C',priceBonus:0},{name:'Titane blanc',hex:'#EAE5DA',priceBonus:0},{name:'Titane désert',hex:'#C49A6C',priceBonus:10}],
    memory:['128 Go','256 Go','512 Go','1 To'], memoryPrices:{'128 Go':999,'256 Go':1099,'512 Go':1299,'1 To':1499},
    price:999, oldPrice:null,
    specs:{Écran:'6.3" Super Retina XDR',Puce:'A18 Pro',Caméra:'48 MP ProRAW',Batterie:'3582 mAh',OS:'iOS 18','5G':'Oui'},
    badge:null, rating:4.8, reviews:3102, stock:'in',
    desc:"iPhone 16 Pro avec puce A18 Pro, bouton Action et caméra ultra-grand angle améliorée." },

  { brand:'Apple', name:'iPhone 16 Plus', cat:'Apple', img:'image/16 plus.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Blanc',hex:'#F5F0E8',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Bleu azur',hex:'#AECAD6',priceBonus:0},{name:'Vert sauge',hex:'#B4C4B2',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':899,'256 Go':1009,'512 Go':1229},
    price:899, oldPrice:null,
    specs:{Écran:'6.7" Super Retina XDR',Puce:'A18',Caméra:'48 MP',Batterie:'4685 mAh',OS:'iOS 18','5G':'Oui'},
    badge:null, rating:4.7, reviews:1123, stock:'in',
    desc:"Grand écran et longue autonomie avec puce A18. L'iPhone 16 Plus." },

  { brand:'Apple', name:'iPhone 16', cat:'Apple', img:'image/16.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Blanc',hex:'#F5F0E8',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Bleu azur',hex:'#AECAD6',priceBonus:0},{name:'Vert sauge',hex:'#B4C4B2',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':799,'256 Go':909,'512 Go':1129},
    price:799, oldPrice:899,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A18',Caméra:'48 MP',Batterie:'3561 mAh',OS:'iOS 18','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:2840, stock:'in',
    desc:"iPhone 16 avec puce A18, Dynamic Island et mode cinématique amélioré." },

  // 2024
  { brand:'Apple', name:'iPhone 15 Pro Max', cat:'Apple', img:'image/15 pro max.JPG',
    colors:[{name:'Titane naturel',hex:'#C9BFB0',priceBonus:0},{name:'Titane noir',hex:'#3A3A3C',priceBonus:0},{name:'Titane blanc',hex:'#EAE5DA',priceBonus:0},{name:'Titane bleu',hex:'#4A6FA5',priceBonus:0}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':899,'512 Go':1049,'1 To':1249},
    price:899, oldPrice:1099,
    specs:{Écran:'6.7" Super Retina XDR',Puce:'A17 Pro',Caméra:'48 MP ProRAW',Batterie:'4422 mAh',OS:'iOS 17','5G':'Oui'},
    badge:'sale', rating:4.8, reviews:5621, stock:'in',
    desc:"iPhone 15 Pro Max en titane, zoom 5x et puce A17 Pro. Excellent rapport qualité/prix." },

  { brand:'Apple', name:'iPhone 15 Pro', cat:'Apple', img:'image/15 pro.JPG',
    colors:[{name:'Titane naturel',hex:'#C9BFB0',priceBonus:0},{name:'Titane noir',hex:'#3A3A3C',priceBonus:0},{name:'Titane blanc',hex:'#EAE5DA',priceBonus:0},{name:'Titane bleu',hex:'#4A6FA5',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go','1 To'], memoryPrices:{'128 Go':799,'256 Go':899,'512 Go':1099,'1 To':1299},
    price:799, oldPrice:999,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A17 Pro',Caméra:'48 MP ProRAW',Batterie:'3274 mAh',OS:'iOS 17','5G':'Oui'},
    badge:'sale', rating:4.8, reviews:4320, stock:'in',
    desc:"iPhone 15 Pro en titane avec bouton Action, USB-C et puce A17 Pro." },

  { brand:'Apple', name:'iPhone 15 Plus', cat:'Apple', img:'image/15 plus.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Jaune',hex:'#F9E379',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Vert',hex:'#B5D4C4',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':749,'256 Go':879},
    price:749, oldPrice:899,
    specs:{Écran:'6.7" Super Retina XDR',Puce:'A16',Caméra:'48 MP',Batterie:'4383 mAh',OS:'iOS 17','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:2100, stock:'in',
    desc:"Grand écran 6.7\", Dynamic Island et USB-C pour l'iPhone 15 Plus." },

  { brand:'Apple', name:'iPhone 15', cat:'Apple', img:'image/15.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Jaune',hex:'#F9E379',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Vert',hex:'#B5D4C4',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':699,'256 Go':829},
    price:699, oldPrice:799,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A16',Caméra:'48 MP',Batterie:'3349 mAh',OS:'iOS 17','5G':'Oui'},
    badge:'sale', rating:4.8, reviews:4521, stock:'in',
    desc:"iPhone 15 avec Dynamic Island, 48MP et charge USB-C." },

  // 2023
  { brand:'Apple', name:'iPhone 14 Pro Max', cat:'Apple', img:'image/14 pro max.JPG',
    colors:[{name:'Noir sidéral',hex:'#2C2C2C',priceBonus:0},{name:'Argent',hex:'#E8E8E8',priceBonus:0},{name:'Or',hex:'#C9A96E',priceBonus:0},{name:'Violet intense',hex:'#6E6589',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go','1 To'], memoryPrices:{'128 Go':699,'256 Go':799,'512 Go':999,'1 To':1199},
    price:699, oldPrice:1099,
    specs:{Écran:'6.7" Super Retina XDR',Puce:'A16 Bionic',Caméra:'48 MP ProRAW',Batterie:'4323 mAh',OS:'iOS 16','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:7842, stock:'in',
    desc:"iPhone 14 Pro Max avec Dynamic Island, A16 Bionic et écran ProMotion always-on." },

  { brand:'Apple', name:'iPhone 14 Pro', cat:'Apple', img:'image/14 pro.JPG',
    colors:[{name:'Noir sidéral',hex:'#2C2C2C',priceBonus:0},{name:'Argent',hex:'#E8E8E8',priceBonus:0},{name:'Or',hex:'#C9A96E',priceBonus:0},{name:'Violet intense',hex:'#6E6589',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go','1 To'], memoryPrices:{'128 Go':599,'256 Go':699,'512 Go':899,'1 To':1099},
    price:599, oldPrice:999,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A16 Bionic',Caméra:'48 MP ProRAW',Batterie:'3200 mAh',OS:'iOS 16','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:6210, stock:'in',
    desc:"iPhone 14 Pro avec Dynamic Island, écran always-on et caméra 48MP." },

  { brand:'Apple', name:'iPhone 14 Plus', cat:'Apple', img:'image/14 plus.JPG',
    colors:[{name:'Minuit',hex:'#1D1D1F',priceBonus:0},{name:'Lumière stellaire',hex:'#F5F0E8',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0},{name:'Violet',hex:'#C9B8D8',priceBonus:0},{name:'Rouge',hex:'#C0392B',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':549,'256 Go':649,'512 Go':849},
    price:549, oldPrice:799,
    specs:{Écran:'6.7" Super Retina XDR',Puce:'A15 Bionic',Caméra:'12 MP',Batterie:'4325 mAh',OS:'iOS 16','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:3100, stock:'in',
    desc:"Grand écran 6.7\" et autonomie record pour l'iPhone 14 Plus." },

  { brand:'Apple', name:'iPhone 14', cat:'Apple', img:'image/14.JPG',
    colors:[{name:'Minuit',hex:'#1D1D1F',priceBonus:0},{name:'Lumière stellaire',hex:'#F5F0E8',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0},{name:'Violet',hex:'#C9B8D8',priceBonus:0},{name:'Rouge',hex:'#C0392B',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':499,'256 Go':599,'512 Go':799},
    price:499, oldPrice:699,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A15 Bionic',Caméra:'12 MP',Batterie:'3279 mAh',OS:'iOS 16','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:5400, stock:'in',
    desc:"iPhone 14 avec détection de collision, SOS satellite et excellente autonomie." },

  // 2022
  { brand:'Apple', name:'iPhone 13 Pro Max', cat:'Apple', img:'image/13 pro max.JPG',
    colors:[{name:'Graphite',hex:'#4A4A4A',priceBonus:0},{name:'Or',hex:'#C9A96E',priceBonus:0},{name:'Argent',hex:'#E8E8E8',priceBonus:0},{name:'Bleu Alpin',hex:'#5B7FA6',priceBonus:0},{name:'Vert Alpin',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go','1 To'], memoryPrices:{'128 Go':449,'256 Go':549,'512 Go':749,'1 To':949},
    price:449, oldPrice:1099,
    specs:{Écran:'6.7" Super Retina XDR 120Hz',Puce:'A15 Bionic',Caméra:'12 MP ProRAW',Batterie:'4352 mAh',OS:'iOS 15','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:9123, stock:'in',
    desc:"iPhone 13 Pro Max avec ProMotion 120Hz, zoom 3x et macro. Excellent reconditionné." },

  { brand:'Apple', name:'iPhone 13', cat:'Apple', img:'image/13.JPG',
    colors:[{name:'Minuit',hex:'#1D1D1F',priceBonus:0},{name:'Lumière stellaire',hex:'#F5F0E8',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Vert',hex:'#B5D4C4',priceBonus:0},{name:'Rouge',hex:'#C0392B',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':349,'256 Go':449,'512 Go':649},
    price:349, oldPrice:699,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A15 Bionic',Caméra:'12 MP Dual',Batterie:'3227 mAh',OS:'iOS 15','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:11200, stock:'in',
    desc:"iPhone 13 — puce A15, mode Cinématique et autonomie +2.5h. Best-seller reconditionné." },

  { brand:'Apple', name:'iPhone 13 mini', cat:'Apple', img:'image/13 mini.JPG',
    colors:[{name:'Minuit',hex:'#1D1D1F',priceBonus:0},{name:'Lumière stellaire',hex:'#F5F0E8',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0},{name:'Rose',hex:'#F2A7B0',priceBonus:0},{name:'Vert',hex:'#B5D4C4',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':299,'256 Go':399,'512 Go':599},
    price:299, oldPrice:599,
    specs:{Écran:'5.4" Super Retina XDR',Puce:'A15 Bionic',Caméra:'12 MP Dual',Batterie:'2438 mAh',OS:'iOS 15','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:6800, stock:'in',
    desc:"Le plus compact des iPhones modernes. Format mini avec toute la puissance A15." },

  // 2021
  { brand:'Apple', name:'iPhone 12 Pro Max', cat:'Apple', img:'image/12 pro max.JPG',
    colors:[{name:'Graphite',hex:'#4A4A4A',priceBonus:0},{name:'Or',hex:'#C9A96E',priceBonus:0},{name:'Argent',hex:'#E8E8E8',priceBonus:0},{name:'Bleu pacifique',hex:'#2E5F8A',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':349,'256 Go':449,'512 Go':649},
    price:349, oldPrice:1099,
    specs:{Écran:'6.7" Super Retina XDR',Puce:'A14 Bionic',Caméra:'12 MP Pro LiDAR',Batterie:'3687 mAh',OS:'iOS 14','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:8700, stock:'in',
    desc:"iPhone 12 Pro Max — premier iPhone 5G avec design plat et scanner LiDAR." },

  { brand:'Apple', name:'iPhone 12', cat:'Apple', img:'image/12 .JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Blanc',hex:'#F5F0E8',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0},{name:'Vert',hex:'#B5D4C4',priceBonus:0},{name:'Rouge',hex:'#C0392B',priceBonus:0},{name:'Violet',hex:'#C9B8D8',priceBonus:0}],
    memory:['64 Go','128 Go','256 Go'], memoryPrices:{'64 Go':249,'128 Go':299,'256 Go':399},
    price:249, oldPrice:799,
    specs:{Écran:'6.1" Super Retina XDR',Puce:'A14 Bionic',Caméra:'12 MP Dual',Batterie:'2815 mAh',OS:'iOS 14','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:14500, stock:'in',
    desc:"iPhone 12 avec design plat emblématique, puce A14 et 5G. Best-seller reconditionné." },

  // 2020
  { brand:'Apple', name:'iPhone 11 Pro Max', cat:'Apple', img:'image/11 pro max.JPG',
    colors:[{name:'Gris sidéral',hex:'#4A4A4A',priceBonus:0},{name:'Or',hex:'#C9A96E',priceBonus:0},{name:'Argent',hex:'#E8E8E8',priceBonus:0},{name:'Vert nuit',hex:'#3A5240',priceBonus:0}],
    memory:['64 Go','256 Go','512 Go'], memoryPrices:{'64 Go':199,'256 Go':279,'512 Go':379},
    price:199, oldPrice:1099,
    specs:{Écran:'6.5" Super Retina XDR',Puce:'A13 Bionic',Caméra:'12 MP Triple',Batterie:'3969 mAh',OS:'iOS 13','5G':'Non'},
    badge:'sale', rating:4.5, reviews:12300, stock:'in',
    desc:"iPhone 11 Pro Max avec triple caméra et grande autonomie. Excellent reconditionné." },

  { brand:'Apple', name:'iPhone 11', cat:'Apple', img:'image/11.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Blanc',hex:'#F5F0E8',priceBonus:0},{name:'Vert',hex:'#B5D4C4',priceBonus:0},{name:'Jaune',hex:'#F9E379',priceBonus:0},{name:'Violet',hex:'#C9B8D8',priceBonus:0},{name:'Rouge',hex:'#C0392B',priceBonus:0}],
    memory:['64 Go','128 Go','256 Go'], memoryPrices:{'64 Go':149,'128 Go':189,'256 Go':249},
    price:149, oldPrice:699,
    specs:{Écran:'6.1" Liquid Retina',Puce:'A13 Bionic',Caméra:'12 MP Dual',Batterie:'3110 mAh',OS:'iOS 13','5G':'Non'},
    badge:'sale', rating:4.5, reviews:18700, stock:'in',
    desc:"iPhone 11 toujours performant avec puce A13 Bionic. Ultra-abordable en reconditionné." },

  // 2019
  { brand:'Apple', name:'iPhone XS Max', cat:'Apple', img:'image/xs max.JPG',
    colors:[{name:'Gris sidéral',hex:'#4A4A4A',priceBonus:0},{name:'Or',hex:'#C9A96E',priceBonus:0},{name:'Argent',hex:'#E8E8E8',priceBonus:0}],
    memory:['64 Go','256 Go','512 Go'], memoryPrices:{'64 Go':129,'256 Go':169,'512 Go':219},
    price:129, oldPrice:1099,
    specs:{Écran:'6.5" Super Retina OLED',Puce:'A12 Bionic',Caméra:'12 MP Dual',Batterie:'3174 mAh',OS:'iOS 12','5G':'Non'},
    badge:'sale', rating:4.3, reviews:9800, stock:'low',
    desc:"iPhone XS Max avec grand écran OLED et Face ID. Reconditionné à prix mini." },

  // 2018
  { brand:'Apple', name:'iPhone XR', cat:'Apple', img:'image/xr.JPG',
    colors:[{name:'Noir',hex:'#1D1D1F',priceBonus:0},{name:'Blanc',hex:'#F5F0E8',priceBonus:0},{name:'Bleu',hex:'#A8C5D8',priceBonus:0},{name:'Jaune',hex:'#F9E379',priceBonus:0},{name:'Corail',hex:'#FF7F7F',priceBonus:0},{name:'Rouge',hex:'#C0392B',priceBonus:0}],
    memory:['64 Go','128 Go','256 Go'], memoryPrices:{'64 Go':99,'128 Go':119,'256 Go':149},
    price:99, oldPrice:749,
    specs:{Écran:'6.1" Liquid Retina',Puce:'A12 Bionic',Caméra:'12 MP',Batterie:'2942 mAh',OS:'iOS 12','5G':'Non'},
    badge:'sale', rating:4.2, reviews:22000, stock:'low',
    desc:"L'iPhone XR — pionnier du Liquid Retina et Face ID pour tous. Reconditionné très abordable." },

  // ══════ SAMSUNG — S9+ (2018) → S26 Ultra (2026) ══════

  // 2026
  { brand:'Samsung', name:'Galaxy S26 Ultra', cat:'Samsung', img:'image/S 26 ultra.JPG',
    colors:[{name:'Titanium Black',hex:'#2C2C2E',priceBonus:0},{name:'Titanium Silver Blue',hex:'#C8D4E0',priceBonus:0},{name:'Titanium White Silver',hex:'#E8E6E0',priceBonus:0},{name:'Titanium Jade Green',hex:'#9BB5A4',priceBonus:30}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':1099,'512 Go':1269,'1 To':1499},
    price:1099, oldPrice:1299,
    specs:{Écran:'6.9" Dynamic AMOLED',Puce:'Snapdragon 8 Elite Gen 2',Caméra:'200 MP',Batterie:'5500 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.9, reviews:876, stock:'in',
    desc:"Flagship ultime 2026 — S Pen intégré, zoom 200MP, IA Galaxy et batterie 5500mAh." },

  { brand:'Samsung', name:'Galaxy S26+', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Navy',hex:'#1A2F5A',priceBonus:0},{name:'Silver Shadow',hex:'#D4D2CC',priceBonus:0},{name:'Mint',hex:'#B5D5C4',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':899,'512 Go':1049},
    price:899, oldPrice:null,
    specs:{Écran:'6.7" Dynamic AMOLED',Puce:'Snapdragon 8 Elite Gen 2',Caméra:'50 MP',Batterie:'5000 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.8, reviews:432, stock:'in',
    desc:"Galaxy S26+ avec Snapdragon 8 Elite Gen 2 et IA Galaxy de nouvelle génération." },

  { brand:'Samsung', name:'Galaxy Z Fold 7', cat:'Samsung', img:'image/fold 6.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'Silver',hex:'#C8C6C0',priceBonus:0}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':1899,'512 Go':2099,'1 To':2399},
    price:1899, oldPrice:null,
    specs:{Écran:'8.0" AMOLED pliable',Puce:'Snapdragon 8 Elite Gen 2',Caméra:'50 MP',Batterie:'4600 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.6, reviews:210, stock:'low',
    desc:"Galaxy Z Fold 7 avec grand écran 8\", design ultra-fin et productivité maximale." },

  // 2025
  { brand:'Samsung', name:'Galaxy S25 Ultra', cat:'Samsung', img:'image/s25 ultra.JPG',
    colors:[{name:'Titanium Black',hex:'#2C2C2E',priceBonus:0},{name:'Titanium Silver Blue',hex:'#C8D4E0',priceBonus:0},{name:'Titanium White Silver',hex:'#E8E6E0',priceBonus:0},{name:'Titanium Jade Green',hex:'#9BB5A4',priceBonus:20}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':999,'512 Go':1149,'1 To':1349},
    price:999, oldPrice:1199,
    specs:{Écran:'6.9" Dynamic AMOLED',Puce:'Snapdragon 8 Elite',Caméra:'200 MP',Batterie:'5000 mAh',OS:'Android 15','5G':'Oui'},
    badge:'sale', rating:4.8, reviews:1892, stock:'in',
    desc:"Galaxy S25 Ultra avec S Pen intégré, zoom 200MP et Galaxy AI." },

  { brand:'Samsung', name:'Galaxy S25+', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Icy Blue',hex:'#B8D4E8',priceBonus:0},{name:'Mint',hex:'#B5D5C4',priceBonus:0},{name:'Navy',hex:'#2C3E6B',priceBonus:0},{name:'Silver Shadow',hex:'#D4D2CC',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':899,'512 Go':1049},
    price:899, oldPrice:999,
    specs:{Écran:'6.7" Dynamic AMOLED',Puce:'Snapdragon 8 Elite',Caméra:'50 MP',Batterie:'4900 mAh',OS:'Android 15','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:876, stock:'in',
    desc:"Grand écran, longue autonomie et performances haut de gamme. Meilleur rapport qualité/prix Samsung." },

  { brand:'Samsung', name:'Galaxy Z Fold 6', cat:'Samsung', img:'image/fold 6.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'Silver',hex:'#C8C6C0',priceBonus:0},{name:'Blue',hex:'#3A5F8A',priceBonus:50}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':1799,'512 Go':1999},
    price:1799, oldPrice:1999,
    specs:{Écran:'7.6" AMOLED pliable',Puce:'Snapdragon 8 Gen 3',Caméra:'50 MP',Batterie:'4400 mAh',OS:'Android 15','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:432, stock:'low',
    desc:"Galaxy Z Fold 6 — smartphone pliable de référence, productivité maximale." },

  { brand:'Samsung', name:'Galaxy Z Flip 6', cat:'Samsung', img:'image/flip 6.JPG',
    colors:[{name:'Mint',hex:'#9DD4B6',priceBonus:0},{name:'Yellow',hex:'#FFD60A',priceBonus:0},{name:'Blue',hex:'#007AFF',priceBonus:0},{name:'Crafted Black',hex:'#1C1C1E',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':1099,'512 Go':1249},
    price:1099, oldPrice:null,
    specs:{Écran:'6.7" AMOLED clapet',Puce:'Snapdragon 8 Gen 3',Caméra:'50 MP',Batterie:'4000 mAh',OS:'Android 15','5G':'Oui'},
    badge:'new', rating:4.6, reviews:654, stock:'in',
    desc:"Galaxy Z Flip 6 — flip phone tendance avec grand écran FlexWindow." },

  // 2024
  { brand:'Samsung', name:'Galaxy S24 Ultra', cat:'Samsung', img:'image/s25 ultra.JPG',
    colors:[{name:'Titanium Black',hex:'#2C2C2E',priceBonus:0},{name:'Titanium Gray',hex:'#808080',priceBonus:0},{name:'Titanium Violet',hex:'#7B68A0',priceBonus:0},{name:'Titanium Yellow',hex:'#C8A840',priceBonus:0}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':849,'512 Go':999,'1 To':1199},
    price:849, oldPrice:1299,
    specs:{Écran:'6.8" Dynamic AMOLED 120Hz',Puce:'Snapdragon 8 Gen 3',Caméra:'200 MP',Batterie:'5000 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.8, reviews:3120, stock:'in',
    desc:"Galaxy S24 Ultra en titane avec S Pen, 200MP et Galaxy AI. Le meilleur Samsung." },

  { brand:'Samsung', name:'Galaxy S24+', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Onyx Black',hex:'#1C1C1E',priceBonus:0},{name:'Marble Gray',hex:'#808080',priceBonus:0},{name:'Cobalt Violet',hex:'#7B68A0',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':749,'512 Go':899},
    price:749, oldPrice:999,
    specs:{Écran:'6.7" Dynamic AMOLED 120Hz',Puce:'Snapdragon 8 Gen 3',Caméra:'50 MP',Batterie:'4900 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:1870, stock:'in',
    desc:"Galaxy S24+ grand format avec Galaxy AI et Snapdragon 8 Gen 3." },

  { brand:'Samsung', name:'Galaxy Z Fold 5', cat:'Samsung', img:'image/fold 6.JPG',
    colors:[{name:'Icy Blue',hex:'#B8D4E8',priceBonus:0},{name:'Phantom Black',hex:'#1C1C1E',priceBonus:0},{name:'Cream',hex:'#F5F0E8',priceBonus:0}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':1399,'512 Go':1599,'1 To':1899},
    price:1399, oldPrice:1799,
    specs:{Écran:'7.6" AMOLED pliable',Puce:'Snapdragon 8 Gen 2',Caméra:'50 MP',Batterie:'4400 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:876, stock:'low',
    desc:"Galaxy Z Fold 5 plus fin et léger, charnière améliorée et cover plus grand." },

  // 2023
  { brand:'Samsung', name:'Galaxy S23 Ultra', cat:'Samsung', img:'image/s25 ultra.JPG',
    colors:[{name:'Phantom Black',hex:'#1C1C1E',priceBonus:0},{name:'Cream',hex:'#F5F0E8',priceBonus:0},{name:'Green',hex:'#4A7C59',priceBonus:0},{name:'Lavender',hex:'#C9B8D8',priceBonus:0}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':699,'512 Go':849,'1 To':1049},
    price:699, oldPrice:1199,
    specs:{Écran:'6.8" Dynamic AMOLED 120Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'200 MP',Batterie:'5000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:5600, stock:'in',
    desc:"Galaxy S23 Ultra avec S Pen, 200MP et zoom 100x. Le pro ultime à prix réduit." },

  { brand:'Samsung', name:'Galaxy S23', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Phantom Black',hex:'#1C1C1E',priceBonus:0},{name:'Cream',hex:'#F5F0E8',priceBonus:0},{name:'Green',hex:'#4A7C59',priceBonus:0},{name:'Lavender',hex:'#C9B8D8',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':499,'256 Go':599},
    price:499, oldPrice:799,
    specs:{Écran:'6.1" Dynamic AMOLED 120Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'50 MP',Batterie:'3900 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:4200, stock:'in',
    desc:"Galaxy S23 compact et performant avec Snapdragon 8 Gen 2 et Nightography 50MP." },

  // 2022
  { brand:'Samsung', name:'Galaxy S22 Ultra', cat:'Samsung', img:'image/s25 ultra.JPG',
    colors:[{name:'Phantom Black',hex:'#1C1C1E',priceBonus:0},{name:'Phantom White',hex:'#F2F2F7',priceBonus:0},{name:'Burgundy',hex:'#800020',priceBonus:0},{name:'Green',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go','1 To'], memoryPrices:{'128 Go':549,'256 Go':649,'512 Go':849,'1 To':1049},
    price:549, oldPrice:1199,
    specs:{Écran:'6.8" Dynamic AMOLED 120Hz',Puce:'Snapdragon 8 Gen 1',Caméra:'108 MP',Batterie:'5000 mAh',OS:'Android 12','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:7800, stock:'in',
    desc:"Galaxy S22 Ultra, héritier du Note avec S Pen, zoom 100x et 5000mAh." },

  { brand:'Samsung', name:'Galaxy A54 5G', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Awesome Black',hex:'#1C1C1E',priceBonus:0},{name:'Awesome White',hex:'#F2F2F7',priceBonus:0},{name:'Awesome Violet',hex:'#9B59B6',priceBonus:0},{name:'Awesome Lime',hex:'#B5D4C4',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':349,'256 Go':429},
    price:349, oldPrice:449,
    specs:{Écran:'6.4" Super AMOLED 120Hz',Puce:'Exynos 1380',Caméra:'50 MP OIS',Batterie:'5000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:6800, stock:'in',
    desc:"Galaxy A54 5G — milieu de gamme parfait. AMOLED 120Hz, OIS et 5G abordable." },

  // 2021
  { brand:'Samsung', name:'Galaxy S21 Ultra', cat:'Samsung', img:'image/s25 ultra.JPG',
    colors:[{name:'Phantom Black',hex:'#1C1C1E',priceBonus:0},{name:'Phantom Silver',hex:'#D0D0D0',priceBonus:0},{name:'Phantom Brown',hex:'#8B6F47',priceBonus:0},{name:'Phantom Navy',hex:'#2C3E6B',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':399,'256 Go':499,'512 Go':699},
    price:399, oldPrice:1199,
    specs:{Écran:'6.8" Dynamic AMOLED 120Hz',Puce:'Snapdragon 888',Caméra:'108 MP',Batterie:'5000 mAh',OS:'Android 11','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:9400, stock:'in',
    desc:"Galaxy S21 Ultra avec zoom 10x, S Pen compatible et Space Zoom 100x." },

  // 2020
  { brand:'Samsung', name:'Galaxy S20 FE 5G', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Cloud Navy',hex:'#2C3E6B',priceBonus:0},{name:'Cloud Lavender',hex:'#C9B8D8',priceBonus:0},{name:'Cloud Mint',hex:'#B5D5C4',priceBonus:0},{name:'Cloud Red',hex:'#C0392B',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':249,'256 Go':299},
    price:249, oldPrice:649,
    specs:{Écran:'6.5" Super AMOLED 120Hz',Puce:'Snapdragon 865',Caméra:'12 MP Triple',Batterie:'4500 mAh',OS:'Android 10','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:11200, stock:'in',
    desc:"Galaxy S20 FE — l'édition fan. Snapdragon 865, 5G et AMOLED 120Hz à petit prix." },

  // 2019
  { brand:'Samsung', name:'Galaxy S10+', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Prism Black',hex:'#1C1C1E',priceBonus:0},{name:'Prism White',hex:'#F2F2F7',priceBonus:0},{name:'Prism Green',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','512 Go'], memoryPrices:{'128 Go':199,'512 Go':299},
    price:199, oldPrice:999,
    specs:{Écran:'6.4" Dynamic AMOLED',Puce:'Snapdragon 855',Caméra:'12 MP Triple',Batterie:'4100 mAh',OS:'Android 9','5G':'Non'},
    badge:'sale', rating:4.3, reviews:14500, stock:'low',
    desc:"Galaxy S10+ avec triple caméra, lecteur d'empreintes dans l'écran et Infinity-O." },

  // 2018
  { brand:'Samsung', name:'Galaxy S9+', cat:'Samsung', img:'image/S25 plus.JPG',
    colors:[{name:'Midnight Black',hex:'#1C1C1E',priceBonus:0},{name:'Coral Blue',hex:'#2E5F8A',priceBonus:0},{name:'Lilac Purple',hex:'#C9B8D8',priceBonus:0},{name:'Titanium Gray',hex:'#808080',priceBonus:0}],
    memory:['64 Go','128 Go','256 Go'], memoryPrices:{'64 Go':129,'128 Go':159,'256 Go':199},
    price:129, oldPrice:849,
    specs:{Écran:'6.2" Super AMOLED',Puce:'Snapdragon 845',Caméra:'12 MP Dual',Batterie:'3500 mAh',OS:'Android 8','5G':'Non'},
    badge:'sale', rating:4.2, reviews:8700, stock:'low',
    desc:"Galaxy S9+ avec double caméra à ouverture variable et super ralenti 960fps." },

  // ══════ GOOGLE — Pixel 3a (2019) → Pixel 10 (2026) ══════

  // 2026
  { brand:'Google', name:'Pixel 10 Pro', cat:'Google', img:'image/g 10 pro.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Porcelain',hex:'#EDE9E3',priceBonus:0},{name:'Hazel',hex:'#7A8B6F',priceBonus:0},{name:'Rose Quartz',hex:'#E8C4C4',priceBonus:0}],
    memory:['128 Go','256 Go','1 To'], memoryPrices:{'128 Go':799,'256 Go':899,'1 To':1099},
    price:799, oldPrice:null,
    specs:{Écran:'6.3" OLED 120Hz',Puce:'Google Tensor G5',Caméra:'50 MP + Zoom 5x',Batterie:'4700 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.8, reviews:1204, stock:'in',
    desc:"Pixel 10 Pro avec Tensor G5 et IA Gemini Ultra. 7 ans de mises à jour garanties." },

  { brand:'Google', name:'Pixel 10', cat:'Google', img:'image/g 10 pro.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Porcelain',hex:'#EDE9E3',priceBonus:0},{name:'Peony',hex:'#F4A0B5',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':599,'256 Go':699},
    price:599, oldPrice:null,
    specs:{Écran:'6.1" OLED 120Hz',Puce:'Google Tensor G5',Caméra:'50 MP',Batterie:'4500 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.7, reviews:654, stock:'in',
    desc:"Pixel 10 avec Tensor G5, IA Gemini et la meilleure caméra entrée de gamme Pixel." },

  // 2025
  { brand:'Google', name:'Pixel 9 Pro', cat:'Google', img:'image/ pixel 9 pro.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Porcelain',hex:'#EDE9E3',priceBonus:0},{name:'Hazel',hex:'#7A8B6F',priceBonus:0},{name:'Rose Quartz',hex:'#E8C4C4',priceBonus:0}],
    memory:['128 Go','256 Go','1 To'], memoryPrices:{'128 Go':699,'256 Go':799,'1 To':999},
    price:699, oldPrice:null,
    specs:{Écran:'6.3" OLED 120Hz',Puce:'Google Tensor G4',Caméra:'50 MP + Zoom 5x',Batterie:'4700 mAh',OS:'Android 15','5G':'Oui'},
    badge:null, rating:4.7, reviews:987, stock:'in',
    desc:"Pixel 9 Pro avec Tensor G4, Gemini intégré et 7 ans de mises à jour." },

  { brand:'Google', name:'Pixel 9a', cat:'Google', img:'image/pixel 9a.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Porcelain',hex:'#EDE9E3',priceBonus:0},{name:'Iris',hex:'#8B7EC8',priceBonus:0},{name:'Peony',hex:'#F4A0B5',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':499,'256 Go':599},
    price:499, oldPrice:null,
    specs:{Écran:'6.1" OLED 120Hz',Puce:'Google Tensor G4',Caméra:'64 MP',Batterie:'5100 mAh',OS:'Android 15','5G':'Oui'},
    badge:null, rating:4.5, reviews:234, stock:'in',
    desc:"Meilleur Pixel accessible — excellente autonomie et caméra IA remarquable." },

  // 2024
  { brand:'Google', name:'Pixel 8 Pro', cat:'Google', img:'image/ pixel 9 pro.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Porcelain',hex:'#EDE9E3',priceBonus:0},{name:'Bay',hex:'#5B7FA6',priceBonus:0}],
    memory:['128 Go','256 Go','1 To'], memoryPrices:{'128 Go':599,'256 Go':699,'1 To':899},
    price:599, oldPrice:999,
    specs:{Écran:'6.7" OLED 120Hz',Puce:'Google Tensor G3',Caméra:'50 MP + Zoom 5x',Batterie:'5050 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.7, reviews:2100, stock:'in',
    desc:"Pixel 8 Pro avec Tensor G3, température de surface et 7 ans de mises à jour." },

  { brand:'Google', name:'Pixel 8a', cat:'Google', img:'image/pixel 9a.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Porcelain',hex:'#EDE9E3',priceBonus:0},{name:'Aloe',hex:'#7FBF7F',priceBonus:0},{name:'Bay',hex:'#5B7FA6',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':399,'256 Go':499},
    price:399, oldPrice:549,
    specs:{Écran:'6.1" OLED 120Hz',Puce:'Google Tensor G3',Caméra:'64 MP',Batterie:'4492 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:1800, stock:'in',
    desc:"Pixel 8a avec Tensor G3 et Magic Eraser IA à prix abordable." },

  // 2023
  { brand:'Google', name:'Pixel 7 Pro', cat:'Google', img:'image/ pixel 9 pro.JPG',
    colors:[{name:'Obsidian',hex:'#1C1C1E',priceBonus:0},{name:'Snow',hex:'#F2F2F7',priceBonus:0},{name:'Hazel',hex:'#7A8B6F',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':449,'256 Go':549,'512 Go':749},
    price:449, oldPrice:899,
    specs:{Écran:'6.7" OLED 120Hz',Puce:'Google Tensor G2',Caméra:'50 MP + Zoom 5x',Batterie:'5000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:3400, stock:'in',
    desc:"Pixel 7 Pro avec Tensor G2, zoom optique 5x et design aluminium recyclé." },

  // 2022
  { brand:'Google', name:'Pixel 6a', cat:'Google', img:'image/pixel 9a.JPG',
    colors:[{name:'Chalk',hex:'#E8E4DC',priceBonus:0},{name:'Charcoal',hex:'#3C3C3C',priceBonus:0},{name:'Sage',hex:'#8FAF8F',priceBonus:0}],
    memory:['128 Go'], memoryPrices:{'128 Go':249},
    price:249, oldPrice:449,
    specs:{Écran:'6.1" OLED 60Hz',Puce:'Google Tensor G1',Caméra:'12 MP',Batterie:'4410 mAh',OS:'Android 12','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:4800, stock:'in',
    desc:"Pixel 6a — Pixel accessible avec Tensor G1 et 5 ans de mises à jour." },

  // 2019
  { brand:'Google', name:'Pixel 3a', cat:'Google', img:'image/pixel 9a.JPG',
    colors:[{name:'Just Black',hex:'#1C1C1E',priceBonus:0},{name:'Clearly White',hex:'#F2F2F7',priceBonus:0},{name:'Purple-ish',hex:'#C9B8D8',priceBonus:0}],
    memory:['64 Go'], memoryPrices:{'64 Go':99},
    price:99, oldPrice:399,
    specs:{Écran:'5.6" OLED 60Hz',Puce:'Snapdragon 670',Caméra:'12 MP',Batterie:'3000 mAh',OS:'Android 9','5G':'Non'},
    badge:'sale', rating:4.2, reviews:7200, stock:'low',
    desc:"Pixel 3a — la meilleure caméra de son époque à prix mini. Reconditionné." },

  // ══════ XIAOMI — Redmi Note 8 (2019) → Xiaomi 15 Ultra (2026) ══════

  // 2026
  { brand:'Xiaomi', name:'Xiaomi 15 Ultra', cat:'Xiaomi', img:'image/Xiaomi 14 Ultra.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'White',hex:'#F2F2F7',priceBonus:0},{name:'Titanium',hex:'#9E9E9E',priceBonus:40}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':899,'512 Go':1049,'1 To':1249},
    price:899, oldPrice:null,
    specs:{Écran:'6.73" AMOLED 144Hz',Puce:'Snapdragon 8 Elite Gen 2',Caméra:'200 MP Leica',Batterie:'6000 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.8, reviews:432, stock:'in',
    desc:"Xiaomi 15 Ultra — 200MP Leica, 6000mAh et charge 120W. Le flagship ultime." },

  { brand:'Xiaomi', name:'Redmi Note 14 Pro', cat:'Xiaomi', img:'image/Redmi Note 13 Pro.JPG',
    colors:[{name:'Midnight Black',hex:'#1C1C1E',priceBonus:0},{name:'Moonlight White',hex:'#F2F2F7',priceBonus:0},{name:'Aurora Purple',hex:'#9B59B6',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':299,'256 Go':369,'512 Go':449},
    price:299, oldPrice:399,
    specs:{Écran:'6.67" AMOLED 120Hz',Puce:'Snapdragon 7s Gen 3',Caméra:'200 MP',Batterie:'5110 mAh',OS:'Android 15','5G':'Oui'},
    badge:'new', rating:4.6, reviews:876, stock:'in',
    desc:"Redmi Note 14 Pro — 200MP, charge 90W et 5G. Le milieu de gamme imbattable." },

  // 2025
  { brand:'Xiaomi', name:'Xiaomi 14 Ultra', cat:'Xiaomi', img:'image/Xiaomi 14 Ultra.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'White',hex:'#F2F2F7',priceBonus:0},{name:'Titanium',hex:'#9E9E9E',priceBonus:30}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':799,'512 Go':929,'1 To':1099},
    price:799, oldPrice:null,
    specs:{Écran:'6.73" AMOLED 120Hz',Puce:'Snapdragon 8 Gen 3',Caméra:'50 MP Leica',Batterie:'5000 mAh',OS:'Android 14','5G':'Oui'},
    badge:null, rating:4.6, reviews:654, stock:'in',
    desc:"Collaboration Leica pour une photographie exceptionnelle. Le flagship Xiaomi le plus complet." },

  { brand:'Xiaomi', name:'Redmi Note 13 Pro', cat:'Xiaomi', img:'image/Redmi Note 13 Pro.JPG',
    colors:[{name:'Midnight Black',hex:'#1C1C1E',priceBonus:0},{name:'Arctic White',hex:'#F2F2F7',priceBonus:0},{name:'Coral Purple',hex:'#9B59B6',priceBonus:0},{name:'Ocean Teal',hex:'#20B2AA',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':329,'256 Go':399},
    price:329, oldPrice:399,
    specs:{Écran:'6.67" AMOLED 120Hz',Puce:'Snapdragon 7s Gen 2',Caméra:'200 MP',Batterie:'5100 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:1234, stock:'in',
    desc:"Caméra 200MP à prix abordable. AMOLED magnifique et charge rapide 67W." },

  // 2024
  { brand:'Xiaomi', name:'Xiaomi 13 Ultra', cat:'Xiaomi', img:'image/Xiaomi 14 Ultra.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'White',hex:'#F2F2F7',priceBonus:0},{name:'Green',hex:'#4A7C59',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':649,'512 Go':799},
    price:649, oldPrice:999,
    specs:{Écran:'6.73" AMOLED 120Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'50 MP Leica',Batterie:'5000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:1890, stock:'in',
    desc:"Xiaomi 13 Ultra avec caméra Leica 4 modules et design en céramique." },

  { brand:'Xiaomi', name:'Redmi Note 12 Pro', cat:'Xiaomi', img:'image/Redmi Note 13 Pro.JPG',
    colors:[{name:'Midnight Black',hex:'#1C1C1E',priceBonus:0},{name:'Sky Blue',hex:'#87CEEB',priceBonus:0},{name:'Forest Green',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':249,'256 Go':309},
    price:249, oldPrice:349,
    specs:{Écran:'6.67" AMOLED 120Hz',Puce:'Snapdragon 732G',Caméra:'50 MP',Batterie:'5000 mAh',OS:'Android 12','5G':'Non'},
    badge:'sale', rating:4.4, reviews:3400, stock:'in',
    desc:"Redmi Note 12 Pro — rapport qualité/prix imbattable avec AMOLED 120Hz." },

  // 2021
  { brand:'Xiaomi', name:'Redmi Note 10 Pro', cat:'Xiaomi', img:'image/Redmi Note 13 Pro.JPG',
    colors:[{name:'Onyx Gray',hex:'#4A4A4A',priceBonus:0},{name:'Glacier Blue',hex:'#87CEEB',priceBonus:0},{name:'Vintage Bronze',hex:'#8B6F47',priceBonus:0}],
    memory:['64 Go','128 Go'], memoryPrices:{'64 Go':149,'128 Go':189},
    price:149, oldPrice:279,
    specs:{Écran:'6.67" Super AMOLED 120Hz',Puce:'Snapdragon 732G',Caméra:'108 MP',Batterie:'5020 mAh',OS:'Android 11','5G':'Non'},
    badge:'sale', rating:4.4, reviews:7600, stock:'in',
    desc:"Redmi Note 10 Pro avec Super AMOLED 120Hz et caméra 108MP pour un prix mini." },

  // 2019
  { brand:'Xiaomi', name:'Redmi Note 8 Pro', cat:'Xiaomi', img:'image/Redmi Note 13 Pro.JPG',
    colors:[{name:'Mineral Grey',hex:'#808080',priceBonus:0},{name:'Forest Green',hex:'#4A7C59',priceBonus:0},{name:'Pearl White',hex:'#F2F2F7',priceBonus:0}],
    memory:['64 Go','128 Go'], memoryPrices:{'64 Go':99,'128 Go':129},
    price:99, oldPrice:199,
    specs:{Écran:'6.53" IPS LCD',Puce:'Helio G90T',Caméra:'64 MP',Batterie:'4500 mAh',OS:'Android 9','5G':'Non'},
    badge:'sale', rating:4.2, reviews:12400, stock:'low',
    desc:"Redmi Note 8 Pro — pionnier du 64MP en entrée de gamme. Solide et abordable." },

  // ══════ ONEPLUS — OnePlus 6T (2018) → OnePlus 13 (2026) ══════

  // 2026
  { brand:'OnePlus', name:'OnePlus 13', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Midnight Ocean',hex:'#1A2F5A',priceBonus:0},{name:'Arctic Dawn',hex:'#E8E4DC',priceBonus:0},{name:'Black Eclipse',hex:'#1C1C1E',priceBonus:30}],
    memory:['256 Go','512 Go','1 To'], memoryPrices:{'256 Go':899,'512 Go':1029,'1 To':1199},
    price:899, oldPrice:null,
    specs:{Écran:'6.82" AMOLED 120Hz',Puce:'Snapdragon 8 Elite',Caméra:'50 MP Hasselblad',Batterie:'6000 mAh',OS:'Android 15','5G':'Oui'},
    badge:'new', rating:4.7, reviews:543, stock:'in',
    desc:"Charge 100W, caméra Hasselblad et la meilleure batterie du marché." },

  // 2025
  { brand:'OnePlus', name:'OnePlus 12', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Flowy Emerald',hex:'#4A7C59',priceBonus:0},{name:'Silky Black',hex:'#1C1C1E',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':749,'512 Go':879},
    price:749, oldPrice:899,
    specs:{Écran:'6.82" AMOLED 120Hz',Puce:'Snapdragon 8 Gen 3',Caméra:'50 MP Hasselblad',Batterie:'5400 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:1120, stock:'in',
    desc:"OnePlus 12 avec charge 100W, Hasselblad Periscope et AMOLED LTPO 120Hz." },

  { brand:'OnePlus', name:'OnePlus Nord 4', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Mercurial Silver',hex:'#D0D0D0',priceBonus:0},{name:'Obsidian Midnight',hex:'#1C1C1E',priceBonus:0},{name:'Oasis Green',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','256 Go','512 Go'], memoryPrices:{'128 Go':399,'256 Go':479,'512 Go':579},
    price:399, oldPrice:499,
    specs:{Écran:'6.74" AMOLED 120Hz',Puce:'Snapdragon 7+ Gen 3',Caméra:'50 MP',Batterie:'5500 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:870, stock:'in',
    desc:"OnePlus Nord 4 en métal unibody avec charge 100W et 5G abordable." },

  // 2024
  { brand:'OnePlus', name:'OnePlus 11', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Titan Black',hex:'#1C1C1E',priceBonus:0},{name:'Eternal Green',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':549,'256 Go':649},
    price:549, oldPrice:799,
    specs:{Écran:'6.7" AMOLED 120Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'50 MP Hasselblad',Batterie:'5000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.6, reviews:2300, stock:'in',
    desc:"OnePlus 11 avec charge SuperVOOC 100W et Hasselblad Natural Color Calibration." },

  // 2022
  { brand:'OnePlus', name:'OnePlus 10 Pro', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Volcanic Black',hex:'#1C1C1E',priceBonus:0},{name:'Emerald Forest',hex:'#4A7C59',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':349,'256 Go':449},
    price:349, oldPrice:899,
    specs:{Écran:'6.7" AMOLED LTPO3 120Hz',Puce:'Snapdragon 8 Gen 1',Caméra:'48 MP Hasselblad',Batterie:'5000 mAh',OS:'Android 12','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:4100, stock:'in',
    desc:"OnePlus 10 Pro avec charge rapide 80W, caméra Hasselblad et design ultra premium." },

  // 2019
  { brand:'OnePlus', name:'OnePlus 7 Pro', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Mirror Gray',hex:'#808080',priceBonus:0},{name:'Nebula Blue',hex:'#2E5F8A',priceBonus:0},{name:'Almond',hex:'#E8D5B0',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':179,'256 Go':219},
    price:179, oldPrice:649,
    specs:{Écran:'6.67" AMOLED 90Hz',Puce:'Snapdragon 855',Caméra:'48 MP Triple',Batterie:'4000 mAh',OS:'Android 9','5G':'Non'},
    badge:'sale', rating:4.3, reviews:8900, stock:'low',
    desc:"OnePlus 7 Pro, l'un des premiers écrans 90Hz. Reconditionné à petit prix." },

  // 2018
  { brand:'OnePlus', name:'OnePlus 6T', cat:'OnePlus', img:'image/OnePlus 13.JPG',
    colors:[{name:'Mirror Black',hex:'#1C1C1E',priceBonus:0},{name:'Midnight Black',hex:'#2C2C2C',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':129,'256 Go':159},
    price:129, oldPrice:549,
    specs:{Écran:'6.41" AMOLED',Puce:'Snapdragon 845',Caméra:'16 MP Dual',Batterie:'3700 mAh',OS:'Android 9','5G':'Non'},
    badge:'sale', rating:4.2, reviews:10200, stock:'low',
    desc:"OnePlus 6T — flagship killer 2018. Lecteur d'empreintes sous l'écran et Warp Charge." },

  // ══════ SONY — Xperia 1 II (2020) → Xperia 1 VII (2026) ══════

  // 2026
  { brand:'Sony', name:'Xperia 1 VII', cat:'Sony', img:'image/Xperia 1 VI.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'Platinum Silver',hex:'#D0D0D0',priceBonus:0},{name:'Forest Green',hex:'#4A7C59',priceBonus:50}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':1299,'512 Go':1499},
    price:1299, oldPrice:null,
    specs:{Écran:'6.5" 4K OLED 144Hz',Puce:'Snapdragon 8 Elite Gen 2',Caméra:'52 MP Zeiss',Batterie:'5500 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.7, reviews:178, stock:'low',
    desc:"Xperia 1 VII — 4K 144Hz, Zeiss et meilleur audio Sony sur smartphone." },

  // 2025
  { brand:'Sony', name:'Xperia 1 VI', cat:'Sony', img:'image/Xperia 1 VI.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'Platinum Silver',hex:'#D0D0D0',priceBonus:0},{name:'Khaki Green',hex:'#7A8B6F',priceBonus:50}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':1199,'512 Go':1399},
    price:1199, oldPrice:null,
    specs:{Écran:'6.5" 4K OLED 120Hz',Puce:'Snapdragon 8 Gen 3',Caméra:'52 MP Zeiss',Batterie:'5000 mAh',OS:'Android 14','5G':'Oui'},
    badge:null, rating:4.6, reviews:321, stock:'low',
    desc:"Xperia 1 VI — 4K HDR, Zeiss et audio Hi-Res. Pour les créatifs exigeants." },

  { brand:'Sony', name:'Xperia 5 V', cat:'Sony', img:'image/Xperia 1 VI.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'Platinum Silver',hex:'#D0D0D0',priceBonus:0},{name:'Blue',hex:'#2E5F8A',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':799,'256 Go':949},
    price:799, oldPrice:999,
    specs:{Écran:'6.1" OLED 120Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'12 MP Zeiss Triple',Batterie:'5000 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:540, stock:'in',
    desc:"Xperia 5 V compact — Zeiss 3 capteurs, OLED 120Hz et batterie 5000mAh." },

  // 2024
  { brand:'Sony', name:'Xperia 1 V', cat:'Sony', img:'image/Xperia 1 VI.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'Platinum Silver',hex:'#D0D0D0',priceBonus:0},{name:'Khaki Green',hex:'#7A8B6F',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':899,'512 Go':1099},
    price:899, oldPrice:1399,
    specs:{Écran:'6.5" 4K OLED 120Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'52 MP Zeiss',Batterie:'5000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.5, reviews:690, stock:'in',
    desc:"Xperia 1 V avec capteur Exmor T et écran 4K OLED unique sur le marché." },

  // 2022
  { brand:'Sony', name:'Xperia 1 IV', cat:'Sony', img:'image/Xperia 1 VI.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'White',hex:'#F2F2F7',priceBonus:0},{name:'Purple',hex:'#9B59B6',priceBonus:0}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':649,'512 Go':849},
    price:649, oldPrice:1299,
    specs:{Écran:'6.5" 4K OLED 120Hz',Puce:'Snapdragon 8 Gen 1',Caméra:'12 MP Zeiss Triple',Batterie:'5000 mAh',OS:'Android 12','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:1200, stock:'low',
    desc:"Xperia 1 IV — zoom optique continu 85-125mm et vidéo 4K 120fps." },

  // 2020
  { brand:'Sony', name:'Xperia 1 II', cat:'Sony', img:'image/Xperia 1 VI.JPG',
    colors:[{name:'Black',hex:'#1C1C1E',priceBonus:0},{name:'White',hex:'#F2F2F7',priceBonus:0},{name:'Purple',hex:'#9B59B6',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':299,'256 Go':399},
    price:299, oldPrice:1099,
    specs:{Écran:'6.5" 4K OLED 60Hz',Puce:'Snapdragon 865',Caméra:'12 MP Zeiss Triple',Batterie:'4000 mAh',OS:'Android 10','5G':'Oui'},
    badge:'sale', rating:4.3, reviews:2800, stock:'low',
    desc:"Xperia 1 II — premier Sony 5G avec écran 4K et caméra Zeiss." },

  // ══════ MOTOROLA — Moto G7 (2019) → Edge 60 Ultra (2026) ══════

  // 2026
  { brand:'Motorola', name:'Motorola Edge 60 Ultra', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Midnight Blue',hex:'#1A2F5A',priceBonus:0},{name:'Sand',hex:'#C8A870',priceBonus:0},{name:'Vegan Leather',hex:'#8B6F47',priceBonus:50}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':799,'512 Go':949},
    price:799, oldPrice:null,
    specs:{Écran:'6.7" pOLED 165Hz',Puce:'Snapdragon 8 Elite Gen 2',Caméra:'200 MP',Batterie:'5000 mAh',OS:'Android 16','5G':'Oui'},
    badge:'new', rating:4.5, reviews:234, stock:'in',
    desc:"Motorola Edge 60 Ultra — 200MP, cuir végétal et charge sans fil 50W." },

  { brand:'Motorola', name:'Moto G85 5G', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Cobalt Blue',hex:'#2E5F8A',priceBonus:0},{name:'Olive Green',hex:'#6B8E23',priceBonus:0},{name:'Caramel Latte',hex:'#C8A870',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':249,'256 Go':299},
    price:249, oldPrice:329,
    specs:{Écran:'6.67" pOLED 120Hz',Puce:'Snapdragon 6 Gen 3',Caméra:'50 MP OIS',Batterie:'5000 mAh',OS:'Android 15','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:654, stock:'in',
    desc:"Moto G85 5G — pOLED 120Hz, OIS 50MP et charge 33W. Rapport qualité/prix excellent." },

  // 2025
  { brand:'Motorola', name:'Motorola Edge 50 Ultra', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Forest Grey',hex:'#5A6B5A',priceBonus:0},{name:'Peach Fuzz',hex:'#FFBBA0',priceBonus:0},{name:'Nordic Wood',hex:'#8B6F47',priceBonus:50}],
    memory:['256 Go','512 Go'], memoryPrices:{'256 Go':699,'512 Go':849},
    price:699, oldPrice:849,
    specs:{Écran:'6.7" pOLED 165Hz',Puce:'Snapdragon 8s Gen 3',Caméra:'50 MP',Batterie:'4500 mAh',OS:'Android 14','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:412, stock:'in',
    desc:"Design en vrai bois, écran 165Hz ultra-fluide et charge sans fil 50W." },

  { brand:'Motorola', name:'Moto G54 5G', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Midnight Blue',hex:'#1A2F5A',priceBonus:0},{name:'Mint Green',hex:'#B5D5C4',priceBonus:0},{name:'Pearl White',hex:'#F2F2F7',priceBonus:0}],
    memory:['128 Go','256 Go'], memoryPrices:{'128 Go':199,'256 Go':249},
    price:199, oldPrice:279,
    specs:{Écran:'6.5" IPS LCD 120Hz',Puce:'Dimensity 7020',Caméra:'50 MP',Batterie:'6000 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.3, reviews:890, stock:'in',
    desc:"Moto G54 5G — batterie 6000mAh, 5G et caméra 50MP. Champion d'autonomie." },

  // 2023
  { brand:'Motorola', name:'Motorola Edge 40 Pro', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Interstellar Black',hex:'#1C1C1E',priceBonus:0},{name:'Lunar Blue',hex:'#2E5F8A',priceBonus:0}],
    memory:['256 Go'], memoryPrices:{'256 Go':449},
    price:449, oldPrice:799,
    specs:{Écran:'6.67" pOLED 165Hz',Puce:'Snapdragon 8 Gen 2',Caméra:'50 MP',Batterie:'4600 mAh',OS:'Android 13','5G':'Oui'},
    badge:'sale', rating:4.4, reviews:1600, stock:'in',
    desc:"Edge 40 Pro avec Snapdragon 8 Gen 2, charge 125W et écran 165Hz." },

  // 2021
  { brand:'Motorola', name:'Moto G Power (2021)', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Flash Gray',hex:'#808080',priceBonus:0},{name:'Polar Silver',hex:'#D0D0D0',priceBonus:0}],
    memory:['64 Go','128 Go'], memoryPrices:{'64 Go':99,'128 Go':129},
    price:99, oldPrice:199,
    specs:{Écran:'6.6" IPS LCD 60Hz',Puce:'Snapdragon 662',Caméra:'48 MP Triple',Batterie:'5000 mAh',OS:'Android 10','5G':'Non'},
    badge:'sale', rating:4.2, reviews:6700, stock:'in',
    desc:"Moto G Power 2021 — triple caméra 48MP et batterie 5000mAh. Autonomie record." },

  // 2019
  { brand:'Motorola', name:'Moto G7 Power', cat:'Motorola', img:'image/Motorola Edge 50 Ultra.JPG',
    colors:[{name:'Ceramic Black',hex:'#1C1C1E',priceBonus:0},{name:'Ice Violet',hex:'#C9B8D8',priceBonus:0}],
    memory:['32 Go','64 Go'], memoryPrices:{'32 Go':59,'64 Go':79},
    price:59, oldPrice:249,
    specs:{Écran:'6.2" IPS LCD',Puce:'Snapdragon 632',Caméra:'12 MP',Batterie:'5000 mAh',OS:'Android 9','5G':'Non'},
    badge:'sale', rating:4.1, reviews:9800, stock:'low',
    desc:"Moto G7 Power — batterie 5000mAh et TurboPower. L'entrée de gamme longue durée." },

];

// ── Calcul du prix selon mémoire + couleur
function getProductPrice(product, memory, colorHex) {
  const memPrice = product.memoryPrices
    ? (product.memoryPrices[memory] ?? product.price)
    : product.price;
  const colorObj = product.colors.find(c => c.hex === colorHex);
  const colorBonus = (colorObj && colorObj.priceBonus) ? colorObj.priceBonus : 0;
  return memPrice + colorBonus;
}

// ── Catégories de filtres
const filterCategories = {
  fr: ['Tous', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Sony', 'Motorola', 'Promo'],
  en: ['All', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Sony', 'Motorola', 'Sale'],
};
