import React, { useState } from 'react';
import './AuthTabs.css';

export default function AuthTabs({ onLogin, onSignUp }) {
  const [activeTab, setActiveTab] = useState('login');

  const activeIndex = activeTab === 'login' ? 0 : 1;

  return (
    <div className="auth-tabs-container" style={{ '--active-tab': activeIndex }}>
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'login' ? 'active' : ''}`} 
          onClick={() => setActiveTab('login')}
          aria-selected={activeTab === 'login'}
        >
          Iniciar sesión
        </button>
        <button 
          className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`} 
          onClick={() => setActiveTab('signup')}
          aria-selected={activeTab === 'signup'}
        >
          Registrarse
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'login' && <LoginForm onLogin={onLogin} />}
        {activeTab === 'signup' && <SignUpForm onSignUp={onSignUp} />}
      </div>
    </div>
  );
}

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ username, password });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        placeholder="Usuario" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        required
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required
      />
      <button type="submit" className="submit-btn">Ingresar</button>
    </form>
  );
}

function SignUpForm({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSignUp({ username, password });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        placeholder="Usuario" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        required
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required
      />
      <button type="submit" className="submit-btn">Registrar</button>
    </form>
  );
}
