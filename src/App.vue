<!--App.vue funziona da entry point dell'applicazione, un po' come i layout di Next-->
<!--Tutto il layout che creo qui sarà visibile in tutta l'applicazione-->
<template>
     <Navbar />
      <main class="main-content">
        <RouterView />  
      </main>
      <Footer />
</template>
  
<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';  
  import { RouterView } from 'vue-router' 
</script>


<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
  }
</style>

  
