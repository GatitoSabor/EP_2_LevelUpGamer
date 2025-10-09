import products from '../data/products';
import imgVideo from '../assets/promos/promoComponentes.jpg';
import imgMonitor from '../assets/promos/promoMonitor.jpg';
import imgSSD from '../assets/promos/promoComponentes2.jpg';
import imgPC from '../assets/promos/promoPC.jpg';

export const filteredProductIds = ["SG003","CG002","CG004","AU002"];
export const filteredProducts = products.filter(p => filteredProductIds.includes(p.id));

export const valorantProducts = products.filter(p => p.juego === 'Valorant').slice(0, 4);
export const freeShippingProducts = products.filter(p => p.envioGratis).slice(0, 4);

export const featuredCategories = [
  { name: "Tarjetas de Video", image: imgVideo, filtro: "Componentes" },
  { name: "Monitores Gamer", image: imgMonitor, filtro: "Monitores" },
  { name: "SSD", image: imgSSD, filtro: "Componentes" },
  { name: "PC Escritorio", image: imgPC, filtro: "Computadoras" }
];

export const slides = [
  { key: 0, src: require('../assets/promos/2.jpg') },
  { key: 1, src: require('../assets/promos/3.jpg') },
  { key: 2, src: require('../assets/promos/4.jpg') }
];
