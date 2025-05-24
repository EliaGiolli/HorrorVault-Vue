<template>
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

