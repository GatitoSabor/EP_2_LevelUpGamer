import { filteredProducts, valorantProducts, freeShippingProducts, featuredCategories, slides } from './Home';

describe('Home exports', () => {
  it('exporta arrays definidos', () => {
    expect(filteredProducts).toBeDefined();
    expect(Array.isArray(filteredProducts)).toBeTrue();
    expect(valorantProducts).toBeDefined();
    expect(freeShippingProducts).toBeDefined();
    expect(featuredCategories).toBeDefined();
    expect(slides).toBeDefined();
  });
});