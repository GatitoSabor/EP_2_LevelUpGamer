import React, { useState, useEffect } from 'react';
import ProductService from '../../services/ProductService';
import '../../styles/Dashboard.css'

export default function Dashboard({ admin, token }) {
  const [tab, setTab] = useState('datos');
  const [adminData, setAdminData] = useState(null);
  const [productos, setProductos] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    marca: ''
  });

  // Cargar datos del admin
  useEffect(() => {
    if (tab === 'datos') {
      ProductService.getById(admin.idAdministrador, token)
        .then(res => setAdminData(res.data))
        .catch(() => setAdminData(null));
    }
  }, [tab, admin, token]);

  // Cargar productos
  useEffect(() => {
    if (tab === 'productos') {
      ProductService.getAll(token)
        .then(res => setProductos(res.data))
        .catch(() => setProductos([]));
    }
  }, [tab, editing, token]);

  // Manejar inputs
  const handleInput = e => setForm({ ...form, [e.target.name]: e.target.value });

  // Crear producto
  const handleCreate = async (e) => {
    e.preventDefault();
    ProductService.create(form, token)
      .then(() => {
        alert('Producto creado');
        setEditing(null);
        setForm({nombre:'',descripcion:'',precio:0,categoria:'',marca:''});
      })
      .catch(() => alert('Error al crear producto'));
  };

  // Editar producto
  const handleEdit = producto => {
    setEditing(producto.idProducto);
    setForm(producto);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    ProductService.update(form.idProducto, form, token)
      .then(() => {
        alert('Producto actualizado');
        setEditing(null);
        setForm({nombre:'',descripcion:'',precio:0,categoria:'',marca:''});
      })
      .catch(() => alert('Error al actualizar producto'));
  };

  // Eliminar producto
  const handleDelete = async (idProducto) => {
    if (!window.confirm('¿Eliminar producto?')) return;
    ProductService.delete(idProducto, token)
      .then(() => {
        alert('Producto eliminado');
        setEditing(null);
      })
      .catch(() => alert('Error al eliminar producto'));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-tabs">
        <button
          className={tab === 'datos' ? 'active' : ''}
          onClick={() => setTab('datos')}
        >
          Datos del administrador
        </button>
        <button
          className={tab === 'productos' ? 'active' : ''}
          onClick={() => setTab('productos')}
        >
          Gestión de productos
        </button>
      </div>

      <div className="dashboard-content">
        {tab === 'datos' && adminData && (
          <div className="admin-info">
            <h2>Datos del Administrador</h2>
            <p><b>ID:</b> {adminData.idAdministrador}</p>
            <p><b>Nombre:</b> {adminData.nombre} {adminData.apellido}</p>
            <p><b>RUT:</b> {adminData.rut}</p>
            <p><b>Fecha de nacimiento:</b> {new Date(adminData.fecha_nacimiento).toLocaleDateString()}</p>
            <p><b>Edad:</b> {adminData.edad}</p>
            <p><b>Rol:</b> {adminData.rol}</p>
          </div>
        )}
        {tab === 'productos' && (
          <div className="product-manager">
            <h2>Gestión de productos</h2>
            <form onSubmit={editing ? handleUpdate : handleCreate} className="product-form">
              <input name="nombre" value={form.nombre} onChange={handleInput} placeholder="Nombre" required />
              <input name="descripcion" value={form.descripcion} onChange={handleInput} placeholder="Descripción" required />
              <input name="precio" value={form.precio} onChange={handleInput} type="number" placeholder="Precio" required />
              <input name="categoria" value={form.categoria} onChange={handleInput} placeholder="Categoría" required />
              <input name="marca" value={form.marca} onChange={handleInput} placeholder="Marca" required />
              <button type="submit">{editing ? "Actualizar" : "Crear"}</button>
              {editing && (
                <button type="button" onClick={() => {
                  setEditing(null);
                  setForm({nombre:'',descripcion:'',precio:0,categoria:'',marca:''});
                }}>Cancelar</button>
              )}
            </form>
            <ul className="product-list">
              {productos.map(prod => (
                <li key={prod.idProducto}>
                  <b>{prod.nombre}</b> - {prod.descripcion} <br />
                  <span>Precio: {prod.precio} | Categoría: {prod.categoria} | Marca: {prod.marca}</span>
                  <button onClick={() => handleEdit(prod)}>Editar</button>
                  <button onClick={() => handleDelete(prod.idProducto)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
