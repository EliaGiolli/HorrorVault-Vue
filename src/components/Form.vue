<template>
  <form action="GET" 
    class="form-wrapper" 
    @submit.prevent="handleSubmit"
    >
    <div class="form-section">
      <label for="username">Username</label>
      <input 
        id="username" 
        type="text" 
        placeholder="username"
        v-model.lazy.trim="formInputs.userName" 
        required
        />
    </div>
  
    <div class="form-section">
      <label for="password">Password</label>
      <input 
        id="password" 
        type="password" 
        placeholder="password" 
        v-model.trim="formInputs.password" 
        required/>
    </div>
    <div class="form-section">
      <label for="repeatedPassword">Ripeti password</label>
      <input 
        id="repeatedPassword" 
        type="password" 
        placeholder="ripeti password" 
        :class="{ 'input-error': !matchPassword && formInputs.repeatedPassword }"
        v-model.trim="formInputs.repeatedPassword" 
        required/>
    </div>

     <!-- The message appears only when the user finishes typing -->
    <div v-if="!matchPassword && formInputs.repeatedPassword">
      <p>Le password non coincidono. Riprova</p>
    </div>

    <div class="form-section">
      <label for="message">Perché vuoi iscriverti alla nostra newsletter?</label>
      <textarea 
        id="message" 
        placeholder="Spiegaci il perché" 
        v-model.lazy.trim="formInputs.message"></textarea>
    </div>
    <div class="form-section checkbox-section">
      <input 
        id="accepted" 
        type="checkbox" 
        v-model="formInputs.accepted" 
        required/>
      <label for="accepted" class="checkbox-label">Policy accettata</label>
    </div>
    <Button type="submit">Iscriviti alla newsletter!</Button>
  
    <div v-if="isSaved" class="success-message">
      Dati salvati correttamente!
    </div>
  </form>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Button from './Button.vue';
import { useLocalStorage } from '../composables/useLocalStorage';

const formInputs = reactive({
  userName: '',
  password: '',
  repeatedPassword: '',
  message: '',
  accepted: false
});


// Persist formInputs to localStorage
const { isSaved } = useLocalStorage(formInputs, 'newsletterForm');

//check the correctness of the passwords and saves it in the memory
const matchPassword = computed(() =>{
  return formInputs.password === formInputs.repeatedPassword;
});


// --- HANDLING SUBMIT FORM lOGIC---
function handleSubmit() {
  if (!matchPassword.value) {
    alert('Le password non coincidono.');
    return;
  }

  if (!formInputs.accepted) {
    alert('Devi accettare la privacy policy!');
    return;
  }

  if (
    !formInputs.userName.trim() ||
    !formInputs.password.trim() ||
    !formInputs.repeatedPassword.trim()
  ) {
    alert('Compila tutti i campi obbligatori.');
    return;
  }

  console.log('Form valido e pronto!');
}
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

.input-error {
  border-color: red;
  box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
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

.error-message {
  color: red;
  font-size: var(--font-sm, 0.875rem);
  margin-top: 0.5rem;
}

.success-message {
  color: var(--color-accent);
  margin-top: 1rem;
  font-weight: bold;
  transition: opacity 0.3s;
}


@media (max-width: 600px) {
  .form-section {
    max-width: 100%;
    font-size: var(--font-lg);
  }
}
</style>