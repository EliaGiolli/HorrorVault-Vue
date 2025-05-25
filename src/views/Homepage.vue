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
        <section class="form-section">
          <div class="form-intro">
            <h2>Iscriviti alla nostra newsletter horror</h2>
            <p>
              Rimani aggiornato sulle ultime novità, recensioni e curiosità dal mondo del cinema horror. Ricevi direttamente nella tua casella email consigli esclusivi, anteprime e contenuti dedicati agli appassionati del genere.
            </p>
          </div>
          <Form />
        </section>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useMovies } from '../composables/useFetch';
import Hero from '../components/Hero.vue';
import Card from '../components/Card.vue';
import Form from '../components/Form.vue'
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
  height: 300px;
  margin-block: 2.5rem;
  padding: 2rem; 
  background-color: var(--color-text-primary);
  border-left: 5px solid var(--color-primary);
  border-radius: 0.5rem;
}

.first-intro h2{
  font-size: var(--font-2xl);
  margin-bottom: 0.5rem;
  color: var(--color-accent)
}

.first-intro p{
  font-size: var(--font-lg);
  line-height: 1.6;
  color: var(--color-text-tertiary);
}


.second-intro{
  height: 300px;
  margin-block: 2.5rem;
  padding: 2rem; 
  background-color: var(--color-text-primary);
  border-left: 5px solid var(--color-primary);
  border-radius: 0.5rem;
}

.second-intro h2{
  font-size: var(--font-2xl);
  margin-bottom: 0.5rem;
  color: var(--color-accent)
}

.second-intro p{
  font-size: var(--font-lg);
  line-height: 1.6;
  color: var(--color-text-tertiary);
}


.form-section{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
}
.form-intro{
  height: 300px;
  margin-block: 2.5rem;
  padding: 2rem; 
  background-color: var(--color-text-primary);
  border-left: 5px solid var(--color-primary);
  border-radius: 0.5rem;
}
.form-section h2{
    font-size: var(--font-2xl);
    color: var(--color-accent);
    text-align: center;
    margin-block: 1.5rem;
}

.form-section p{
  line-height: 1.6;
  padding: 1rem;
  color: var(--color-background);
  font-size: var(--font-lg);
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
  .form-section p{
    font-size: var(--font-xl);
    padding-inline: 1.5rem;
  }

}
</style>