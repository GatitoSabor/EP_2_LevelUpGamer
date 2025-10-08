import React, { useState } from 'react';
import noticiasIniciales from '../../data/noticias'; // Ajusta la ruta a donde esté el archivo
import '../../styles/Noticias.css';

export default function Noticias({ onNavigate }) {
  const [noticias] = useState(noticiasIniciales);

  return (
    <div className="noticias-container">
      <h2 className="noticias-title">Noticias de Videojuegos</h2>

      {noticias.length === 0 ? (
        <p>No hay noticias disponibles.</p>
      ) : (
        noticias.map(({ id, titulo, fecha, resumen, url }) => (
          <div key={id} className="noticia">
            <h3 className="noticia-titulo">{titulo}</h3>
            <p className="noticia-fecha">{fecha}</p>
            <p className="noticia-resumen">{resumen}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="noticia-link">
              Leer más
            </a>
          </div>
        ))
      )}
    </div>
  );
}
