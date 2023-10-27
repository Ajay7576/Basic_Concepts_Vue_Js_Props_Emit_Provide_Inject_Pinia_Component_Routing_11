<template>
  <div><DynamicNavbar /></div>
  <div class="container">
    <div class="col-12">
      <h3>This is Privacy Page</h3>
    </div>
  </div>
</template>
<script>
import DynamicNavbar from "./DynamicNavbar.vue";

export default {
  name: "PrivacyView",
  components: {
    DynamicNavbar,
  },
};
</script>
<style></style>
