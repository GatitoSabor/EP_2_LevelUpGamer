import React, { useState } from 'react';

export default function SignUpForm({ onSignUp }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    fullName: '',
    rut: '',
    birthDate: '',
    email: '',
    referralCode: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSignUp(data);
    setLoading(false);
  };

  return (
    <form className="form signup-form" onSubmit={handleSubmit}>
      <label htmlFor="signup-username">Usuario</label>
      <input
        id="signup-username"
        type="text"
        name="username"
        placeholder="Usuario"
        value={data.username}
        onChange={handleChange}
        required
      />
      <label htmlFor="signup-password">Contraseña</label>
      <input
        id="signup-password"
        type="password"
        name="password"
        placeholder="Contraseña"
        value={data.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="signup-fullName">Nombre completo</label>
      <input
        id="signup-fullName"
        type="text"
        name="fullName"
        placeholder="Nombre completo"
        value={data.fullName}
        onChange={handleChange}
        required
      />
      <label htmlFor="signup-rut">RUT</label>
      <input
        id="signup-rut"
        type="text"
        name="rut"
        placeholder="RUT"
        value={data.rut}
        onChange={handleChange}
        required
      />
      <label htmlFor="signup-birthDate">Fecha de Nacimiento</label>
      <input
        id="signup-birthDate"
        type="date"
        name="birthDate"
        placeholder="dd/mm/aaaa"
        value={data.birthDate}
        onChange={handleChange}
        required
      />
      <label htmlFor="signup-email">Correo electrónico</label>
      <input
        id="signup-email"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={data.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="signup-referralCode">Código referido (opcional)</label>
      <input
        id="signup-referralCode"
        type="text"
        name="referralCode"
        placeholder="Código referido (opcional)"
        value={data.referralCode}
        onChange={handleChange}
      />
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </button>
    </form>
  );
}
