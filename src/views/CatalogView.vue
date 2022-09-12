<template>
  <div class="container">
    <CatalogList />
  </div>
</template>

<script>
import CatalogList from "@/components/CatalogList/CatalogList";

export default {
  name: 'HomeView',
  components: {
    CatalogList,
  }
}
</script>
