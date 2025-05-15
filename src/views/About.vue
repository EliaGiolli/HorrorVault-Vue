<template>
  <section class="about-container" aria-labelledby="about-heading">
    <article class="about-content">
        <!-- aria-labelledby help screen reader to read the title -->
        <!-- they are usually linked to an id attribute -->
      <h1 id="about-heading">Benvenuto su HorrorVault</h1>
      <p>
        HorrorVault è il tuo rifugio digitale per esplorare il mondo del cinema horror. 
        Che tu sia un fan del terrore psicologico, dei mostri classici o delle gemme nascoste 
        degli anni '70 e '80, qui troverai film da scoprire, amare (o temere) e condividere.
      </p>

      <section aria-labelledby="features-heading">
       <div class="features-div">
            <Icon icon="mdi:film" width="24" height="24" class="icon"/>
            <h2 id="features-heading"> Cosa troverai qui</h2>
       </div>
        <ul class="content-list">
            <li>Una raccolta curata di film horror di ogni epoca e sottogenere</li>
            <li>Schede dettagliate con locandina, trama e data di uscita</li>
            <li>Un’interfaccia semplice e reattiva pensata per gli appassionati</li>
        </ul>
      </section>

      <section aria-labelledby="mission-heading">
        <div class="features-div">
            <Icon icon="mdi:brain" width="24" height="24" class="icon"/>
            <h2 id="mission-heading">La nostra missione</h2>
        </div>
        <p>
            L’obiettivo di HorrorVault è quello di dare valore al genere horror 
            e rendere accessibili i suoi titoli più iconici e quelli meno conosciuti, 
            anche a chi si affaccia per la prima volta a questo universo.
        </p>
      </section>
    </article>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.about-container {
  max-width: 900px;
  min-height: 100vh;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  background-color: var(--color-background);
  color: var(--text-color-primary);
  line-height: 1.6;
  border-radius: 11px;
  box-shadow: 5px 5px 10px var(--color-text-secondary);

  .about-content {
    h1,
    h2 {
      color: var(--color-accent);
    }

    h1 {
      font-size: var(--font-2xl);
      margin-bottom: 1rem;
    }

    h2 {
      font-size: var(--font-xl);
      margin-top: 1rem;
    }

    p {
      margin-bottom: 1.2rem;
      font-size: var(--font-md);
      padding: 0.5rem;
    }

    ul {
      list-style: disc;
      padding-left: 1rem;
      font-size: var(--font-md);
      margin: 1rem 0;

      li {
        margin-bottom: 0.6rem;
        padding: 0.8rem;
      }
    }

    .features-div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }

    .icon {
      color: var(--color-accent);

      &:hover {
        color: var(--color-text-active);
      }
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

      ul {
        padding-left: 1rem;
      }

      .features-div {
        justify-content: flex-start;
      }
    }
  }
}

</style>
