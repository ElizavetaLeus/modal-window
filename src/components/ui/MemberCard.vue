<template>
  <div :class="$style.memberCard">
    <img :src="image" :class="$style.image">
    <div>{{ user.text }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: {id: number, img: object, text: string}
  image: string;
}

defineProps<Props>();

</script>

<style module>
.memberCard {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  padding: 5px;
  background-color: var(--color-white);
}
.image{
  border-radius: 50%;
  max-width: 50px;
  min-height: 50%;
}
</style>