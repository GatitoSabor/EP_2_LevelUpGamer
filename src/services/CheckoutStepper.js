export function generarDireccionCompleta(calle, numero, tipo) {
  return `${calle.trim()} ${numero.trim()} ${tipo}`.replace(/\s+/g, ' ').trim();
}

export function calcularPrecioConDescuentos(precioBase = 0, descuentoProducto = 0, descuentoCupon = 0) {
  return precioBase * (1 - descuentoProducto) * (1 - descuentoCupon);
}

export function calcularEnvioBase(cart, envioBase = 3000) {
  const tieneEnvioGratis = cart.some(item => item.envioGratis);
  return tieneEnvioGratis ? 0 : envioBase;
}

export function calcularSubtotal(cart, descuentoCupon = 0, precioKey = 'priceTransferencia') {
  return cart.reduce((acc, item) =>
    acc + (item[precioKey] ?? item.price) * (1 - (item.discount || 0)) * (1 - descuentoCupon) * item.quantity, 0);
}
