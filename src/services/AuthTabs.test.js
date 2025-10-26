import { validateSignUp, processReferralCode } from './AuthTabs';

describe('AuthTabs utils', () => {
  it('detecta campos requeridos en validateSignUp', () => {
    const data = {};
    const errors = validateSignUp(data);
    expect(errors.username).toBeDefined();
    expect(errors.password).toBeDefined();
    expect(errors.fullName).toBeDefined();
    expect(errors.rut).toBeDefined();
    expect(errors.birthDate).toBeDefined();
    expect(errors.email).toBeDefined();
  });

  it('detecta fecha de nacimiento en el futuro', () => {
    const data = {
      username: 'juan',
      password: '1234',
      fullName: 'Juan Perez',
      rut: '12345678-9',
      birthDate: '2099-01-01',
      email: 'juan@ejemplo.com'
    };
    const errors = validateSignUp(data);
    expect(errors.birthDate).toContain('mayor a la fecha actual');
  });

  it('detecta menor de edad', () => {
    const today = new Date();
    const fecha = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());
    const data = {
      username: 'juan',
      password: '1234',
      fullName: 'Juan Perez',
      rut: '12345678-9',
      birthDate: fecha.toISOString().slice(0, 10),
      email: 'juan@ejemplo.com'
    };
    const errors = validateSignUp(data);
    expect(errors.birthDate).toContain('mayor de edad');
  });

  it('no arroja error si el usuario es mayor de edad con datos válidos', () => {
    const today = new Date();
    const fecha = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());
    const data = {
      username: 'juan',
      password: '1234',
      fullName: 'Juan Perez',
      rut: '12345678-9',
      birthDate: fecha.toISOString().slice(0, 10),
      email: 'juan@ejemplo.com'
    };
    const errors = validateSignUp(data);
    expect(errors.birthDate).toBeUndefined();
  });

  it('valida un código de referido correcto', () => {
    const result = processReferralCode('AMIGO123');
    expect(result).not.toBeNull();
    expect(result.points).toBe(250);
    expect(result.message).toContain('250 pts');
  });

  it('retorna null en código referido incorrecto', () => {
    const result = processReferralCode('otro');
    expect(result).toBeNull();
  });

  it('calcula correctamente la edad si aún no ha cumplido años este año', () => {
    const today = new Date();
    // Fecha de nacimiento: mismo año de nacimiento, mes siguiente al actual
    const birthDate = new Date(today.getFullYear() - 25, today.getMonth() + 1, today.getDate());
    const data = {
      username: 'carlos',
      password: 'secreto123',
      fullName: 'Carlos Test',
      rut: '22222222-2',
      birthDate: birthDate.toISOString().slice(0, 10),
      email: 'carlos@test.com'
    };
    const errors = validateSignUp(data);
    // No debe ser menor de edad ni error de fecha, solo queremos que se dispare el branch del "age--"
    expect(errors.birthDate).toBeUndefined();
  });

});
