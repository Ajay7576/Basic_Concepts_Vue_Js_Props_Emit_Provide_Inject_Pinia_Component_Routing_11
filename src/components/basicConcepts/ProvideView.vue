<template>
  <div><h1>This is a Provide page</h1></div>
</template>

<script>
export default {
  data() {
    return {
      preferedLanguage: "en",
      userDetails: {
        username: "testUser",
        firstName: "Sathya",
        lastName: "Molagoda",
        isActive: true,
      },
    };
  },
  computed: {
    username() {
      return this.userDetails.username;
    },
  },
  provide() {
    return {
      language: this.preferedLanguage,
      username: this.username,
    };
  },
};
</script>
