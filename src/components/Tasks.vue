<template>
  <ul :key="task.id" v-for="task in tasks">
    <Task :task="task" />
  </ul>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: { Task },
};
</script>

<style scoped>
ul {
  padding-left: 0;
}
</style>
