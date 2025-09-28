import React, { useState } from 'react';


export default function SignUp({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!username || !password) {
      alert('Por favor completa usuario y contraseña');
      return;
    }
    onSignUp({ username, password });
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="auth-input"
        />
        <button type="submit" className="auth-button">Registrar</button>
      </form>
    </div>
  );
}
