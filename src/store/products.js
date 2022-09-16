import axios from "axios";

export default {
  state: () => ({
    products: [],
    cart: [],
  }),

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CHECK_IS_PRODUCT_AVAILABLE(state) {
      return state.cart.filter((product) => product.quantity === product.inCart);
    }
  },

  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
    SET_CART(state, product) {
      let isHasInCart = false;
      if (state.cart.length) {
        state.cart.map((item) => {
          if (item.article === product.article) {
            isHasInCart = true;
            item.inCart += 1;
          }
        });
        if (!isHasInCart) {
          product.inCart = 1;
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
        product.inCart = 1;
      }
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
    },
    ADD_PRODUCT_TO_CARD({commit}, product) {
      commit('SET_CART', product);
    }
  },
}
