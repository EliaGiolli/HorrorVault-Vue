# HorrorVault

A curated collection of horror films for true fans of the genre. Built with Vue 3 and Vite, HorrorVault lets you browse, discover, and explore horror movies by subgenre, director, and year.

---

## 🚀 Technologies & Libraries

- **Vue 3**: Modern JavaScript framework for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast development and builds.
- **Vue Router**: Official router for Vue.js for SPA navigation.
- **@iconify/vue**: Icon library integration (if used in your components).

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/horrorvault.git
cd horrorvault
npm install
```

To start the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🗂️ Project Structure

```
src/
  assets/         # Images, icons, etc.
  components/     # Vue components (e.g., Card.vue)
  data/           # Static data (e.g., filmsData.js)
  views/          # Page views (e.g., HorrorFilms.vue)
  router/         # Vue Router setup
  App.vue         # Root component
  main.js         # App entry point
```

---

## 📄 Pages Explained

### 1. **HorrorFilms.vue**

- **Intro Section**: Welcomes users and introduces the horror film collection.
- **Film Cards**: Dynamically lists all horror films from `filmsData.js` using the `Card` component.
  - Each card displays:
    - Film title
    - Poster image
    - Director
    - Subgenre
    - Year of publication

#### Example Card Rendering

```vue
<Card v-for="film in horrorFilms" :key="film.id">
  <h2>{{ film.title }}</h2>
  <img :src="film.poster" :alt="'Poster for ' + film.title">
  <p>Director: {{ film.director }}</p>
  <p>Subgenre: {{ film.subgenre }}</p>
  <p>Year: {{ film.year }}</p>
</Card>
```

---

## 🔗 Data & API Fetch

### Static Data

Currently, the app uses static data imported from `src/data/filmsData.js`:

```js
import { horrorFilms } from '../data/filmsData.js'
```

This array contains objects for each film, e.g.:

```js
{
  id: 1,
  title: "The Shining",
  director: "Stanley Kubrick",
  subgenre: "Psychological Horror",
  year: 1980,
  poster: "/assets/shining.jpg"
}
```

### API Fetch (If Implemented)

If you plan to fetch data from an external API, you would typically use the `fetch` API or Axios in the `<script setup>` block:

```js
import { ref, onMounted } from 'vue'

const horrorFilms = ref([])

onMounted(async () => {
  const response = await fetch('https://api.example.com/horror-films')
  horrorFilms.value = await response.json()
})
```

- **Where**: Place this logic in your view or a composable.
- **How**: The API should return an array of film objects with the same structure as your static data.
- **Usage**: The template will automatically update to show the fetched films.

---

## 🖼️ Accessibility & Styling

- Uses semantic HTML and ARIA labels for accessibility.
- Custom CSS variables for theming and responsive design.

---

## 📃 License

ISC

---

## ✨ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📫 Contact

For questions or suggestions, open an issue or contact [yourusername](https://github.com/yourusername).
