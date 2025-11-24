import axios from 'axios';

const API_URL = 'http://18.116.201.66:8080/api/v1/producto';

const ProductService = {
  getAll(token) {
    return axios.get(API_URL, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    });
  },

  getById(id, token) {
    return axios.get(`${API_URL}/${id}`, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    });
  },

  create(producto, token) {
    return axios.post(API_URL, producto, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  },

  update(id, producto, token) {
    return axios.put(`${API_URL}/${id}`, producto, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  },

  delete(id, token) {
    return axios.delete(`${API_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  },

  getByCategoria(categoria, token) {
    return axios.get(`${API_URL}/categoria/${categoria}`, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    });
  },

  getByMarca(marca, token) {
    return axios.get(`${API_URL}/marca/${marca}`, {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    });
  },

  createForm(formData, token) {
    return axios.post(API_URL, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
  }

};

export default ProductService;
