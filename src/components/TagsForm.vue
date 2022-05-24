<template>
  <form
    class="flex align--center justify--between spaced"
    @submit="handleSubmit"
  >
    <input
      class="input input--no-border input--no-bg placeholder--dark-green font--thick"
      v-model="name"
      placeholder="Change away..."
    />
    <div v-for="tagColor in tagColors" v-bind:key="color">
      <input
        type="radio"
        name="color"
        v-model="color"
        :value="tagColor"
        :class="`radio radio--${tagColor}`"
      />
    </div>
  </form>
</template>

<script>
import { createTag } from "../db";
export default {
  methods: {
    handleSubmit() {
      const { name, color } = this;
      if (!name || !color) {
        return;
      }
      createTag({ name, color });
    },
  },
  inject: ["tagColors"],
  data() {
    return {
      name: "",
      color: "",
    };
  },
};
</script>

<style></style>
