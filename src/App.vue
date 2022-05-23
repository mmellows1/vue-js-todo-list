<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "March 3rd at 1:30pm",
        reminder: false,
      },
    ];
  },
};
</script>

<template>
  <div class="wrapper">
    <header>
      <Header title="Task Tracker" />
    </header>

    <main>
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
