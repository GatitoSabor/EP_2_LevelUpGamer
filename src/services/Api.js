import axios from 'axios';

const API_URL = 'http://18.116.201.66:8080/api/v1/producto';

export const getProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const crearProducto = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const actualizarProducto = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const eliminarProducto = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};