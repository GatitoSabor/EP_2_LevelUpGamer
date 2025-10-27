import { validateSignUp, processReferralCode } from '../services/AuthTabs';

describe('validateSignUp', () => {
  it('devuelve errores si faltan campos requeridos', () => {
    const errores = validateSignUp({});
    expect(errores.username).toBe('Usuario requerido');
    expect(errores.password).toBe('Contraseña requerida');
    expect(errores.fullName).toBe('Nombre completo requerido');
    expect(errores.rut).toBe('RUT requerido');
    expect(errores.birthDate).toBe('Fecha de nacimiento requerida');
    expect(errores.email).toBe('Correo electrónico requerido');
  });

  it('devuelve error si la fecha es mayor a la actual', () => {
    const future = new Date(Date.now() + 100000000).toISOString().slice(0,10);
    const errores = validateSignUp({
      username: 'test',
      password: '123',
      fullName: 'Nombre',
      rut: '1-9',
      birthDate: future,
      email: 'mail@mail.com',
    });
    expect(errores.birthDate).toBe('La fecha no puede ser mayor a la fecha actual');
  });

  it('devuelve error si es menor de 18 años', () => {
    const menorEdad = new Date();
    menorEdad.setFullYear(menorEdad.getFullYear() - 10); // 10 años atrás
    const errores = validateSignUp({
      username: 'test',
      password: '123',
      fullName: 'Nombre',
      rut: '1-9',
      birthDate: menorEdad.toISOString().slice(0,10),
      email: 'mail@mail.com',
    });
    expect(errores.birthDate).toBe('Debe ser mayor de edad para registrarse');
  });

  it('no devuelve errores si todo está correcto', () => {
    const mayorEdad = new Date();
    mayorEdad.setFullYear(mayorEdad.getFullYear() - 20); // 20 años atrás
    const errores = validateSignUp({
      username: 'test',
      password: '123',
      fullName: 'Nombre',
      rut: '1-9',
      birthDate: mayorEdad.toISOString().slice(0,10),
      email: 'mail@mail.com',
    });
    expect(Object.keys(errores).length).toBe(0);
  });
});

describe('processReferralCode', () => {
  it('retorna puntos y mensaje si el código es AMIGO123', () => {
    const resultado = processReferralCode('AMIGO123');
    expect(resultado).toEqual({ points: 250, message: '250 pts otorgados al referido' });
  });

  it('ignora espacios y acepta AMIGO123', () => {
    const resultado = processReferralCode('  AMIGO123 ');
    expect(resultado).toEqual({ points: 250, message: '250 pts otorgados al referido' });
  });

  it('retorna null si el código es diferente', () => {
    expect(processReferralCode('XYZ')).toBeNull();
    expect(processReferralCode('')).toBeNull();
  });
});
