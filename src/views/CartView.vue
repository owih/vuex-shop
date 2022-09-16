<template>
  <div class="container">
    <div :class="$style.root">
      <h1>This is cart</h1>
      <div :class="$style.row">
        <div :class="$style.content">
          <div :class="$style.list">
            <CartList />
          </div>
        </div>
        <div :class="$style.panel">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartList from "@/components/Cart/CartList/CartList";

export default {
  name: 'CartView',
  components: {
    CartList,
  }
}
</script>
<style module lang="scss">
@import "src/assets/scss/utils/mixins";
  .root {
    .row {
      display: flex;
      margin: -16px;
      flex-wrap: wrap;
    }
    .content {
      padding: 16px;
      flex: 0 0 100%;
      @include media-breakpoint-up(md) {
        flex: 0 0 60%
      }
    }
    .list {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
    .panel {
      padding: 16px;
    }
  }
</style>
