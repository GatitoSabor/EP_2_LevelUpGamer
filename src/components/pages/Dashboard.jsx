import React, { useState, useEffect } from 'react';
import ProductService from '../../services/ProductService';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/Dashboard.css';

export default function Dashboard({ admin, token }) {
  const [tab, setTab] = useState('datos');
  const [adminData, setAdminData] = useState(null);
  const [productos, setProductos] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Ahora el estado incluye "stock"
  const [form, setForm] = useState({
    nombre: '', descripcion: '', precio: 0, categoria: '',
    marca: '', descuento: 0, envioGratis: false, juego: '',
    imagen: '', stock: 0
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (tab === 'datos') {
      ProductService.getById(admin.idAdministrador, token)
        .then(res => setAdminData(res.data))
        .catch(() => setAdminData(null));
    }
  }, [tab, admin, token]);

  useEffect(() => {
    if (tab === 'productos') {
      ProductService.getAll(token)
        .then(res => setProductos(res.data))
        .catch(() => setProductos([]));
    }
  }, [tab, editing, token]);

  const handleInput = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleFileInput = e => setFile(e.target.files[0]);

  const openNewProductModal = () => {
    setEditing(null);
    setForm({
      nombre:'', descripcion:'', precio:0, categoria:'', marca:'',
      descuento:0, envioGratis:false, juego:'', imagen:'', stock:0
    });
    setFile(null);
    setShowModal(true);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));
    if (file) formData.append('imagen', file);

    ProductService.createForm(formData, token)
      .then(() => {
        alert('Producto creado');
        setShowModal(false);
        setEditing(null);
        setForm({
          nombre:'', descripcion:'', precio:0, categoria:'', marca:'',
          descuento:0, envioGratis:false, juego:'', imagen:'', stock:0
        });
        setFile(null);
      })
      .catch(() => alert('Error al crear producto'));
  };

  const handleEdit = producto => {
    setEditing(producto.idProducto);
    setForm({
      idProducto: producto.idProducto,
      nombre: producto.nombre || '',
      descripcion: producto.descripcion || '',
      precio: producto.precio || 0,
      categoria: producto.categoria || '',
      marca: producto.marca || '',
      imagen: producto.imagen || '',
      descuento: producto.descuento || 0,
      envioGratis: Boolean(producto.envioGratis),
      juego: producto.juego || '',
      stock: producto.stock ?? 0
    });
    setFile(null);
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    ProductService.update(form.idProducto, form, token)
      .then(() => {
        alert('Producto actualizado');
        setShowModal(false);
        setEditing(null);
        setForm({
          nombre:'', descripcion:'', precio:0, categoria:'', marca:'', imagen:'',
          descuento:0, envioGratis:false, juego:'', stock:0
        });
      })
      .catch(() => alert('Error al actualizar producto'));
  };

  const handleDelete = async (idProducto) => {
    if (!window.confirm('¿Eliminar producto?')) return;
    ProductService.delete(idProducto, token)
      .then(() => {
        alert('Producto eliminado');
        setEditing(null);
      })
      .catch(() => alert('Error al eliminar producto'));
  };

  const ProductModal = (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>{editing ? "Editar Producto" : "Nuevo Producto"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={editing ? handleUpdate : handleCreate}
          className="product-form"
          encType="multipart/form-data"
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <div>
            <label>Nombre</label>
            <input name="nombre" value={form.nombre} onChange={handleInput} required />
          </div>
          <div>
            <label>Descripción</label>
            <input name="descripcion" value={form.descripcion} onChange={handleInput} required />
          </div>
          <div>
            <label>Precio</label>
            <input
              name="precio"
              value={form.precio}
              onChange={handleInput}
              type="number"
              min="0"
              required
            />
          </div>
          <div>
            <label>Categoría</label>
            <input name="categoria" value={form.categoria} onChange={handleInput} required />
          </div>
          <div>
            <label>Marca</label>
            <input name="marca" value={form.marca} onChange={handleInput} required />
          </div>
          <div>
            <label>Descuento (ej: 0.15)</label>
            <input
              name="descuento"
              value={form.descuento}
              onChange={handleInput}
              type="number"
              min="0"
              max="1"
              step="0.01"
              placeholder="0.15"
            />
          </div>
          <div>
            <label>Stock</label>
            <input
              name="stock"
              value={form.stock}
              onChange={handleInput}
              type="number"
              min="0"
              required
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              name="envioGratis"
              checked={form.envioGratis}
              onChange={handleInput}
              style={{ marginRight: 6 }}
            />
            <label style={{margin: 0}}>Envío gratis</label>
          </div>
          <div>
            <label>Juego (si corresponde)</label>
            <input name="juego" value={form.juego} onChange={handleInput} />
          </div>
          {!editing && (
            <div>
              <label>Imagen</label>
              <input type="file" name="imagenFile" accept="image/*" onChange={handleFileInput} />
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12 }}>
            <Button type="submit" variant="primary">
              {editing ? "Actualizar" : "Crear"}
            </Button>
            {editing && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setEditing(null);
                  setForm({
                    nombre:'', descripcion:'', precio:0, categoria:'', marca:'',
                    descuento:0, envioGratis:false, juego:'', imagen:'', stock:0
                  });
                  setFile(null);
                  setShowModal(false);
                }}
              >Cancelar</Button>
            )}
          </div>
        </form>


      </Modal.Body>
    </Modal>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-tabs">
        <button className={tab === 'datos' ? 'active' : ''} onClick={() => setTab('datos')}>
          Datos del administrador
        </button>
        <button className={tab === 'productos' ? 'active' : ''} onClick={() => setTab('productos')}>
          Gestión de productos
        </button>
      </div>
      <div className="dashboard-content">
        {tab === 'datos' && (
          <div className="admin-info">
            <h2>Datos del Administrador</h2>
            <p><b>ID:</b> {admin?.idAdministrador}</p>
            <p><b>Nombre:</b> {admin?.nombre} {admin?.apellido}</p>
            <p><b>RUT:</b> {admin?.rut}</p>
            <p><b>Fecha de nacimiento:</b> {admin?.fecha_nacimiento ? new Date(admin.fecha_nacimiento).toLocaleDateString() : ''}</p>
            <p><b>Edad:</b> {admin?.edad}</p>
            <p><b>Rol:</b> {admin?.rol}</p>
            <p><b>Correo:</b> {admin?.correo}</p>
          </div>
        )}
        {tab === 'productos' && (
          <div className="product-manager">
            <h2>Gestión de productos</h2>
            <Button variant="success" style={{marginBottom: 16}} onClick={openNewProductModal}>
              + Nuevo Producto
            </Button>
            <ul className="product-list">
              {productos.map(prod => (
                <li key={prod.idProducto}>
                  <b>{prod.nombre}</b> - {prod.descripcion} <br />
                  <span>
                    Precio: {prod.precio} | Categoría: {prod.categoria} | Marca: {prod.marca}
                    {prod.descuento > 0 && <span> | Descuento: {(prod.descuento * 100).toFixed(0)}%</span>}
                    {prod.envioGratis && <span> | 🚚 Envío gratis</span>}
                    {prod.juego && <span> | Juego: {prod.juego}</span>}
                    <span> | Stock: {prod.stock}</span>
                  </span>
                  {prod.imagen && (
                    <img
                      src={prod.imagen.startsWith('http') ? prod.imagen : `http://localhost:8080${prod.imagen}`}
                      alt={prod.nombre}
                      style={{ width: '100px', borderRadius: '5px', marginTop: '8px' }}
                    />
                  )}
                  <Button
                    style={{marginTop: 8, marginRight: 8}} variant="info" size="sm"
                    onClick={() => handleEdit(prod)}
                  >Editar</Button>
                  <Button
                    style={{marginTop: 8}} variant="danger" size="sm"
                    onClick={() => handleDelete(prod.idProducto)}
                  >Eliminar</Button>
                </li>
              ))}
            </ul>
            {ProductModal}
          </div>
        )}
      </div>
    </div>
  );
}
