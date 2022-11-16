// import axios from "axios";
import {data} from "@/data/index.js";

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
    },
    CART_TOTAL_PRICE(state) {
      let totalPrice = 0;
      if (!state.cart.length) return;
      state.cart.forEach((product) => {
        totalPrice += product.price * product.inCart;
      })
      return totalPrice;
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
    },
    INCREASE_QUANTITY(state, article) {
      state.cart.forEach((product) => {
        if (product.article === article) product.inCart++;
      })
    },
    DECREASE_QUANTITY(state, article) {
      state.cart.forEach((product) => {
        if (product.article === article) product.inCart--;
      })
    },
    REMOVE_PRODUCT(state, article) {
      state.cart.forEach((product, idx) => {
        if (product.article === article) {
          delete state.cart[idx].inCart;
          state.cart.splice(idx, 1);
        }
      })
    },
    CLEAR_CART(state) {
      state.cart.splice(0);
    }
  },

  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      // Используем локальные данные для github pages
      commit('SET_PRODUCTS_TO_STATE', data.products);

      // return axios('http://localhost:3000/products', {
      //   method: 'GET',
      // })
      //   .then((res) => {
      //     commit('SET_PRODUCTS_TO_STATE', res.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    ADD_PRODUCT_TO_CARD({commit}, product) {
      commit('SET_CART', product);
    },
    INCREASE_CART_PRODUCT_QUANTITY({commit}, article) {
      commit('INCREASE_QUANTITY', article);
    },
    DECREASE_CART_PRODUCT_QUANTITY({commit}, article) {
      commit('DECREASE_QUANTITY', article);
    },
    REMOVE_PRODUCT_FROM_CART({commit}, article) {
      commit('REMOVE_PRODUCT', article);
    },
    CLEAR_CART({commit}) {
      commit('CLEAR_CART');
    }
  },
}
