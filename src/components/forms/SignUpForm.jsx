import React, { useState } from 'react';
import { validateSignUp, processReferralCode } from '../../services/AuthTabs';

export default function SignUpForm({ onSignUp, ...props }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
    rut: '',
    birthDate: '',
    email: '',
    codigoReferido: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateSignUp(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const referralResult = processReferralCode(formData.codigoReferido);
    if (referralResult) {
      alert(referralResult.message);
    }
    onSignUp(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form" {...props} noValidate>
      <input name="username" placeholder="Usuario" value={formData.username} onChange={handleChange} required />
      {errors.username && <span className="error">{errors.username}</span>}

      <input name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
      {errors.password && <span className="error">{errors.password}</span>}

      <input name="fullName" placeholder="Nombre completo" value={formData.fullName} onChange={handleChange} required />
      {errors.fullName && <span className="error">{errors.fullName}</span>}

      <input name="rut" placeholder="RUT" value={formData.rut} onChange={handleChange} required />
      {errors.rut && <span className="error">{errors.rut}</span>}

      <input name="birthDate" type="date" placeholder="Fecha de nacimiento" value={formData.birthDate} onChange={handleChange} required />
      {errors.birthDate && <span className="error">{errors.birthDate}</span>}

      <input name="email" type="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
      {errors.email && <span className="error">{errors.email}</span>}

      <input name="codigoReferido" placeholder="Código referido (opcional)" value={formData.codigoReferido} onChange={handleChange} />

      <button type="submit" className="submit-btn">Registrar</button>
    </form>
  );
}
