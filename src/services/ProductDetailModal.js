import products from '../data/products';

export function calcularStock() {
  return Math.floor(Math.random() * 20) + 1;
}

export function obtenerPrecioDescontado(product) {
  return product.price * (1 - (product.discount ?? 0));
}

export function obtenerPrecioTransferencia(product) {
  const precioDescontado = obtenerPrecioDescontado(product);
  return precioDescontado * 0.94;
}

// Productos relacionados, mismos category excluyendo el actual
export function obtenerProductosRelacionados(product) {
  return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);
}
