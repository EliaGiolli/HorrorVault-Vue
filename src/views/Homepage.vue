<template>
    <div class="page-wrapper">

      <!-- Hero section -->
        <Hero />
        <div class="first-intro">
          <h2>Scoprite i nostri spaventosi classici horror!</h2>
            <p>
              Scopri la nostra selezione dei migliori film horror: recensioni, trame, registi e curiosità sui capolavori e le nuove uscite del genere. HorrorVault è il punto di riferimento per gli appassionati di cinema horror in Italia.
            </p>
          </div>
        <!--horror films from the mock database-->
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

        <!-- Films from the API -->
        <div class="second-intro">
          <h2>Scoprite gli intramontabili classici internazionali!</h2>
            <p>
              Godetevi una selezione dei migliori ed intramontabili classici del cinema internazionale
            </p>
          </div>
        <!-- Error and loading -->
        <div v-if="isLoading" class="loading" role="status" aria-live="polite">Loading films...</div>

        <div v-else-if="errorMessage" class="error" role="alert">{{ errorMessage }}</div>

        <section v-else class="card-grid">
          <article
            v-for="film in bestApiFilms"
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
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useMovies } from '../composables/useFetch';
import Hero from '../components/Hero.vue';
import Card from '../components/Card.vue';
import { horrorFilms } from '../data/filmsData';

const bestHorrorFilms = computed(() => horrorFilms.slice(0, 4));
const { films, fetchFilms, isLoading, errorMessage } = useMovies();
const bestApiFilms = computed(() => films.value.slice(0, 5));

onMounted(() => {
  fetchFilms();
});
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 100%;
}
.first-intro{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  color: var(--color-background);
  font-size: var(--font-xl);
}

.first-intro h2{
  color: var(--color-accent);
  font-size: var(--font-2xl);
  margin-bottom: 1rem;
}

.second-intro{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  color: var(--color-background);
  font-size: var(--font-xl);
}

.second-intro h2{
  color: var(--color-accent);
  font-size: var(--font-2xl);
  margin-bottom: 1rem;
}


@media (min-width: 760px){
  .first-intro{
    font-size: var(--font-lg);
  }
  .first-intro h2{
    font-size: var(--font-3xl);
  }
  .second-intro{
    font-size: var(--font-lg);
  }
  .second-intro h2{
    font-size: var(--font-3xl);
  }
}
</style>