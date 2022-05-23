<template>
  <button @click="onClick()" class="button" :class="`button--${color}`">
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
    onClick() {},
  },
};
</script>
