<template>
  <div :class="$style.root">
    <div :class="$style.imageWrapper">
      <img
          :class="$style.img"
          :src="require('../../../assets/products-images/' + product.image)"
          :alt="product.article">
    </div>
    <div :class="$style.body">
      <a href="#" :class="$style.name">
        {{ product.name }}
      </a>
      <span :class="$style.id">
      {{ product.article }}
      </span>
      <div :class="$style.available">
        In stock: {{ product.quantity }}
      </div>
      <div :class="$style.price">
        {{ product.price.toFixed(2) }} $
      </div>
      <ButtonControl @click="clickHandler" :class="{
        'btn-disabled': !productAvailable,
      }">
        <span v-if="productAvailable">
          Add to cart
        </span>
        <span v-else>
          In the cart
        </span>
      </ButtonControl>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CatalogItem",
  data() {
    return {
      isProductEmpty: false,
      productAvailable: true,
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: {
    addToCart: {
      type: Object,
    }
  },
  mounted() {
    this.checkIsAvailableCurrentProduct();
  },
  methods: {
    clickHandler() {
      this.addToCart();
      this.checkIsAvailableCurrentProduct();
    },
    addToCart() {
      this.$emit('addToCart', this.product);
    },
    checkIsAvailableCurrentProduct() {
      if (this.CHECK_IS_PRODUCT_AVAILABLE.length) {
        this.productAvailable = !this.CHECK_IS_PRODUCT_AVAILABLE.filter((product) => this.product.article === product.article).length;
      }
    }
  },
  computed: {
    ...mapGetters([
        'CHECK_IS_PRODUCT_AVAILABLE'
    ]),
    checkAvailabilityState() {
      return this.CHECK_IS_PRODUCT_AVAILABLE.filter((product) => this.product.article === product.article).length;
    }
  }
}
</script>

<style module lang="scss">
  .root {
    padding: 16px;
    box-shadow: 0 0 8px 1px rgba(112, 103, 103, 0.3);
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    .imageWrapper {
      width: 100%;
      height: 300px;
      margin: 0 auto;
      border-radius: 12px;
      overflow: hidden;
    }
    .img {
      max-width: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .name {
      font-size: 18px;
      font-weight: bold;
      flex-grow: 1;
      transition: color 0.1s ease-in-out;
      margin: 16px 0;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: #f39c12;
      }
    }
    .available {
      font-size: 14px;
      color: #7f8c8d;
    }
    .id {
      font-size: 14px;
      margin-bottom: 6px;
    }
    .price {
      font-weight: bold;
      color: cornflowerblue;
      text-align: right;
      font-size: 20px;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
    .body {
      text-align: start;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  }
</style>
