<template>
  <section class="about-container" aria-labelledby="about-heading">
    <article class="about-content">
      <h1 id="about-heading"><strong>Benvenuto su HorrorVault</strong></h1>
      <p class="about-description">
        <strong>HorrorVault</strong> è il tuo rifugio digitale per esplorare il mondo del <strong>cinema horror</strong>.
        Che tu sia un fan del <strong>terrore psicologico</strong>, dei <strong>mostri classici</strong> o delle <strong>gemme nascoste</strong>
        degli anni '70 e '80, qui troverai <strong>film</strong> da scoprire, amare (o temere) e condividere.
      </p>

      <section aria-labelledby="features-heading">
        <header class="features-div">
          <Icon icon="mdi:film" width="24" height="24" class="icon" />
          <h2 id="features-heading"><strong>Cosa troverai qui</strong></h2>
        </header>
        <p class="about-description">
          Esplora la nostra collezione di <strong>film horror</strong>, dalla classica era del <strong>cinema gotico</strong> fino alle produzioni contemporanee. 
          Ogni <strong>film</strong> è presentato con una scheda dettagliata che include locandina originale, trama approfondita e informazioni 
          sulla distribuzione, offrendo un'esperienza di navigazione intuitiva e completa per tutti gli appassionati del genere.
        </p>
      </section>

      <section class="image-showcase">
        <div class="image-container">
          <img 
            src="/assets/cinema.jpg" 
            alt="Collezione di film horror classici e contemporanei" 
            class="showcase-image"
          />
          <div class="image-overlay">
            <p class="overlay-text"><strong>Scopri il nostro archivio</strong></p>
            <div class="overlay-div">
              <RouterLink to="/horror"><strong>Film horror</strong></RouterLink>
              <RouterLink to="/films"><strong>Film in programma</strong></RouterLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading">
        <header class="features-div">
          <Icon icon="mdi:brain" width="24" height="24" class="icon" />
          <h2 id="mission-heading"><strong>La nostra missione</strong></h2>
        </header>
        <p class="about-description">
          L'obiettivo di <strong>HorrorVault</strong> è quello di dare valore al <strong>genere horror</strong>
          e rendere accessibili i suoi titoli più iconici e quelli meno conosciuti,
          anche a chi si affaccia per la prima volta a questo universo.
        </p>
      </section>

      <section aria-labelledby="vision-heading">
        <header class="features-div">
          <Icon icon="mdi:eye" width="24" height="24" class="icon" />
          <h2 id="vision-heading"><strong>La nostra visione</strong></h2>
        </header>
        <p class="about-description">
          La nostra visione è diventare il punto di riferimento online per gli >appassionati di <strong>cinema horror</strong> in Italia. 
          <strong>HorrorVault</strong> si impegna a offrire contenuti aggiornati, recensioni approfondite e guide ai migliori film horror, 
          ottimizzati per i motori di ricerca. Vogliamo aiutare gli utenti a scoprire nuove pellicole, approfondire la storia del genere 
          e trovare facilmente informazioni su registi, attori e curiosità. Il nostro obiettivo è rendere il mondo dell’horror accessibile, 
          coinvolgente e facilmente esplorabile da chiunque cerchi >emozioni forti e storie indimenticabili.
        </p>
      </section>
    </article>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.about-container {
  max-width: 900px;
  min-height: 100vh;
  margin-inline: auto;
  margin-block: 1rem;
  padding: 2rem 1.5rem;
  background-color: var(--color-light);
  color: var(--text-color-primary);
  line-height: 1.6;
  
  .about-content {
    h1,
    h2 {
      color: var(--color-accent);
    }

    h1 {
      font-size: var(--font-3xl);
      margin-bottom: 1rem;
    }

    h2 {
      font-size: var(--font-2xl);
      margin-top: 1rem;
    }

    .about-description{
      margin-block:1.5rem;
      font-size: var(--font-lg);
      color: var(--color-text-tertiary);
      text-wrap: balance;
      line-height: 1.6;

      strong {
        color: var(--color-text-accent-dark);
        font-weight: 700;
        padding: 0 0.1em;
        letter-spacing: 0.01em;
        transition: background 0.3s, color 0.3s;
      }
    }

    .features-div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;

      .icon {
        color: var(--color-accent);
        transition: color 0.3s ease-in-out;
        display: flex;
        align-items: center;
        margin-top: 0.25rem;

        &:hover {
          color: var(--color-text-active);
        }
      }

      h2 {
        margin: 0;
      }
    }

    .image-showcase {
      margin: 3rem 0;
      padding: 0 1rem;
    }

    .image-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      aspect-ratio: 16/9;
      background-color: var(--color-background);
    }

    .showcase-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        to top,
        rgba(30, 16, 42, 0.95),
        rgba(30, 16, 42, 0.4)
      );
      padding: 2rem 1.5rem 1.5rem;
    }

    .overlay-text {
      color: var(--color-text-primary);
      font-size: var(--font-xl);
      font-weight: 600;
      text-align: center;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      strong {
        color: var(--color-accent);
        font-weight: 700;
        background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 0 0.1em;
        letter-spacing: 0.01em;
        filter: brightness(1.1) drop-shadow(0 1px 2px rgba(0,0,0,0.08));
      }
    }

    .image-container:hover {
      .showcase-image {
        transform: scale(1.05);
      }
      
      .overlay-text {
        color: var(--color-text-active);
      }
    }
    .overlay-div{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      padding: 1rem;
      margin-top: 1rem;

      a{
        text-decoration: none;
        color: var(--color-text-primary);
        font-weight: 700;
        background-color: var(--color-accent);
        padding:0.5rem;
        border-radius: 11px;
        transition: color 0.3s ease-in-out;

         &:is(:hover, :focus){
          background-color: var(--color-text-active);
          color: var(--color-background);
         }

         strong {
          color: inherit;
          background: none;
          -webkit-text-fill-color: inherit;
         }
      }

    }

    .about-btn {
      display: inline-block;
      margin-top: 2rem;
      text-align: center;
      font-size: var(--font-md);
    }
  }

  @media (min-width: 768px) {
    line-height: 1.2rem;

    .about-content {
      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 1.5rem;
        margin-top: 2rem;
      }

      p {
        margin-bottom: 1.2rem;
        font-size: 1.1rem;
      }

      .image-showcase {
        padding: 0 2rem;
        margin: 4rem 0;
      }

      .overlay-text {
        font-size: var(--font-2xl);
      }

      .features-div {
        justify-content: flex-start;
      }
    }
  }
}
</style>
