<template>
  <Child @changeTitle="ChangeT($event)" />

  <h1>{{ title }}</h1>
</template>

<script>
import Child from "../basicConcepts/ChildView.vue";

export default {
  name: "ParentView",
  components: {
    Child,
  },

  data() {
    return {
      title: "Cool Bro",
    };
  },

  methods: {
    ChangeT(title) {
      console.log("title", title);
      this.title = title;
    },
  },
};
</script>

<style></style>
