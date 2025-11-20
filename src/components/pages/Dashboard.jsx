import React, { useState, useEffect } from 'react';
import UserService from '../../services/UserService'; // Crea este service en el próximo paso

export default function Dashboard() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState('');
  const [nuevoUsuario, setNuevoUsuario] = useState({ username: '', password: '', email: '' });

  useEffect(() => {
    UserService.getAll()
      .then(res => setUsuarios(res.data))
      .catch(() => setError('Error cargando usuarios'));
  }, []);

  const handleCreate = () => {
    UserService.create(nuevoUsuario)
      .then(res => setUsuarios([...usuarios, res.data]))
      .catch(() => setError('Error creando usuario'));
  };

  const handleDelete = (id) => {
    UserService.delete(id)
      .then(() => setUsuarios(usuarios.filter(u => u.id !== id)))
      .catch(() => setError('Error eliminando usuario'));
  };

  return (
    <div>
      <h2>Dashboard Administrador</h2>
      {error && <p>{error}</p>}
      <h3>Crear Usuario</h3>
      <input placeholder="Username" value={nuevoUsuario.username} onChange={e => setNuevoUsuario({ ...nuevoUsuario, username: e.target.value })}/>
      <input placeholder="Password" type="password" value={nuevoUsuario.password} onChange={e => setNuevoUsuario({ ...nuevoUsuario, password: e.target.value })}/>
      <input placeholder="Email" value={nuevoUsuario.email} onChange={e => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}/>
      <button onClick={handleCreate}>Crear</button>
      <h3>Usuarios Existentes</h3>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>
            {u.username} - {u.email}
            <button onClick={() => handleDelete(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
