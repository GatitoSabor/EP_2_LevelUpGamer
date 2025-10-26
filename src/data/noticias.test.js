import noticiasIniciales from './noticias';

describe('noticiasIniciales', () => {
  it('debe ser un array con noticias', () => {
    expect(Array.isArray(noticiasIniciales)).toBeTrue();
    expect(noticiasIniciales.length).toBeGreaterThan(0);
  });

  it('cada noticia debe tener id, titulo, fecha, resumen y url', () => {
    noticiasIniciales.forEach(noticia => {
      expect(noticia.id).toBeDefined();
      expect(noticia.titulo).toBeDefined();
      expect(noticia.fecha).toBeDefined();
      expect(noticia.resumen).toBeDefined();
      expect(noticia.url).toBeDefined();
    });
  });

  it('todas las urls de las noticias inician con "http"', () => {
    noticiasIniciales.forEach(noticia => {
      expect(noticia.url.startsWith('http')).toBeTrue();
    });
  });
});
