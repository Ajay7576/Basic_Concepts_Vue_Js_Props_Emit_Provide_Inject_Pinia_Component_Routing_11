<template>
  <h1 class="text-center">{{ location }}</h1>
</template>

<script setup>
import { inject } from "vue";
const location = inject("location");
</script>
