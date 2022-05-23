<script>
import Button from "./components/Button.vue";
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
    Button,
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

    <form @submit="(e) => handleFormSubmit(e)" class="mb-sm">
      <input
        class="input input--border-bottom mb-sm"
        v-model="title"
        name="title"
        placeholder="Enter a title"
      />
      <textarea
        class="input input--border-bottom mb-sm"
        v-model="description"
        name="description"
        placeholder="Enter a description, 255 max..."
      />
      <Button color="green">Submit</Button>
    </form>

    <main class="bg--dark page page--spaced-v">
      <Tasks :tasks="tasks" />
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300;700&display=swap");
@import "./assets/init.scss";

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
