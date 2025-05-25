<template>
     <nav class="nav-layout">
        <ul class="nav-list">
            <li class="nav-item"><RouterLink to="/">Home</RouterLink></li>
            <li class="nav-item"><RouterLink to="/about">Su di noi</RouterLink></li>
            <li class="nav-item"><RouterLink to="/horror">Film horror</RouterLink></li>
            <li class="nav-item"><RouterLink to="/films">Lista film</RouterLink></li>
            <li class="nav-item"><RouterLink to="/contacts">Contattaci</RouterLink></li>
        </ul>
        <!-- Toggle button -->
        <Button @click="toggleNav" class="button-toggle">Click</Button>
        <!-- Responsive Navbar  -->
        <ul class="nav-list-responsive" v-if="isNavOpen">
          <li class="nav-item"><RouterLink to="/">Home</RouterLink></li>
          <li class="nav-item"><RouterLink to="/about">Su di noi</RouterLink></li>
          <li class="nav-item"><RouterLink to="/horror">Film horror</RouterLink></li>
          <li class="nav-item"><RouterLink to="/films">Lista film</RouterLink></li>
          <li class="nav-item"><RouterLink to="/contacts">Contattaci</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from './Button.vue';

const isNavOpen = ref(false);

const toggleNav = () =>{
  isNavOpen.value = !isNavOpen.value;
}
</script>

<style scoped>
.nav-layout {
  background-color: var(--color-primary);
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-light);
  position: sticky;
  top: 0;
  right: 0;
  
}

.nav-list {
  width: 100%;
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list-responsive {
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  position: absolute;
  top: 100px;
  right: 0;
  list-style: none;
  padding: 1rem;
  border-left: 5px solid var(--color-secondary);
  width: 50%;
  min-height: 100vh;
  border-radius: 5px;
  z-index: 100;
}

.nav-item a {
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: var(--font-md);
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.nav-item a:hover,
.nav-item a:focus {
  color: var(--color-accent);
}

/* router-link-active is managed by Vue Router */
:global(.router-link-active) {
  color: var(--color-text-active);
  border-bottom: 2px solid var(--color-text-active);
}

.buttton-toggle{
  background-color: var(--color-accent);
  padding: 1rem;
  color: var(--color-text-primary);
  box-shadow: none;
}
.button-toggle:hover{
  background-color: var(--color-text-accent-dark);
  color: var(--color-text-primary);
}

@media (min-width: 760px) {
  .nav-list-responsive {
    display: none;
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-item a{
    font-size: var(--font-lg);
  }
  /* Hide the toggle button on large screens */
  .button-toggle {
    display: none;
  }
}
</style>