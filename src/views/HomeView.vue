<template>
  <div class="home">
    <h1>THIS IS HOME PAGE</h1>
    <h2>{{ baseUrl }}</h2>
    <h2>{{ username }}</h2>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "HomeView",

  data() {
    const username = inject("username");

    const baseUrl = process.env.VUE_APP_MY_ENV_VARIABLE;
    return {
      baseUrl,
      username,
    };
  },
};
</script>
