<!--App.vue funziona da entry point dell'applicazione, un po' come i layout di Next-->
<!--Tutto il layout che creo qui sarà visibile in tutta l'applicazione-->
<template>
    <Navbar />
    <main>
      <RouterView />  
    </main>
  </template>
  
  <script setup>
  import Navbar from './components/Navbar.vue'  // Importa la barra di navigazione
  import { RouterView } from 'vue-router'  // Importa RouterView per il rendering delle route
  </script>
  