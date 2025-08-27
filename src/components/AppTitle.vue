<template>
  <div :class="$style.titleWrap">
    <h1 class="title"> {{ text }} </h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style module>
.titleWrap {
  max-width: 500px;
  padding: 10px;
  background-color: var(--color-white);
  border-radius: 10px;
  opacity: 90%;
}
</style>