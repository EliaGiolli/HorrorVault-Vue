import { ref } from 'vue';


const API_KEY = 'ca1937478f8af0383cb6dbcdc0d95e9a';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=adventure`;

const films = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');

const fetchFilms = async () => {
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
}

export function useMovies(){
  return {
    films,
    fetchFilms,
    isLoading,
    errorMessage
  }
}