import products from '../data/products';
import {
  calcularStock,
  obtenerPrecioDescontado,
  obtenerPrecioTransferencia,
  obtenerProductosRelacionados
} from '../services/ProductDetailModal';

const testProduct = {
  id: 'PK001',
  category: 'Teclados',
  price: 100000,
  discount: 0.15
};

const relatedProducts = [
  { id: 'PK002', category: 'Teclados', price: 60000, discount: 0 },
  { id: 'PK003', category: 'Teclados', price: 40000, discount: 0.1 }
];

// Simula products importado con más elementos (si usas el real elimina el mock)
const mockProducts = [
  { id: 'PK001', category: 'Teclados', price: 100000, discount: 0.15 },
  { id: 'PK002', category: 'Teclados', price: 60000, discount: 0 },
  { id: 'PK003', category: 'Teclados', price: 40000, discount: 0.1 },
  { id: 'PK010', category: 'Mouse', price: 20000, discount: 0 },
];

describe('ProductDetailModal functions', () => {
  it('calcularStock da un valor entre 1 y 20', () => {
    for (let i = 0; i < 20; i++) {
      const stock = calcularStock();
      expect(stock).toBeGreaterThanOrEqual(1);
      expect(stock).toBeLessThanOrEqual(20);
    }
  });

  it('obtenerPrecioDescontado calcula bien el descuento', () => {
    expect(obtenerPrecioDescontado(testProduct)).toBeCloseTo(85000); // 100000*(1-0.15)
    expect(obtenerPrecioDescontado({...testProduct, discount: 0})).toBeCloseTo(100000);
    expect(obtenerPrecioDescontado({...testProduct, discount: undefined})).toBeCloseTo(100000);
  });

  it('obtenerPrecioTransferencia aplica rebaja extra sobre descuento', () => {
    expect(obtenerPrecioTransferencia(testProduct)).toBeCloseTo(79900); // 100000*0.85*0.94
  });

  it('obtenerProductosRelacionados filtra por categoría y excluye el actual', () => {
    const relacionados = obtenerProductosRelacionados(testProduct);
    expect(relacionados.every(p => p.category === 'Teclados')).toBeTrue();
    expect(relacionados.find(p => p.id === testProduct.id)).toBeUndefined();
    expect(relacionados.length).toBeLessThanOrEqual(5);
  });
});
