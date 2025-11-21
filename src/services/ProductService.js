// src/services/ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/producto';

const ProductService = {
  getAll() {
    return axios.get(API_URL);
  },
  
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  
  create(producto) {
    return axios.post(API_URL, producto);
  },
  
  update(id, producto) {
    return axios.put(`${API_URL}/${id}`, producto);
  },
  
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  },
  
  getByCategoria(categoria) {
    return axios.get(`${API_URL}/categoria/${categoria}`);
  },
  
  getByMarca(marca) {
    return axios.get(`${API_URL}/marca/${marca}`);
  }
};

export default ProductService;
