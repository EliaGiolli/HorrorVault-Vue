<template>
   <main class="film-container">

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="errorMessage" class="error">{{ errorMessage }}</div>

    <section v-else class="card-grid-section">
         <!-- This sectond template is invisible, so it won't be rendered. It takes care of the v-for in this node, not overloading the Card-->
         <template v-for="film in films" :key="film.id">
            <!-- This line loops throgh the API data and creates a new card with these data-->
            <!-- If the property 'film.poster_path' doesn't exist, the card is not shown in the DOM-->
            <Card v-if="film.poster_path">
                <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" :alt="film.title" class="w-full h-auto object-cover mb-2" />
                <h2 class="text-xl font-semibold">{{ film.title }}</h2>
                <p class="text-sm text-[#D1B2FF]">{{ film.release_date?.slice(0, 4) }}</p>
            </Card>
      </template>
    </section>
    
   </main>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import Card from '../components/Card.vue';

    const API_KEY = 'ca1937478f8af0383cb6dbcdc0d95e9a';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=adventure`;

    const films = ref([]);
    const isLoading = ref(true);
    const errorMessage = ref('');

    //In Vue you typically fetch the APIs when the component is mounted with onMounted()
    onMounted(async () =>{
        try{
            const res = await fetch(url);
            if(!res.ok) throw new Error('network error');
            const data = await res.json();
            //we're accessing the property 'results' inside the JSON object retrieved from the API call
            films.value = data.results;
        }catch(err){
            errorMessage.value = err.message || "Error during the API request";
        }finally{
            isLoading.value = false;
        }
    })
</script>


<style scoped>
    .film-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 2rem;
        min-height: 500px;
    }
    .error{
        width: 100%;
        background-color: #fff;
        color: var(--color-accent);
        padding: 1rem;
        border-radius: 5px;
    }
    .card-grid-section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 2rem;
        min-height: 500px;
    }

</style>