<template>
  <li class="task" :class="[task.reminder ? 'reminder' : '']">
    <div class="task__wrapper">
      <form class="task__form" v-if="isEditing" @submit="handleSubmit">
        <input
          class="input input--border-bottom"
          type=""
          v-model="title"
          placeholder="title"
        />
        <textarea
          class="input input--border-bottom"
          v-model="description"
          placeholder="description"
        ></textarea>
        <button class="button button--green">Submit</button>
      </form>
      <div v-if="!isEditing">
        <h2>
          {{ task.title }}
        </h2>
        <p>{{ task.description }}</p>
      </div>
      <div class="task__options">
        <i class="fas fa-circle-xmark" @click="handleDelete(task.id)"></i>
        <i class="fas fa-edit" @click="() => (isEditing = !isEditing)"></i>
      </div>
    </div>
  </li>
</template>

<script>
import { deleteTodo, updateTodo } from "../db";
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {
      title: this.task.title || "",
      description: this.task.description || "",
      isEditing: false,
    };
  },
  methods: {
    handleSubmit(e) {
      const { title, description } = this;
      updateTodo(this.task.id, { title, description });
    },
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
