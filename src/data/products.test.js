import products from './products';

describe('products', () => {
  it('debe ser un array de productos', () => {
    expect(Array.isArray(products)).toBeTrue();
    expect(products.length).toBeGreaterThan(0);
  });

  it('cada producto debe tener id, name y description', () => {
    products.forEach(product => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.description).toBeDefined();
    });
  });

  it('todos los ids son únicos', () => {
    const ids = products.map(p => p.id);
    const unique = Array.from(new Set(ids));
    expect(unique.length).toBe(ids.length);
  });

  it('si existe descriptionmodal, debe ser string', () => {
    products.forEach(product => {
      if (product.descriptionmodal !== undefined) {
        expect(typeof product.descriptionmodal).toBe('string');
      }
    });
  });
});
