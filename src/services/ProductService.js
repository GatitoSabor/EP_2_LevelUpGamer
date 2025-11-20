import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/producto'; // Usa el puerto/ruta real de tu backend

class ProductService {
  getAll() {
    return axios.get(BASE_URL);
  }
  getById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }
  create(product) {
    return axios.post(BASE_URL, product);
  }
  update(id, product) {
    return axios.put(`${BASE_URL}/${id}`, product);
  }
  delete(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}
export default new ProductService();
