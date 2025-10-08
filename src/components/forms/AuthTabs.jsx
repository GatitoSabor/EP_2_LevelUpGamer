import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import '../../styles/AuthTabs.css';

export default function AuthTabs({ onLogin, onSignUp }) {
  const [activeTab, setActiveTab] = useState('login');
  const activeIndex = activeTab === 'login' ? 0 : 1;

  return (
    <div className="auth-tabs-container" style={{ '--active-tab': activeIndex }}>
      <div className="tabs" role="tablist">
        <button
          className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}
          aria-selected={activeTab === 'login'}
          role="tab"
          id="tab-login"
          aria-controls="panel-login"
        >
          Iniciar sesión
        </button>
        <button
          className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => setActiveTab('signup')}
          aria-selected={activeTab === 'signup'}
          role="tab"
          id="tab-signup"
          aria-controls="panel-signup"
        >
          Registrarse
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'login' && (
          <LoginForm aria-labelledby="tab-login" role="tabpanel" onLogin={onLogin} />
        )}
        {activeTab === 'signup' && (
          <SignUpForm aria-labelledby="tab-signup" role="tabpanel" onSignUp={onSignUp} />
        )}
      </div>
    </div>
  );
}
