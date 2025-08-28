<template>
  <div :class="$style.memberCard">
    <img :src="member.img" :class="$style.image">
    <div :class="$style.cardText">
      <div :class="$style.cardTextTitle">{{ member.name }}</div>
      <ul :class="$style.cardTextSubtitle">
        <li v-for="point in member.points"
            :key="point"> {{ point }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Member } from '@/components/data/MemberList';

interface Props {
  member: Member
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
  align-items: center;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
}
.image{
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.cardText {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cardTextTitle {
  font-family: var(--font-family-primary);
  font-size: 30px;
  color: var(--color-black);
  text-align: center;
}
.cardTextSubtitle {
  font-size: 20px;
  color: var(--color-dark-gray);
  max-width: 360px;
}
</style>