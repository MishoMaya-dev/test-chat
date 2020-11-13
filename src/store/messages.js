class Message {
  constructor(user = {id, name: '', url: ''}, text = '', id) {
    this.user = user
    this.text = text
    this.id = id
  }
}

export default {
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
      console.log(state.messages)
    },
    clearMessages(state) {
      state.messages = []
    }

  },
  actions: {
    addMessage({ commit }, { user, text }) {
      try {
        const id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
        const newMessage = new Message ({
          uid: user.id,
          name: user.name,
          url: user.url
        }, text)
        commit('addMessage', {
          ...newMessage,
          id
        })
      } catch (e) {
        throw e
      }
    },
    clearMessages({ commit }) {
      commit('clearMessages')
    }
  },
  getters: {
    messages(state) {
      return state.messages
    },
  }
}