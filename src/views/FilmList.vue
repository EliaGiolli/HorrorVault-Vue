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
import { ref, onMounted } from 'vue';

const API_KEY = 'ca1937478f8af0383cb6dbcdc0d95e9a';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=adventure`;

const films = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');

onMounted(async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    films.value = data.results;
  } catch (err) {
    errorMessage.value = err.message || 'Error during API request';
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.film-container {
  padding: 2rem;
  min-height: 500px;

  .loading {
    font-size: var(--font-lg);
    color: var(--color-accent);
  }

  .error {
    background-color: #fff;
    color: var(--color-accent);
    padding: 1rem;
    border-radius: 5px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .film-card {
    background-color: var(--color-light);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }

    img.film-img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .card-content {
      padding: 1rem;

      h2 {
        font-size: var(--font-2xl);
        font-weight: bold;
        color: var(--color-accent);
        margin-bottom: 0.75rem;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
          font-size: var(--font-lg);
          line-height: 1.4;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .film-card .card-content h2 {
      font-size: var(--font-xl);
    }
  }
}
</style>
