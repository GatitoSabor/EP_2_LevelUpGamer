import { descuentos, canjearDescuento } from './MiCuenta';

describe('MiCuenta utils', () => {
  let setPuntos, setCuponesInternos;
  let puntos, cupones;

  beforeEach(() => {
    setPuntos = jasmine.createSpy('setPuntos');
    setCuponesInternos = jasmine.createSpy('setCuponesInternos');
    cupones = [];
    spyOn(window, 'alert');
    spyOn(window, 'confirm');
  });

  it('contiene descuentos predefinidos', () => {
    expect(descuentos.length).toBeGreaterThan(0);
  });

  it('no permite canjear si puntos insuficientes', () => {
    puntos = 100;
    const result = canjearDescuento(puntos, descuentos[0], cupones, setCuponesInternos, setPuntos);
    expect(window.alert).toHaveBeenCalledWith('No tienes suficientes puntos para esta opción.');
    expect(result).toBeFalse();
  });

  it('no canjea si usuario cancela la confirmación', () => {
    puntos = 2000;
    window.confirm.and.returnValue(false);
    const result = canjearDescuento(puntos, descuentos[0], cupones, setCuponesInternos, setPuntos);
    expect(window.confirm).toHaveBeenCalled();
    expect(result).toBeFalse();
  });

  it('canjea correctamente y llama a todos los setters', () => {
    puntos = 2000;
    window.confirm.and.returnValue(true);
    const result = canjearDescuento(puntos, descuentos[0], cupones, setCuponesInternos, setPuntos);
    expect(setCuponesInternos).toHaveBeenCalled();
    expect(setPuntos).toHaveBeenCalledWith(jasmine.any(Function));
    expect(window.alert).toHaveBeenCalledWith('Descuento canjeado y añadido a tus cupones.');
    expect(result).toBeTrue();
  });

  it('canjea cupones que no tienen porcentaje de descuento (caso envío gratuito)', () => {
    puntos = 300;
    window.confirm.and.returnValue(true);
    const result = canjearDescuento(puntos, descuentos[3], cupones, setCuponesInternos, setPuntos);
    expect(setCuponesInternos).toHaveBeenCalled();
    expect(result).toBeTrue();
  });

  it('setPuntos descuenta correctamente los puntos', () => {
    let puntos = 2000;
    let resultCallback;
    const setPuntos = jasmine.createSpy('setPuntos').and.callFake(cb => {
      resultCallback = cb;
    });
    const setCuponesInternos = jasmine.createSpy('setCuponesInternos');
    window.confirm.and.returnValue(true);

    canjearDescuento(puntos, descuentos[0], [], setCuponesInternos, setPuntos);
    // Ejecuta la función enviada como callback:
    const resultado = resultCallback(2000);
    expect(resultado).toBe(1500); // 2000 - 500 (descuento[0].puntos)
  });
});
