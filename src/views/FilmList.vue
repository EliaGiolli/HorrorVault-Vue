<template>
  <main class="film-container">
    <div v-if="isLoading" class="loading" role="status" aria-live="polite">Loading films...</div>

    <div v-else-if="errorMessage" class="error" role="alert">{{ errorMessage }}</div>

    <section v-else class="card-grid">
      <article
        v-for="film in films"
        :key="film.id"
        class="film-card"
        :aria-labelledby="`film-title-${film.id}`"
      >
        <img
          v-if="film.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`"
          :alt="`Poster of ${film.title}`"
          class="film-img"
        />
        <div class="card-content">
          <h2 :id="`film-title-${film.id}`">{{ film.title }}</h2>
          <div class="card-info">
            <p><strong>Popularity:</strong> {{ film.popularity }}</p>
            <p><strong>Original Language:</strong> {{ film.original_language }}</p>
            <p><strong>Release Year:</strong> {{ film.release_date?.slice(0, 4) }}</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMovies } from '../composables/useFetch';

const { fetchFilms, films,isLoading, errorMessage } = useMovies();

onMounted(async () => {
  fetchFilms();
});
</script>

<style scoped>
.film-container {
  padding: 2rem;
  min-height: 500px; 
  }

</style>
