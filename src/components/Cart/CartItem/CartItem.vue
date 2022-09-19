<template>
  <div :class="$style.root">
    <div :class="$style.row">
      <div :class="$style.name">
        {{ product.name }}
      </div>
      <div :class="$style.article">
        Article: {{ product.article }}
      </div>
      <div :class="$style.quantity">
        In stock: {{ product.quantity }}
      </div>
      <div :class="$style.counter">
        <CounterField @increaseQuantity="increaseQuantity" @decreaseQuantity="decreaseQuantity" :quantity="product.inCart" :maxQuantity="product.quantity"/>
      </div>
      <div :class="$style.price">
        <strong>{{ Number(product.price.toFixed(2)) }} $</strong> per one
      </div>
      <div :class="$style.remove" @click="removeProductFromCart">
        <i class="icon icon-clear"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions([
        'INCREASE_CART_PRODUCT_QUANTITY',
        'DECREASE_CART_PRODUCT_QUANTITY',
        'REMOVE_PRODUCT_FROM_CART',
    ]),
    increaseQuantity() {
      this.INCREASE_CART_PRODUCT_QUANTITY(this.product.article);
    },
    decreaseQuantity() {
      this.DECREASE_CART_PRODUCT_QUANTITY(this.product.article);
    },
    removeProductFromCart() {
      this.REMOVE_PRODUCT_FROM_CART(this.product.article);
    },
  }
}
</script>

<style module lang="scss">
  .root {
    position: relative;
    padding: 16px;
    border: 1px solid silver;
    text-align: start;
    .row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: -8px;
    }
    .name {
      padding: 8px 32px 8px 8px;
      font-weight: bold;
      flex: 0 0 100%;
    }
    .article {
      padding: 8px;
      font-size: 14px;
      color: #7f8c8d;
    }
    .quantity {
      padding: 8px;
      font-size: 14px;
      color: #7f8c8d;
      flex: 0 0 100px;
    }
    .price {
      padding: 8px;
      font-size: 18px;
      flex: 0 0 auto;
    }
    .counter {
      padding: 8px;
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
    }
    .remove {
      position: absolute;
      right: 16px;
      top: 16px;
      font-size: 14px;
      cursor: pointer;
      .icon {
        pointer-events: none;
      }
      &:hover {
        color: #f39c12;
      }
    }
  }
</style>
