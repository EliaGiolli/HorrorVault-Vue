<template>
    <div class="page-wrapper">
        <Hero />
        <section class="filtered-h-films">
            <Card v-for="film in bestHorrorFilms" :key="film.id" :aria-labelledby="`film-title-${film.id}`" class="horror-card">
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
    </div>
</template>

<script setup>
import { computed} from 'vue';
import { useMovies } from '../composables/useFetch';
import Hero from '../components/Hero.vue';
import Card from '../components/Card.vue';
import { horrorFilms } from '../data/filmsData';

const bestHorrorFilms = computed(() => horrorFilms.slice(0, 4));

const { films } = useMovies();
const bestApiFilms = computed(() => films.value.slice(0,5));
</script>

<style scoped>
.page-wrapper{
    display: flex;
    flex-direction: column;
    min-height: 500px;
    width: 100%;
}

.filtered-h-films {
  display: grid;
  grid-template-columns: 1fr; 
  gap: 2rem;
  padding: 2rem;
  min-height: 500px;
}

.horror-card {
  background-color: var(--color-background);
  border: 1px solid var(--color-light);
  border-radius: 0.8rem;
  box-shadow: 0 10px 15px var(--color-text-primary), 0 4px 6px rgba(0, 0, 0, 0.1);  
  transition: transform 0.3s ease;
}

.horror-card:hover {
  transform: scale(1.02);
}

.horror-card h2 {
  margin-bottom: 0.5rem;
  font-size: var(--font-2xl);
  color: var(--color-accent); 
}

.img-div {
  padding: 1rem;
  width: 100%;
}

.img-div img {
  object-fit: cover;
  width: 100%;
  height: 300px;
}


.card-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-details p {
  font-size: var(--font-lg);
  padding: 0.75rem;
}


@media (max-width: 480px) {
  .img-div img {
    height: 200px;
  }
}

@media (min-width: 600px) {
  .filtered-h-films {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (min-width: 1024px) {
  .filtered-h-films {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
  }
}
</style>