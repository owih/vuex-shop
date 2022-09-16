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
<style>
  .btn-disable {
    opacity: 0.6;
    pointer-events: none;
  }
</style>
