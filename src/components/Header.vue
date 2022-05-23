<template>
  <header>
    <h1>{{ title }}</h1>
    <div>
      <Button color="#2980b9">+ add</Button>
      <Button color="#8e44ad">/ edit</Button>
      <Button color="#e74c3c">- delete</Button>
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Something",
  props: {
    title: String,
  },
  components: { Button },
};
</script>

<style scoped>
header {
  margin: 20px 0;
  display: flex;
  align-items: top;
  justify-content: space-between;
}
h1 {
  color: #2c3e50;
}
</style>
