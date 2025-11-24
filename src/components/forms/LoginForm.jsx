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
    await onLogin(credentials);
    setLoading(false);
  };

  return (
    <form className="form login-form" onSubmit={handleSubmit}>
      <label htmlFor="login-email">Correo electrónico</label>
      <input
        id="login-email"
        type="email"
        name="username"
        placeholder="Correo electrónico"
        value={credentials.username}
        onChange={handleChange}
        autoComplete="username"
        required
      />

      <label htmlFor="login-password">Contraseña</label>
      <input
        id="login-password"
        type="password"
        name="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={handleChange}
        autoComplete="current-password"
        required
      />

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>
    </form>
  );
}
