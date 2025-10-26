import { calcularStock, obtenerPrecioDescontado, obtenerPrecioTransferencia, obtenerProductosRelacionados } from './ProductDetailModal';

describe('ProductDetailModal utils', () => {
  it('calcula stock como un número', () => {
    expect(typeof calcularStock()).toBe('number');
  });

  it('obtiene precio descontado', () => {
    expect(obtenerPrecioDescontado({ price: 1000, discount: 0.2 })).toBe(800);
  });

  it('obtiene precio transferencia', () => {
    expect(obtenerPrecioTransferencia({ price: 1000, discount: 0.2 })).toBeCloseTo(752, 0);
  });

  it('obtiene productos relacionados como array', () => {
    const prod = { id: 'X', category: 'catA' };
    const rel = obtenerProductosRelacionados(prod);
    expect(Array.isArray(rel)).toBeTrue();
  });
});