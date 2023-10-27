<template>
  <div>
    <!-- <dynamicNavbar /> -->
    <Navbar />
  </div>
</template>

<script>
import { useNavStore } from "./stores/nav.store.js";
// import dynamicNavbar from "./components/basicConcepts/DynamicNavbar.vue";
import Navbar from "./components/basicConcepts/NavbarView.vue";
export default {
  name: "App",
  components: {
    Navbar,
    // dynamicNavbar,
  },
  created() {
    const navStoreValues = useNavStore();
    debugger; // eslint-disable-line
    navStoreValues.getAll();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
