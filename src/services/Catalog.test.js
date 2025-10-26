import { filtrarProductos, obtenerMarcas, obtenerCategorias, obtenerJuegos } from './Catalog';

describe('Catalog utils', () => {
  const items = [
    { id: 1, 
      marca: 'MSI', 
      categoria: 'GPU', 
      juego: 'Valorant',
      price: 100,
      discount: 0,
      envioGratis: false
    }
  ];

  it('filtra productos por marca', () => {
    const filters = {
      marca: 'MSI',
      categoria: '',
      juego: '',
      precioMin: 0,
      precioMax: 1000,
      soloConDescuento: false,
      envioGratis: false
    };
    const filtered = filtrarProductos(items, filters);
    expect(filtered.length).toBe(1);
  });

  it('filtra productos con todos los filtros', () => {
    const filters = {
      marca: 'MSI',
      categoria: 'GPU',
      juego: 'Valorant',
      precioMin: 0,
      precioMax: 1000,
      soloConDescuento: true,
      envioGratis: true
    };
    const itemsConDescuento = [{
      ...items[0],
      discount: 10,
      envioGratis: true
    }];
    const filtered = filtrarProductos(itemsConDescuento, filters);
    expect(filtered.length).toBe(1);
  });

  it('maneja arrays vacíos', () => {
    const filters = {
      marca: '',
      categoria: '',
      juego: '',
      precioMin: 0,
      precioMax: 1000,
      soloConDescuento: false,
      envioGratis: false
    };
    const filtered = filtrarProductos([], filters);
    expect(filtered.length).toBe(0);
  });

  it('obtiene marcas', () => {
    const marcas = obtenerMarcas(items);
    expect(Array.from(marcas).includes('MSI')).toBe(true);
  });

  it('obtiene categorías', () => {
    const categorias = obtenerCategorias(items);
    expect(Array.from(categorias).includes('GPU')).toBe(true);
  });

  it('obtiene juegos', () => {
    const juegos = obtenerJuegos(items);
    expect(Array.from(juegos).includes('Valorant')).toBe(true);
  });
});