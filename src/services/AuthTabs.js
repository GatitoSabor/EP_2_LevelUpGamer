export function validateSignUp(data) {
  const errors = {};
  if (!data.username) errors.username = 'Usuario requerido';
  if (!data.password) errors.password = 'Contraseña requerida';
  if (!data.fullName) errors.fullName = 'Nombre completo requerido';
  if (!data.rut) errors.rut = 'RUT requerido';
  if (!data.birthDate) errors.birthDate = 'Fecha de nacimiento requerida';
  if (!data.email) errors.email = 'Correo electrónico requerido';
  // puedes agregar regex o lógica extra de validación aquí
  return errors;
}

export function processReferralCode(referralCode) {
  if (referralCode.trim() === 'AMIGO123') {
    return { points: 250, message: '250 pts otorgados al referido' };
  }
  return null;
}
