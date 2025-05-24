<template>
    <h1>contacts page</h1>

    <Form />
</template>

<script setup>
import Form from '../components/Form.vue';
</script>


<style scoped>
h1{
    text-transform: capitalize;
    font-size: var(--font-3xl);
    color: var(--color-accent);
    text-align: center;
    margin-block: 1.5rem;
}
</style>