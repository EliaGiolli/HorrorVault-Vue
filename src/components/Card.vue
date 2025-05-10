<!-- Here we're defining a dynamic and reusable card component -->
<template>
        <!-- Here we're defining a dynamic class -->
    <article :class="`film-card ${extraClass}`">
        <!-- In Vue, <slot /> is like the children prop in React   -->
        <slot />
    </article>

</template>

<script setup>

    defineProps({
        extraClass: {
            type: String,
            default: ''
        }
    })
</script>

<style scoped>
 .film-card{
    background-color: var(--color-secondary);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid var(--color-light);
    border-radius: 0.8rem;
    box-shadow: 0 10px 15px var(--color-text-primary), 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
 }
 /* Media query for middle-size devices - width 768px (md) */
@media (min-width: 768px) {
    .film-card {
        max-width: 768px; /* It's equivalent to md:max-w-3xl */
    }
}

/* Media query for large devices - width 1024 (lg) */
@media (min-width: 1024px) {
    .film-card {
        max-width: 960px; 
    }
}
</style>