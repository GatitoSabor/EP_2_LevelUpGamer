import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin(credentials); // Llama al handler pasado por props
    setLoading(false);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Correo electrónico"
        value={credentials.username}
        onChange={handleChange}
        required
        autoComplete="username"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={handleChange}
        required
        autoComplete="current-password"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>
    </form>
  );
}
