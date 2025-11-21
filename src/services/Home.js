// src/services/Home.js
import imgVideo from '../assets/promos/promoComponentes.jpg';
import imgMonitor from '../assets/promos/promoMonitor.jpg';
import imgSSD from '../assets/promos/promoComponentes2.jpg';
import imgPC from '../assets/promos/promoPC.jpg';

// IDs de productos destacados con descuento
export const filteredProductIds = ["SG003", "CG002", "CG004", "AU002"];

// Funciones que reciben productos del backend y devuelven filtrados
export function getFilteredProducts(products) {
  return products.filter(p => filteredProductIds.includes(p.idProducto)).slice(0, 4);
}

export function getValorantProducts(products) {
  return products.filter(p => p.juego === 'Valorant').slice(0, 4);
}

export function getFreeShippingProducts(products) {
  return products.filter(p => p.envioGratis).slice(0, 4);
}

export function getDiscountProducts(products) {
  return products.filter(p => p.descuento && p.descuento > 0).slice(0, 4);
}

// Categorías destacadas (sin cambio)
export const featuredCategories = [
  { name: "Tarjetas de Video", image: imgVideo, filtro: "Componentes" },
  { name: "Monitores Gamer", image: imgMonitor, filtro: "Monitores" },
  { name: "SSD", image: imgSSD, filtro: "Componentes" },
  { name: "PC Escritorio", image: imgPC, filtro: "Computadoras" }
];

// Slides del carrusel (sin cambio)
export const slides = [
  { key: 0, src: require('../assets/promos/2.jpg') },
  { key: 1, src: require('../assets/promos/3.jpg') },
  { key: 2, src: require('../assets/promos/4.jpg') }
];
