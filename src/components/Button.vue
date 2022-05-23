<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  color: white;
  font-weight: 900;
  padding: 14px 18px;
}
</style>
