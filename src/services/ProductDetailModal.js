// src/services/ProductDetailModal.js

export function calcularStock(producto) {
  // Si tienes stock real del backend, úsalo; si no, genera aleatorio
  return producto.stock || Math.floor(Math.random() * 20) + 1;
}

export function obtenerPrecioDescontado(producto) {
  return producto.precio * (1 - (producto.descuento ?? 0));
}

export function obtenerPrecioTransferencia(producto) {
  const precioDescontado = obtenerPrecioDescontado(producto);
  return precioDescontado * 0.94;
}

export function obtenerProductosRelacionados(producto, todosLosProductos) {
  // Ahora recibe todos los productos como parámetro
  return todosLosProductos
    .filter(p => p.categoria === producto.categoria && p.idProducto !== producto.idProducto)
    .slice(0, 5);
}
