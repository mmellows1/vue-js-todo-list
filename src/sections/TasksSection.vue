<template>
  <div class="tag--fixed-sidebar">
    <ul class="tag__list">
      <li class="tag__form">
        <TagsForm />
      </li>
      <li v-for="tag in tags" v-bind:key="tag.id">
        <Tag :tag="tag" />
      </li>
    </ul>
  </div>
</template>

<script>
import Tag from "../components/Tag.vue";
import TagsForm from "../components/TagsForm.vue";
import { getTags } from "../db";
export default {
  provide: {
    tagColors: ["red", "green", "blue", "purple"],
  },
  created() {
    this.tags = getTags();
  },
  components: { TagsForm, Tag },
};
</script>
