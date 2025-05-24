<template>
  <form action="GET" class="form-wrapper">
    <div class="form-section">
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="username" v-model="formInputs.userName" />
    </div>
    <div class="form-section">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="password" v-model="formInputs.password" />
    </div>
    <div class="form-section">
      <label for="repeatedPassword">Ripeti password</label>
      <input id="repeatedPassword" type="password" placeholder="ripeti password" v-model="formInputs.repeatedPassword" />
    </div>
    <div class="form-section">
      <label for="message">Perché vuoi iscriverti alla nostra newsletter?</label>
      <textarea id="message" placeholder="Spiegaci il perché" v-model="formInputs.message"></textarea>
    </div>
    <div class="form-section checkbox-section">
      <input id="accepted" type="checkbox" v-model="formInputs.accepted" />
      <label for="accepted" class="checkbox-label">Policy accettata</label>
    </div>
    <Button>Iscriviti alla newsletter!</Button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import Button from './Button.vue'
const formInputs = reactive({
  userName: '',
  password: '',
  repeatedPassword: '',
  message: '',
  accepted: false
});
</script>

<style scoped>
.form-wrapper {
  color: var(--color-text-tertiary);
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.form-section {
  font-size: var(--font-xl);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
}

.form-section:last-of-type textarea {
  padding: 1rem;
}

.form-section input,
.form-section textarea {
  padding: 0.5rem 1rem;
  border-radius: 11px;
  border: 1px solid var(--color-light);
  font-size: var(--font-md);
  transition: box-shadow 0.2s, border-color 0.2s;
}

.form-section input:focus,
.form-section textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px var(--color-accent-light, #ffb3b3);
}

.form-section input::placeholder,
.form-section textarea::placeholder {
  color: var(--color-text-secondary);
  opacity: 1;
}

.form-section input[type="checkbox"] {
  width: auto;
  margin-right: 0.5rem;
  accent-color: var(--color-accent);
}

.checkbox-section {
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--font-md);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.checkbox-label {
  font-weight: 500;
  cursor: pointer;
}

@media (max-width: 600px) {
  .form-section {
    max-width: 100%;
    font-size: var(--font-lg);
  }
}
</style>