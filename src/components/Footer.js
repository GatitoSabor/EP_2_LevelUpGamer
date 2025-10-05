import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Modal from './Modal';
import '../styles/Footer.css';

export default function Footer({ setActiveTab }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSeguimientoClick = e => {
    e.preventDefault();
    setActiveTab('compras'); // Cambia la pestaña de MiCuenta a “compras”
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="/centro-de-ayuda">Centro de ayuda</a></li>
            <li><a href="#!" onClick={handleSeguimientoClick}>Seguimiento de mi compra</a></li>
            <li><a href="/formulario-contacto">Formulario de contacto</a></li>
            <li><a href="/bases-concursos">Bases de concursos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Nosotros</h4>
          <ul>
            <li>
              <a href="#!" onClick={e => { e.preventDefault(); setModalOpen(true); }} className="modal-link">
                Quiénes somos
              </a>
            </li>
            <li><a href="/terminos-condiciones">Términos y condiciones</a></li>
            <li><a href="/politicas-privacidad">Políticas de privacidad</a></li>
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
      </footer>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="¿Quiénes somos?">
        <p>Somos una empresa dedicada a ofrecer contenido y productos para gamers. Nuestra misión es brindar la mejor experiencia para la comunidad gaming.</p>
      </Modal>
    </>
  );
}
