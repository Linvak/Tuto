import Vue from 'vue'
import Vuex from 'vuex'

// import general from './module-general'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'michmich'
  },
  mutations: {
    setUsername (state, data) {
      state.username = data
    }
  }
})

export default store
