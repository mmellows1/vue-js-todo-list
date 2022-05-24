<template>
  <ul class="tag__list">
    <li
      class="tag"
      v-for="tag in tags"
      :class="`tag__item tag--${tag.color}`"
      v-bind:key="tag.id"
      @click="() => (isEditing = !isEditing)"
    >
      <div v-if="isEditing">
        123
        {{ tag.label }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
      isEditing: false,
      tags: [
        {
          color: "green",
          label: "success",
          id: 1,
        },
        {
          color: "red",
          label: "danger",
          id: 1,
        },
      ],
    };
  },
};
</script>

<style></style>
