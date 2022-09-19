<template>
  <div :class="$style.root"
  >
    <button
        :class="[$style.counter, {
          'disabled': localQuantity === 1,
        }]"
         @click="decreaseValue"
    >
      <i class="icon icon-minus"></i>
    </button>
    <input :class="$style.input"
           :value="localQuantity"
           disabled
    >
    <button
        :class="[$style.counter, {
          'disabled': localQuantity === maxQuantity,
        }]"
        @click="increaseValue"
    >
      <i class="icon icon-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "CounterField",
  data() {
    return {
      localQuantity: 1,
    }
  },
  props: {
    quantity: {
      type: Number,
      required: true,
    },
    maxQuantity: {
      type: Number,
      required: true,
    }
  },
  mounted() {
    this.localQuantity = this.quantity;
  },
  methods: {
    increaseValue() {
      this.localQuantity++;
      this.$emit('increaseQuantity');
    },
    decreaseValue() {
      this.localQuantity--;
      this.$emit('decreaseQuantity');
    }
  },
}
</script>

<style module lang="scss">
  .root {
    display: flex;
    align-items: center;
    .counter {
      padding: 4px 12px 3px;
      font-size: 12px;
      border: 1px solid lightgray;
      background-color: floralwhite;
      cursor: pointer;
    }
    .input {
      border: none;
      border-top: 1px solid lightgray;
      border-bottom: 1px solid lightgray;
      text-align: center;
      max-width: 44px;
      padding: 3px 6px 0;
      font-size: 14px;
      pointer-events: none;
      &:disabled {
        background-color: white;
      }
    }
  }
</style>
<style scoped>
  .disabled {
    opacity: 0.6;
    pointer-events: none;
  }
</style>
