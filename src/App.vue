<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import { createTodo, getTodos } from "./db";

export default {
  name: "App",
  data() {
    return {
      title: "",
      description: "",
      tasks: [],
    };
  },
  components: {
    Header,
    Tasks,
  },
  methods: {
    handleFormSubmit(e) {
      e.preventDefault();
      const { title, description } = this;
      const data = {
        title,
        description,
      };

      createTodo(data);
      this.tasks = getTodos();
    },
  },
  created() {
    this.tasks = getTodos();
  },
};
</script>

<template>
  <div class="wrapper">
    <header>
      <Header title="Task Tracker" />
    </header>

    <form @submit="(e) => handleFormSubmit(e)">
      <input v-model="title" name="title" placeholder="title" />
      <textarea
        v-model="description"
        name="description"
        placeholder="description"
      />
      <button>submit</button>
    </form>

    <main class="bg--dark page page--spaced-v">
      <Tasks :tasks="tasks" />
    </main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300;700&display=swap");
@import "./assets/base.css";

* {
  font-family: "Radio Canada";
  box-sizing: border-box;
}

h1 {
  font-weight: 900;
}

.wrapper {
  max-width: 480px;
  background-color: white;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
