import React, {useState} from 'react';
import eventosIniciales from '../../data/eventos';
import '../../styles/Eventos.css';

export default function Eventos({ onNavigate }) {
  const [eventos] = useState(eventosIniciales);

  return (
    <section className="eventos">
      <h2>Eventos de Videojuegos</h2>
      <button onClick={() => onNavigate('home')}>Volver</button>
      <ul>
        {eventos.map(evento => (
          <li key={evento.id} className="evento-item">
            <h3>{evento.titulo}</h3>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
            <p>{evento.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
