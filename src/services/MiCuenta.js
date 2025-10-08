export const descuentos = [
  { id: 1, texto: "Descuento del 10% en productos seleccionados", puntos: 500, descuentoPorc: 10 },
  { id: 2, texto: "20% de descuento en productos seleccionados", puntos: 1000, descuentoPorc: 20 },
  { id: 3, texto: "Descuento del 10% para cualquier producto", puntos: 2000, descuentoPorc: 10 },
  { id: 4, texto: "Envío gratuito", puntos: 300 }
];

// Función para canjear descuento si hay suficientes puntos
export function canjearDescuento(puntos, desc, cupones, setCuponesInternos, setPuntos) {
  if (puntos < desc.puntos) {
    alert("No tienes suficientes puntos para esta opción.");
    return false;
  }
  const confirmar = window.confirm(`¿Confirmas canjear ${desc.puntos} puntos para:\n${desc.texto}?`);
  if (!confirmar) return false;
  
  const nuevoCupon = {
    codigo: `LVLUP${Date.now()}`,
    descripcion: desc.texto,
    descuento: desc.descuentoPorc || 0,
    id: desc.id,
    disponible: true,
  };
  setCuponesInternos([...cupones, nuevoCupon]);
  setPuntos(prev => prev - desc.puntos);
  alert("Descuento canjeado y añadido a tus cupones.");
  return true;
}
