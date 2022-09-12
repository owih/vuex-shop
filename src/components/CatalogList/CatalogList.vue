<template>
  <h1>Products list</h1>
  <div :class="$style.root">
    <div :class="$style.row">
      <div
          :class="$style.col"
          v-for="product in PRODUCTS"
          :key="product.article"
      >
        <CatalogItem :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import CatalogItem from "@/components/CatalogItem/CatalogItem";

export default {
  name: "CatalogList",
  components: {
    CatalogItem,
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
    ]),
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((data) => {
      console.log(data)
    });
  }
}
</script>

<style module lang="scss">
  .root {
    .row {
      display: flex;
      flex-wrap: wrap;
      margin: -16px;
    }
    .col {
      padding: 16px;
      flex: 0 0 33.333333%;
    }
  }
</style>
