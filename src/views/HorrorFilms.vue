<template>
    <section class="intro-horror" aria-label="Introduzione ai film horror">
        <h1 class="intro-title">Benvenuto nell’Oscurità del Cinema Horror</h1>
        <p class="intro-text">
            Preparati a esplorare una collezione di film horror selezionati per veri amanti del brivido.
            Da cult spaventosi a perle sconosciute, ogni film è classificato per sottogenere, regista e anno di uscita.
            Scopri le profondità dell’orrore... se hai il coraggio.
        </p>
    </section>
     <section class="horror-card-section">
        <Card v-for="film in horrorFilms" :key="film.id" :aria-labelledby="`film-title-${film.id}`" class="horror-card">
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
import { horrorFilms } from '../data/filmsData.js'
</script>

<style scoped>
.intro-horror {
  margin-block: 2rem;
  padding: 1rem;
  background-color: var(--color-text-primary);
  border-left: 6px solid var(--color-primary);
  border-radius: 1rem;
  color: var(--color-text-primary);

}

.intro-title {
  font-size: var(--font-2xl);
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.intro-text {
  font-size: var(--font-lg);
  line-height: 1.6;
  color: var(--color-text-tertiary);
}

</style>