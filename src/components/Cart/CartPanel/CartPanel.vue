<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <div :class="$style.row">
        <div :class="$style.title"><strong>Your cart:</strong></div>
        <div>{{ cart.length }} products</div>
      </div>
    </div>
    <div :class="$style.body">
      <div :class="$style.row">
        <div :class="$style.title"><strong>Total price:</strong></div>
        <div v-if="cart.length">{{ Number(this.getTotalCartPrice.toFixed(2)) }} $</div>
        <div v-else>0 $</div>
      </div>
    </div>
    <div :class="$style.footer">
      <div :class="$style.control">
        <ButtonControl
            style="width: 100%"
            :class="{'btn-disabled': !cart.length}">
          Order
        </ButtonControl>
      </div>
      <div :class="$style.control">
        <ButtonControl
            style="width: 100%"
            class="red-theme"
            :class="{'btn-disabled': !cart.length}"
            @click="clearCart"
        >
          Clear cart
        </ButtonControl>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartPanel",
  data() {
    return {
      cart: [],
    }
  },
  mounted() {
    this.cart = this.getCartProducts;
  },
  methods: {
    ...mapActions([
        'CLEAR_CART',
    ]),
    clearCart() {
      this.CLEAR_CART();
    }
  },
  computed: {
    ...mapGetters([
        'CART',
        'CART_TOTAL_PRICE',
    ]),
    getCartProducts() {
      return this.CART;
    },
    getTotalCartPrice() {
      return this.CART_TOTAL_PRICE;
    }
  }
}
</script>

<style module lang="scss">
  .root {
    border: 1px solid silver;
    .row {
      display: flex;
      justify-content: space-between;
      margin: -8px;
      > div {
        padding: 8px;
      }
    }
    .header {
      padding: 16px;
      border-bottom: 1px solid silver;
    }
    .body {
      padding: 16px;
      border-bottom: 1px solid silver;
    }
    .footer {
      padding: 16px;
    }
    .control {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
</style>
