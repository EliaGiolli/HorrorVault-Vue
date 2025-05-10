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
  background-color: #592C80;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  
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
  color: white;
  text-decoration: none;
  font-size: px;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 1rem;
}

.nav-layout li a:hover {
  color: #FF4C4C;
}

/* router-link-active is a class provided by Vue Router */
.router-link-active {
  color: #FFD700;
  border-bottom: 2px solid #FFD700;
}
</style>