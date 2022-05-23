<template>
  <li class="task" :class="[task.reminder ? 'reminder' : '']">
    <div>
      <h2>
        {{ task.text }}
      </h2>
      <p>{{ task.day }}</p>
    </div>
    <i class="fa-solid fa-circle-xmark" @click="onDelete(task.id)"></i>
  </li>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      console.log(id);
    }
  }
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
