import {
  filteredProductIds,
  filteredProducts,
  valorantProducts,
  freeShippingProducts,
  featuredCategories,
  slides
} from '../services/Home';

describe('Home module', () => {
  it('filteredProductIds contiene los ids esperados', () => {
    expect(filteredProductIds).toEqual(jasmine.arrayContaining(['SG003','CG002','CG004','AU002']));
  });

  it('filteredProducts son productos filtrados por id', () => {
    expect(filteredProducts.every(p => filteredProductIds.includes(p.id))).toBe(true);
  });

  it('valorantProducts contiene máximo 4 y todos juego="Valorant"', () => {
    expect(valorantProducts.length).toBeLessThanOrEqual(4);
    expect(valorantProducts.every(p => p.juego === 'Valorant')).toBe(true);
  });

  it('freeShippingProducts contiene máximo 4 y todos tienen envioGratis', () => {
    expect(freeShippingProducts.length).toBeLessThanOrEqual(4);
    expect(freeShippingProducts.every(p => p.envioGratis)).toBe(true);
  });

  it('featuredCategories tiene nombre, imagen y filtro', () => {
    expect(featuredCategories.length).toBeGreaterThan(0);
    featuredCategories.forEach(cat => {
      expect(cat.name).toBeDefined();
      expect(cat.image).toBeDefined();
      expect(cat.filtro).toBeDefined();
    });
  });

  it('slides tiene keys y src', () => {
    expect(slides.length).toBeGreaterThan(0);
    slides.forEach(slide => {
      expect(slide.key).not.toBeUndefined();
      expect(slide.src).toBeDefined();
    });
  });
});
