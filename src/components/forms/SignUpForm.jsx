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
    await onSignUp(data); // Llama al handler pasado por props
    setLoading(false);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={data.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={data.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="fullName"
        placeholder="Nombre completo"
        value={data.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rut"
        placeholder="RUT"
        value={data.rut}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="birthDate"
        placeholder="dd/mm/aaaa"
        value={data.birthDate}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={data.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="referralCode"
        placeholder="Código referido (opcional)"
        value={data.referralCode}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </button>
    </form>
  );
}
