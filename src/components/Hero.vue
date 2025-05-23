<template>
<section class="hero-section">
    <div class="text-wrapper">
         <h3>I migliori film horror online: recensioni, novità e classici del genere</h3>
        <h1>HorrorVault: novità, recensioni e classici</h1>

        <Button>
            <RouterLink to="/horror">Guarda i nostri film horror</RouterLink>
        </Button>
    </div>
</section>

</template>

<script setup>
import Button from './Button.vue'
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.hero-section{
    width:100%;
    min-height: 100vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: var(--color-text-primary);
    background-image:
      linear-gradient(rgba(30,16,42,0.7), rgba(30,16,42,0.7)),
      url('/assets/horror-cinema.jpg');
    background-size: cover;
    background-position: center;
    
}

.text-wrapper{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    text-align: center;  
    gap: 1rem;
    padding: 0-8 rem;
}

.text-wrapper h1 {
    font-size: var(--font-3xl);
    font-weight: 900;
    color: var(--color-accent);
    margin-bottom: 0.5rem;
}

.text-wrapper h3 {
    font-size: var(--font-xl);
}

.text-wrapper a {
    text-decoration: none;
    color: var(--color-text-primary);
}

@media (max-width: 480px) {
   .text-wrapper {
         align-items: flex-end;   
        text-align: right; 
  }
  .text-wrapper h1 {
    font-size: var(--font-2xl); 
    }
}

</style>