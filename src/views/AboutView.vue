<template>
  <div class="about">
    <DynamicNavbar />

    <h1>THIS IS ABOUT PAGE</h1>
  </div>
</template>

<script>
import DynamicNavbar from "../components/basicConcepts/DynamicNavbar.vue";

export default {
  name: "AboutView",
  components: {
    DynamicNavbar,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
