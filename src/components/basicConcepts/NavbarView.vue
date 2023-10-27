<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">STATE MANAGEMENT</a>
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
      <div class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/About" class="nav-item nav-link">About</router-link>
        <router-link to="/parent" class="nav-link">Parent</router-link>
        <!-- <router-link to="/child" class="nav-link">Child</router-link> -->
        <router-link to="/provide" class="nav-link">Provide</router-link>
        <router-link to="/register" class="nav-link">StudentRegistration</router-link>
        <router-link to="/users" class="nav-link">Pinia</router-link>
        <router-link to="/dynamicNavbar" class="nav-link"
          >Dynamic Routing</router-link
        >
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {};
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
