import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // importar iconos
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Ayuda</h4>
        <ul>
          <li><a href="/centro-de-ayuda">Centro de ayuda</a></li>
          <li><a href="/seguimiento-compra">Seguimiento de mi compra</a></li>
          <li><a href="/formulario-contacto">Formulario de contacto</a></li>
          <li><a href="/bases-concursos">Bases de concursos</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Nosotros</h4>
        <ul>
          <li><a href="/quienes-somos">Quiénes somos</a></li>
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
  );
}
