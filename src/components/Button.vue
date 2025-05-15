<template>
    <!-- <component :is="something"> allow us to display a dynamic component in Vue -->
  <component
    :is="isRouter ? RouterLink : 'button'"
    :to="isRouter ? to : null"
    :class="`customBtn ${extraClass}`"
    :aria-label="ariaLabel"
  >
    <slot />
  </component>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  to: String, 
  extraClass: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})
//!! converts props to a boolean.
//if there's a "to", then it will be true, so the button will use <RouterLink>,
//otherwise it will use <button>
const isRouter = !!props.to;
</script>

<style scoped>
.customBtn {
  background-color: var(--color-accent);
  color: var(--color-text-primary);
  padding: 0.6rem;
  margin: 0 auto;
  border-radius: 11px;
  box-shadow: 5px 5px 10px var(--color-text-primary);
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.customBtn:hover,
.customBtn.router-link-active {
  background-color: var(--color-text-active);
  color: var(--color-background);
}
</style>
