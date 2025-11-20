import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/producto'; // Cambia la URL según tu backend

export const getProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearProducto = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

// Puedes agregar más funciones para Update y Delete
export const actualizarProducto = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const eliminarProducto = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};