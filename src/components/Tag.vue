<template>
  <div :class="`tag__item tag__item--${color}`">
    <template v-if="isEditing">
      <form
        class="flex align--center justify--between w-100"
        @submit="handleSubmit"
      >
        <div>
          <input class="input input--border-bottom" v-model="name" />
        </div>
        <div class="flex align--center justify-between spaced">
          <input
            v-for="tagColor in tagColors"
            v-bind:key="tagColor.id"
            v-model="color"
            type="radio"
            name="color"
            :value="tagColor"
            :class="`radio radio--${tagColor}`"
          />
        </div>
      </form>
    </template>
    <template v-else>
      <span @click="() => (isEditing = !isEditing)">{{ tag.name }}</span>
    </template>
    <i @click="handleDelete" class="fas fa-trash"></i>
  </div>
</template>

<script>
import { deleteTag, updateTag } from "../db";
export default {
  props: {
    tag: Object,
  },
  data() {
    return {
      name: this.tag?.name,
      color: this.tag?.color,
      isEditing: false,
    };
  },
  inject: ["tagColors"],
  methods: {
    handleDelete(e) {
      const confirmed = confirm("Are you sure you want to delete this?");
      console.log(this.tag.id);
      if (confirmed) {
        deleteTag(this.tag.id);
      }
      window.location.reload();
    },
    handleSubmit(e) {
      const { name, color } = this;

      if (!name) {
        return;
      }

      updateTag(this.tag.id, { name, color });
    },
  },
};
</script>

<style></style>
