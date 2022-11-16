<template>
  <div :class="$style.root">
    <div class="container">
      <CatalogList />
    </div>
  </div>
</template>

<script>
import CatalogList from "@/components/Catalog/CatalogList/CatalogList";

export default {
  name: 'HomeView',
  components: {
    CatalogList,
  }
}
</script>

<style module lang="scss">
.root {
  padding-bottom: 60px;
}
</style>
