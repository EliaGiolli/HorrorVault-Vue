<template>
     <section class="horror-card-section">
        <Card v-for="film in films" :key="film.id">
            <h2>{{ film.title }}</h2>
            <div class="img-div">
                <img :src="film.poster" :alt="'Poster for ' + film.title">
            </div>
            <div class="card-inner-div">
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
  gap: 1.5rem;
  padding: 2rem;
}

.card-inner-div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card-inner-div p{
    font-size: 20px;
}
h2 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: #FF4C4C; 
}

</style>