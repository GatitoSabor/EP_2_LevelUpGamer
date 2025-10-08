export function filtrarProductos(products, filters) {
  return products.filter(p => 
    (filters.marca === '' || p.marca === filters.marca) &&
    (filters.categoria === '' || p.categoria === filters.categoria) &&
    (filters.juego === '' || p.juego === filters.juego) &&
    p.price >= filters.precioMin &&
    p.price <= filters.precioMax &&
    (!filters.soloConDescuento || (p.discount && p.discount > 0)) &&
    (!filters.envioGratis || p.envioGratis === true)
  );
}

export function obtenerMarcas(products) {
  return [...new Set(products.map(p => p.marca))];
}

export function obtenerCategorias(products) {
  return [...new Set(products.map(p => p.categoria))];
}

export function obtenerJuegos(products) {
  return [...new Set(products.map(p => p.juego).filter(Boolean))];
}
