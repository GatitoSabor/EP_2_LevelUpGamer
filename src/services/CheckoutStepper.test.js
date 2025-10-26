import {
  generarDireccionCompleta,
  calcularPrecioConDescuentos,
  calcularEnvioBase,
  calcularSubtotal
} from './CheckoutStepper';

describe('CheckoutStepper utils', () => {

  it('genera dirección completa, incluso con espacios', () => {
    expect(generarDireccionCompleta(' Calle  ', ' 123 ', 'Depto')).toBe('Calle 123 Depto');
  });

  it('calcula precio con descuentos (sin descuento)', () => {
    const total = calcularPrecioConDescuentos(1000, 0, 0);
    expect(total).toBe(1000);
  });

  it('calcula precio con descuento de producto solamente', () => {
    const total = calcularPrecioConDescuentos(1000, 0.1, 0);
    expect(total).toBe(900);
  });

  it('calcula envio base cuando nadie tiene envio gratis', () => {
    const cart = [{ envioGratis: false }, { envioGratis: false }];
    expect(calcularEnvioBase(cart, 2000)).toBe(2000);
  });

  it('calcula envio base con cart vacío', () => {
    expect(calcularEnvioBase([], 999)).toBe(999);
  });

  it('calcula subtotal con precioKey alternativo', () => {
    const cart = [
      { priceTransferencia: 500, discount: 0.2, quantity: 2 },
      { priceTransferencia: 1000, discount: 0, quantity: 1 }
    ];
    const total = calcularSubtotal(cart, 0, 'priceTransferencia');
    expect(total).toBeCloseTo(500*0.8*2 + 1000, 0);
  });

  it('calcula subtotal con item sin priceTransferencia (fallback a price)', () => {
    const cart = [
      { price: 300, discount: 0.1, quantity: 1 }, // price solo
    ];
    expect(calcularSubtotal(cart, 0.1, 'priceTransferencia')).toBeCloseTo(300*0.9*0.9, 0);
  });

  it('subtotal de carrito vacío retorna 0', () => {
    expect(calcularSubtotal([], 0)).toBe(0);
  });

});
