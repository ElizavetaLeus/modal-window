<template>
  <button :class="$style.button"> {{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}
interface Emits {
  (event: 'click'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style module>
.button {
  background-color: var(--color-white);
  border-color: var(--color-white);
  opacity: 90%;
  max-width: 225px;
  border-radius: 10px;
  font-family: var(--font-family-secondary);
  line-height: 1;
  font-size: 26px;
  padding: 5px;
  cursor: pointer;
}
.button:hover {
  opacity: 80%;
}
</style>