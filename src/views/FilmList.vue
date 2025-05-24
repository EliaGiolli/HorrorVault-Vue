<template>
  <main class="film-container">
    <!-- INTRO HERO SECTION -->
    <section class="intro-section" aria-label="Introduzione ai film">
      <h1 class="intro-title">Scopri i Film Più Popolari del Momento</h1>
      <p class="intro-text">
        Benvenuto nella nostra selezione aggiornata di <strong>film popolari</strong>. 
        Scopri i titoli più amati dal pubblico, le nuove uscite e i grandi successi internazionali. Ogni film è corredato di informazioni chiave come <em>anno di uscita</em>, <em>lingua originale</em> e <em>popolarità</em>.
      </p>
    </section>

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
.intro-section {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--color-text-primary);
  border-left: 5px solid var(--color-primary);
  border-radius: 0.5rem;
}

.intro-title {
  font-size: var(--font-2xl);
  margin-bottom: 0.5rem;
  color: var(--color-accent);
}

.intro-text {
  font-size: var(--font-lg);
  line-height: 1.6;
  color: var(--color-text-tertiary);
}
.intro-text strong{
  color: var(--color-text-accent-dark);
}

</style>
