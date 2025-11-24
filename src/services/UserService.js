import axios from 'axios';
const BASE_URL = 'http://18.116.201.66:8080/api/v1/usuario';

class UserService {
  getAll() {
    return axios.get(BASE_URL);
  }
  create(user) {
    return axios.post(BASE_URL, user);
  }
  delete(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
  // Puedes agregar update y getById si lo necesitas
}
export default new UserService();
