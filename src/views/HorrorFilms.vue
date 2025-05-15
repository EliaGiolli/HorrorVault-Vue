<template>
     <section class="horror-card-section">
        <Card v-for="film in films" :key="film.id" :aria-labelledby="`film-title-${film.id}`">
            <h2 :id="`film-title-${film.id}`">{{ film.title }}</h2>
            <div class="img-div">
                <img :src="film.poster" :alt="'Poster for ' + film.title">
            </div>
            <div class="card-details">
                <p>Director: {{ film.director }}</p>
                <p>Subgenre: {{ film.subgenre }}</p>
                <p>Year of Publication: {{ film.year }}</p>
            </div>
        </Card>
      </section>
</template>

<script setup>
import Card from '../components/Card.vue'
import { films } from '../data/filmsData.js'
</script>

<style scoped>
.horror-card-section {
  display: grid;
  /*  every row has a width of minimum 250px but it can grow up until 1fr */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  min-height: 500px;

    h2 {
      margin-bottom: 0.5rem;
      font-size: var(--font-2xl);
      color: var(--color-accent); 
    }
  .img-div{
    padding: 1rem;
    width:100%;

    & img{
      object-fit: cover;
      width: 100%;
      height: 300px;
    }
  }
  .card-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & p{
      font-size: var(--font-lg);
      padding: 0.75rem;
    }
  }
}
  
@media (max-width: 480px) {
  .img-div img {
    height: 200px;
  }
}



</style>