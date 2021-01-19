import User from "../../api/user";

const state = {
  user: {},
  users: []
};

const getters = {
  getUser: state => state.user,
  getUsers: state => state.users
};

const actions = {
  async createUser({ commit }, data) {
    let result;
    await User.create(data).then(async response => {
      result = response.data.data;
      await commit("setUser", result);
    });
    return result;
  },

  async findUsers({ commit }) {
    let result;
    await User.getAll().then(async response => {
      result = response.data;
      await commit("setUsers", result.return);
    });
    return result;
  },

  async getFind({ commit }, id) {
    let result;
    await User.findById(id).then(async response => {
      result = response.data.data;
      await commit("setUser", result);
    });
    return result;
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setUsers: (state, users) => (state.users = users)
};

export default { state, getters, actions, mutations, namespaced: true };
