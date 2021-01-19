import api from "./index";

export default {
  create(data) {
    return api.post(`users`, data);
  },
  getAll() {
    return api.get(`users`);
  },
  findById(id) {
    return api.get(`users/${id}`);
  }
};
