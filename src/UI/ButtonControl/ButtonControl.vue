<template>
<button :class="$style.root">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "ButtonControl"
}
</script>

<style module lang="scss">
  .root {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    outline: none;
    background-color: khaki;
    border: none;
    padding: 10px 20px 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    &:hover {
      background-color: sandybrown;
    }
  }
</style>
<style lang="scss">
  .btn-disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  .red-theme {
    background-color: crimson;
    color: white;
    &:hover {
      background-color: #c0392b;
    }
  }
</style>
