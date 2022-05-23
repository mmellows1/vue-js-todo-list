<template>
  <li class="task" :class="[task.reminder ? 'reminder' : '']">
    <div class="task__wrapper">
      <form class="task__form" v-if="isEditing" @submit="handleSubmit">
        <input
          class="task__input--heading"
          type=""
          v-model="title"
          placeholder="title"
        />
        <textarea
          class="tast__input--description"
          v-model="description"
          placeholder="description"
        ></textarea>
        <button>Submit</button>
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

<style scoped>
.task {
  margin-bottom: 10px;
  list-style: none;
  border-left: 4px solid #8e44ad;
  padding-left: 20px;
}

.task__options {
  display: flex;
  gap: 10px;
}

.task__form {
  width: 100%;
}

.task__form textarea:focus,
.task__form input:focus {
  outline: none;
  border-bottom: 1px solid darkgrey;
}
.task__form input,
.task__form textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgrey;
}

.task__input--heading {
  font-size: 1.5em;
  padding: 0.4rem 0;
}

.tast__input--description {
  font-size: 15px;
}

.task__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.task.reminder {
  border-left: 4px solid #e74c3c;
}
</style>
