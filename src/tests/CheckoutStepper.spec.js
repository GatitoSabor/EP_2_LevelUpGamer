import {
  generarDireccionCompleta,
  calcularPrecioConDescuentos,
  calcularEnvioBase,
  calcularSubtotal
} from '../services/CheckoutStepper';

describe('generarDireccionCompleta', () => {
  it('une calle, número y tipo', () => {
    const dir = generarDireccionCompleta('Av. Matta', '123', 'Dpto');
    expect(dir).toBe('Av. Matta 123 Dpto');
  });

  it('remueve espacios y une correctamente', () => {
    const dir = generarDireccionCompleta(' Calle   ', ' 77 ', ' Casa ');
    expect(dir).toBe('Calle 77 Casa ');
  });
});

describe('calcularPrecioConDescuentos', () => {
  it('considera ambos descuentos correctamente', () => {
    expect(calcularPrecioConDescuentos(100, 0.1, 0.2)).toBeCloseTo(72); // 100 * 0.9 * 0.8
  });

  it('devuelve precio base si los descuentos son 0', () => {
    expect(calcularPrecioConDescuentos(99, 0, 0)).toBe(99);
  });
});

describe('calcularEnvioBase', () => {
  it('devuelve 0 si algún producto tiene envioGratis', () => {
    const cart = [{ envioGratis: false }, { envioGratis: true }];
    expect(calcularEnvioBase(cart)).toBe(0);
  });

  it('devuelve el valor base si ningún producto tiene envioGratis', () => {
    const cart = [{ envioGratis: false }, { envioGratis: false }];
    expect(calcularEnvioBase(cart, 5000)).toBe(5000);
  });
});

describe('calcularSubtotal', () => {
  it('calcula subtotal correctamente sin cupon', () => {
    const cart = [
      { price: 10000, discount: 0.1, quantity: 2 },
      { price: 5000, discount: 0, quantity: 1 }
    ];
    expect(calcularSubtotal(cart)).toBeCloseTo(23000);
  });

  it('utiliza precioKey si existe', () => {
    const cart = [
      { price: 10000, priceTransferencia: 8000, discount: 0, quantity: 1 }
    ];
    expect(calcularSubtotal(cart, 0, 'priceTransferencia')).toBe(8000);
  });

  it('aplica descuentoCupon', () => {
    const cart = [
      { price: 20000, discount: 0, quantity: 1 }
    ];
    // 20000 * (1 - 0) * (1 - 0.25) * 1 = 15000
    expect(calcularSubtotal(cart, 0.25)).toBeCloseTo(15000);
  });

  it('retorna 0 si carrito está vacío', () => {
    expect(calcularSubtotal([], 0)).toBe(0);
  });
});
