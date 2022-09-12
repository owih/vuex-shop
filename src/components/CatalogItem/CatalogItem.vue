<template>
  <div :class="$style.root">
    <div :class="$style.imageWrapper">
      <img
          :class="$style.img"
          :src="require('../../assets/products-images/' + product.image)"
          :alt="product.article">
    </div>
  </div>
  <div :class="$style.body">
    <div :class="$style.name">
      {{ product.name }}
    </div>
    <span :class="$style.id">
      {{ product.article }}
    </span>
    <div :class="$style.price">
      {{ product.price }}
    </div>
    <div :class="$style.available">
      В наличии: {{ product.quantity }}
    </div>
    <ButtonControl>
      Add to cart
    </ButtonControl>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style module lang="scss">
  .root {
    padding: 16px;
    border: 1px solid #42b983;
    .imageWrapper {
      width: 200px;
      height: 300px;
      margin: 0 auto;
    }
    .img {
      max-width: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
