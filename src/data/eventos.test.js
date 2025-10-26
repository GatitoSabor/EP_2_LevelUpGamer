import eventosIniciales from './eventos';

describe('eventosIniciales', () => {
  it('debe ser un array con eventos', () => {
    expect(Array.isArray(eventosIniciales)).toBeTrue();
    expect(eventosIniciales.length).toBeGreaterThan(0);
  });

  it('cada evento debe tener id, titulo, fecha, lugar y descripcion', () => {
    eventosIniciales.forEach(evento => {
      expect(evento.id).toBeDefined();
      expect(evento.titulo).toBeDefined();
      expect(evento.fecha).toBeDefined();
      expect(evento.lugar).toBeDefined();
      expect(evento.descripcion).toBeDefined();
    });
  });

  it('los ids de los eventos son únicos', () => {
    const ids = eventosIniciales.map(e => e.id);
    const unique = Array.from(new Set(ids));
    expect(unique.length).toBe(ids.length);
  });
});
