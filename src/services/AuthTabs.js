export function validateSignUp(data) {
  const errors = {};
  if (!data.username) errors.username = 'Usuario requerido';
  if (!data.password) errors.password = 'Contraseña requerida';
  if (!data.fullName) errors.fullName = 'Nombre completo requerido';
  if (!data.rut) errors.rut = 'RUT requerido';
  if (!data.birthDate) {
    errors.birthDate = 'Fecha de nacimiento requerida';
  } else {
    const birthDate = new Date(data.birthDate);
    const today = new Date();
    if (birthDate > today) {
      errors.birthDate = 'La fecha no puede ser mayor a la fecha actual';
    } else {
      const age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        errors.birthDate = 'Debe ser mayor de edad para registrarse';
      }
    }
  }
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
