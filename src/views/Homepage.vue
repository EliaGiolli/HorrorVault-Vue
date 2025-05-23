<template>
    <div class="page-wrapper">
        <Hero />
    </div>
</template>

<script setup>
import Hero from '../components/Hero.vue';
</script>

<style scoped>
.page-wrapper{
    display: flex;
    flex-direction: column;
    min-height: 500px;
}
</style>