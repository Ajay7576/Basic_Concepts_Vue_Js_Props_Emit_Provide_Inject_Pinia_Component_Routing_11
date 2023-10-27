<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <a class="navbar-brand" href="#">DYNAMIC NAVBAR</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="item in store.getIsMatchRoute" :key="item.name">
          <router-link
            :to="{ path: item.name || { params: { name: item.name } } }"
            class="nav-link"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div></div>
</template>

<script>
import { useNavStore } from "../../stores/nav.store.js";


export default {
  name: "dynamicNavbaar",

  setup() {
    const store = useNavStore();
    return {
      store
    };
  },
  
};
</script>

<style scoped>
#nav {
  padding: 30px;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
