<template>
  <div :class="$style.root">
    <div v-if="cartProducts.length">
      <div :class="$style.item"
           v-for="product in cartProducts"
           :key="product.article"
      >
        <CartItem :product="product" />
      </div>
    </div>
    <div :class="$style.empty" v-else>
      Cart is empty :(
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/Cart/CartItem/CartItem";
import {mapGetters} from "vuex";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
  data() {
    return {
      cartProducts: [],
    }
  },
  mounted() {
    this.cartProducts = this.getCartProducts;
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
    getCartProducts() {
      return this.CART;
    }
  }
}
</script>

<style module lang="scss">
  .root {
    position: relative;
    height: 100%;
    .item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
    .empty {
      padding: 16px;
      font-size: 28px;
      font-weight: bold;
    }
  }
</style>
