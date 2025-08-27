<template>
  <div :class="$style.memberCard">
    <img :src="image" :class="$style.image">
    <div :class="$style.cardText">
      <div :class="$style.cardTextTitle">{{ member.name }}</div>
      <ul :class="$style.cardTextSubtitle">
        <li>{{ member.point1 }}</li>
        <li>{{ member.point2 }}</li>
        <li>{{ member.point3 }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  member: {id: number, img: string, point1: string, point2: string, point3: string, name: string}
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
.cardText {
  display: block;
  gap: 5px;
}
.cardTextTitle {
  font-family: var(--font-family-primary);
  font-size: 28px;
  color: var(--color-black);
}
.cardTextSubtitle {
  font-family: var(--font-family-secondary);
  font-size: 20px;
  color: var(--color-dark-gray);
}
</style>