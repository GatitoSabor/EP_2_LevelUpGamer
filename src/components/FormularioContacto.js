import React from 'react';
import '../styles/FormularioContacto.css';

export default function FormularioContacto() {
  // Controlador para el submit
  const handleSubmit = (event) => {
    event.preventDefault(); // evitar recarga de página
    alert('Formulario enviado con éxito');
    event.target.reset(); // opcional: limpia el formulario tras enviar
  };

  return (
    <section className="form-contacto-section">
      <h2 className="form-contacto-titulo">Formulario de contacto</h2>
      <p className="form-contacto-descripcion">
        Utiliza este formulario para comunicarte con nosotros ante cualquier duda, consulta o problema que experimentes en el sitio.
      </p>
      <form className="form-contacto-formulario" onSubmit={handleSubmit}>
        <label>
          Nombre completo:<br />
          <input type="text" name="nombreCompleto" required />
        </label>
        <label>
          Nombre de usuario:<br />
          <input type="text" name="nombreUsuario" required />
        </label>
        <label>
          Correo electrónico:<br />
          <input type="email" name="email" required />
        </label>
        <label>
          Descripción del problema:<br />
          <textarea name="mensaje" rows="5" required></textarea>
        </label>
        <button type="submit" className="form-contacto-boton">Enviar</button>
      </form>
    </section>
  );
}
