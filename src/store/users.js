class User {
  constructor(name = '', url = '', id = 2) {
    this.name = name
    this.url = url
    this.id = id
  }
}

export default {
  state: {
    users: [
      {
        name: 'Иван Иванов',
        url: 'https://2ch.hk/di/arch/wakaba/src/1337576995786.jpg',
        id: 1
      }
    ],
    activeUser: {},
    selectedUser: {}
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user)
    },
    createUser(state, user) {
      state.activeUser = user
    },
    fetchSelectedUser(state, id) {
      const user = state.users.find(u => u.id === id)
      state.selectedUser = user
    },
    clearSelectedUser(state) {
      state.selectedUser = {}
    },
    clearActiveUser(state) {
      state.activeUser = {}
    },
    deleteUser(state, id) {
      const usersArr = state.users.filter(u => u.id !== id)
      state.users = usersArr
    }
  },
  actions: {
    createUser({ commit }, {name, url}) {
      try {
        const newUser = new User(name, url)
        commit('addUser', newUser)
        commit('createUser', newUser)
        return newUser
      } catch (e) {
        throw e
      }
    },
    fetchSelectedUser({ commit }, id) {
      try {
        commit('fetchSelectedUser', id)
      } catch (e) {
        throw e
      }
    },
    clearSelectedUser({ commit }) {
      commit('clearSelectedUser')
    },
    deleteUser({ commit }, id) {
      commit('deleteUser', id)
      commit('clearActiveUser')
    }
  },
  getters: {
    users(state) {
      return state.users
    },
    activeUser(state) {
      return state.activeUser
    },
    selectedUser(state) {
      return state.selectedUser
    }
  }
}