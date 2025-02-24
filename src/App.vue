<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Norpac Dive Services logo" class="logo" src="@/assets/norpac-dive-logo.jpg" width="250" height="250" />

    <div class="wrapper">
      <HelloWorld msg="Norpac Dive Services" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Contact Us</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  font-size: 1.25rem;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    margin-right: calc(var(--section-gap) / 3);
  }

  .logo {
    margin-bottom: 25px;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1.25rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
