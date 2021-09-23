import { createStore } from 'vuex'

export default createStore({
  state: {
    filters: {
      room: -1,
      floor: [1, 99],
      square: [1, 99],
      price: [1, 99]
    }
  },
  mutations: {
    SET_ROOM: (state, payload) => {
      state.filters.room = payload;
    },
    SET_FLOOR: (state, payload) => {
      state.filters.floor = payload;
    },
    SET_SQUARE: (state, payload) => {
      state.filters.square = payload;
    },
    SET_PRICE: (state, payload) => {
      state.filters.price = payload;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    ROOM: state => {
      return state.filters.room;
    },
    FLOOR: state => {
      return state.filters.floor;
    },
    SQUARE: state => {
      return state.filters.square;
    },
    PRICE: state => {
      return state.filters.price;
    },
  }
})
