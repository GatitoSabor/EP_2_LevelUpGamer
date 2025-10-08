import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Modal from '../modals/Modal';
import '../../styles/Footer.css';

export default function Footer({ onNavigate }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="/centro-de-ayuda" className="footer-text-info">Centro de ayuda</a></li>
            <li>
              <button
                onClick={() => onNavigate('contacto')}
                className="footer-text-link"
              >
                Formulario de contacto
              </button>
            </li>
            <li><a href="/bases-concursos" className="footer-text-info">Bases de concursos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Nosotros</h4>
          <ul>
            <li>
              <button
                onClick={() => setModalOpen(true)}
                className="footer-text-link"
              >
                Quiénes somos
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('terminos')}
                className="footer-text-link"
              >
                Términos y condiciones
              </button>
            </li>
            <li><a href="/politicas-privacidad" className="footer-text-info">Políticas de privacidad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Comunidad</h4>
          <ul className="social-links">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
          </ul>
        </div>
        <div className="footer-bottom-text">
          © 2025-2025 | LevelUp-Gamer Todos los derechos reservados | Desarrollado con <span role="img" aria-label="corazón">💜</span> por Daniela y Williams.
        </div>
      </footer>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="¿Quiénes somos?">
        <p>Somos una empresa dedicada a ofrecer contenido y productos para gamers. Nuestra misión es brindar la mejor experiencia para la comunidad gaming.</p>
      </Modal>
    </>
  );
}
