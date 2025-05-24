import { onMounted, ref, watch } from 'vue';

export function useLocalStorage(formState, key) {
  const isSaved = ref(false);

  onMounted(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      Object.assign(formState, JSON.parse(saved));
    }
  });

  watch(
    formState,
    (val) => {
      localStorage.setItem(key, JSON.stringify(val));
      isSaved.value = true;
      setTimeout(() => isSaved.value = false, 2000);
    },
    { deep: true }
  );

  return { isSaved };
}
