<template>
  <li class="task" :class="[task.reminder ? 'reminder' : '']">
    <div>
      <h2>
        {{ task.title }}
      </h2>
      <p>{{ task.description }}</p>
    </div>
    <i class="fa-solid fa-circle-xmark" @click="handleDelete(task.id)"></i>
  </li>
</template>

<script>
import { deleteTodo } from "../db";
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    handleDelete(id) {
      const confirmed = confirm("are you sure you want to delete?");
      if (confirmed) {
        deleteTodo(id);
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
.task {
  list-style: none;
  border-left: 4px solid #8e44ad;
  padding-left: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.task .fas {
  color: red;
}

.task.reminder {
  border-left: 4px solid #e74c3c;
}
</style>
