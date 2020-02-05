const state = {
  name: 'Ami',
  age: 12,
  gender: 'man'
};
const getters = {
  moduleA: state => {
    return state;
  },
  test: (state, getters) => {
    return getters.moduleA.name;
  }
};
const mutations = {
  updateName(state, payload) {
    state.name = payload;
    console.log(new Date());
  }
};
const actions = {
  updateName({commit}, payload) {
    console.log(new Date());
    setTimeout(() => commit('updateName', payload), 2000);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
