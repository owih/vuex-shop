import axios from "axios";

export default {
  state: () => ({
    products: [],
    cart: [],
  }),

  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  },

  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    }
  },

  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((res) => {
          commit('SET_PRODUCTS_TO_STATE', res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
}
