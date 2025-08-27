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
  {id: 1, img: new URL("@/assets/img/leeminho.jpg", import.meta.url), text: 'ляляля', name: 'Ли Минхо'},
  {id: 2, img: new URL("@/assets/img/HanJisung.jpg", import.meta.url), text: 'ляляля', name: 'Хан Джисон'},
  {id: 3, img: new URL("@/assets/img/kimseungmin.jpg", import.meta.url), text: 'ляляля', name:'Ким Сынмин'},
  {id: 4, img: new URL("@/assets/img/YangJeong-in.jpg", import.meta.url), text: 'ляляля', name:'Ян Чонин'},
  {id: 5, img: new URL("@/assets/img/HwangHyunjin.jpg", import.meta.url), text: 'ляляля', name:'Хван Хенджин'},
  {id: 6, img: new URL("@/assets/img/SeoChang-bin.jpg", import.meta.url), text: 'ляляля', name:'Со Чанбин'},
];

</script>

<style module>
.buttonList {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
}
</style>