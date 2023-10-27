<template>
  <div><DynamicNavbar /></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- <h1>Message form Parent Component {{ message }}</h1>
        <br />
        <h1>Title: {{ title }}</h1> -->

        <br />
        <div class="container col-4">
          <button
            class="btn btn-outline-danger btn-block btn-lg form-control"
            type="button"
            @click="passEvent"
          >
            Update me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicNavbar from "./DynamicNavbar.vue";
export default {
  name: "ChildComponent",
  components: {
    DynamicNavbar,
  },

  methods: {
    passEvent() {
      this.$emit("changeTitle", "Awesome ");
    },
  },

};
</script>

<style></style>
