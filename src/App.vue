<template>
  <div class="container">
    <AppTitle 
      text="Как покорить юную кейпопессу?"
    />
    <div :class="$style.buttonList">
      <AppButton 
        text="50% шанс стать ее чаги~а"
      />
      <AppButton 
        text="100% шанс стать ее чаги~а"
      />
      <MemberCard 
        v-for="member in Memberlist"
        :key="member.id"
        :image="member.img.href"
        :member="member"
      />
    </div>
  </div>
</template>

<script setup >
import AppTitle from '@/components/AppTitle.vue';
import AppButton from '@/components/ui/AppButton.vue';
import MemberCard from '@/components/ui/MemberCard.vue';

const Memberlist = [
  {id: 1, img: new URL("@/assets/img/leeminho.jpg", import.meta.url), text: 'ляляля'},
  {id: 2, img: new URL("@/assets/img/kimseungmin.jpg", import.meta.url), text: 'ляляля'},
];
const aaa =new URL("@/assets/img/kimseungmin.jpg", import.meta.url);
console.log(aaa);

</script>

<style module>
.buttonList {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
}
</style>