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
        <CounterField :quantity="product.inCart" :maxQuantity="product.quantity"/>
      </div>
      <div :class="$style.price">
        {{ Number(product.price.toFixed(2)) }} $ per one
      </div>
      <div :class="$style.remove">
        <i class="icon icon-clear"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
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
      padding: 8px;
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
    }
    .price {
      padding: 8px;
      font-weight: bold;
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
      &:hover {
        color: #f39c12;
      }
    }
  }
</style>
