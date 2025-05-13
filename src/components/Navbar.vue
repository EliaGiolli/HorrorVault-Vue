<template>
     <nav class="nav-layout">
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">Su di noi</RouterLink></li>
            <li><RouterLink to="/horror">Film horror</RouterLink></li>
            <li><RouterLink to="/films">Lista film</RouterLink></li>
            <li><RouterLink to="/contacts">Contattaci</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
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
}

.nav-layout ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
/* In Vue Router Link is considered an anchor tag (<a>)  */
.nav-layout li a {
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: var(--font-sm);
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 0.8rem;
}

.nav-layout li a:is(:hover, :focus) {
  color: var(--color-accent);
}

/* router-link-active is a class provided by Vue Router */
.router-link-active {
  color: var(--color-text-active);
  border-bottom: 2px solid var(--color-text-active);
}
</style>