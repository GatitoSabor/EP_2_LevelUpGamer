import React from 'react';
import '../styles/Modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container modal-large" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <div className="modal-content">
          {children}
        </div>
        <button className="modal-close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
