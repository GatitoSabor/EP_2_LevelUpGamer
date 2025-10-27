import { filtrarProductos, obtenerMarcas, obtenerCategorias, obtenerJuegos } from '../services/Catalog';

const mockProducts = [
  { marca: 'Logitech', categoria: 'Teclado', juego: 'Fortnite', price: 50000, discount: 10, envioGratis: true },
  { marca: 'Razer', categoria: 'Mouse', juego: null, price: 35000, discount: 0, envioGratis: false },
  { marca: 'HyperX', categoria: 'Auriculares', juego: 'Valorant', price: 45000, discount: 20, envioGratis: false },
  { marca: 'Logitech', categoria: 'Teclado', juego: 'Valorant', price: 60000, discount: 0, envioGratis: true }
];

describe('filtrarProductos', () => {
  it('devuelve todos si los filtros están vacíos', () => {
    const filters = {
      marca: '',
      categoria: '',
      juego: '',
      precioMin: 0,
      precioMax: 100000,
      soloConDescuento: false,
      envioGratis: false
    };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.length).toBe(4);
  });

  it('filtra por marca', () => {
    const filters = { marca: 'Logitech', categoria: '', juego: '', precioMin: 0, precioMax: 100000, soloConDescuento: false, envioGratis: false };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.every(p => p.marca === 'Logitech')).toBeTrue();
  });

  it('filtra por categoria', () => {
    const filters = { marca: '', categoria: 'Mouse', juego: '', precioMin: 0, precioMax: 100000, soloConDescuento: false, envioGratis: false };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.length).toBe(1);
    expect(resultado[0].categoria).toBe('Mouse');
  });

  it('filtra por rango de precio', () => {
    const filters = { marca: '', categoria: '', juego: '', precioMin: 45000, precioMax: 60000, soloConDescuento: false, envioGratis: false };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.every(p => p.price >= 45000 && p.price <= 60000)).toBeTrue();
  });

  it('filtra solo con descuento', () => {
    const filters = { marca: '', categoria: '', juego: '', precioMin: 0, precioMax: 100000, soloConDescuento: true, envioGratis: false };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.every(p => p.discount && p.discount > 0)).toBeTrue();
  });

  it('filtra por envio gratis', () => {
    const filters = { marca: '', categoria: '', juego: '', precioMin: 0, precioMax: 100000, soloConDescuento: false, envioGratis: true };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.every(p => p.envioGratis === true)).toBeTrue();
  });

  it('filtra por juego', () => {
    const filters = { marca: '', categoria: '', juego: 'Valorant', precioMin: 0, precioMax: 100000, soloConDescuento: false, envioGratis: false };
    const resultado = filtrarProductos(mockProducts, filters);
    expect(resultado.length).toBe(2);
    expect(resultado.every(p => p.juego === 'Valorant')).toBeTrue();
  });
});

describe('obtenerMarcas', () => {
  it('retorna las marcas únicas', () => {
    const marcas = obtenerMarcas(mockProducts);
    expect(marcas.sort()).toEqual(['HyperX', 'Logitech', 'Razer'].sort());
  });
});

describe('obtenerCategorias', () => {
  it('retorna las categorias únicas', () => {
    const cats = obtenerCategorias(mockProducts);
    expect(cats.sort()).toEqual(['Teclado', 'Mouse', 'Auriculares'].sort());
  });
});

describe('obtenerJuegos', () => {
  it('retorna los juegos únicos, ignora null', () => {
    const juegos = obtenerJuegos(mockProducts);
    expect(juegos.sort()).toEqual(['Fortnite', 'Valorant'].sort());
  });
});
