<template>
  <div class="container">
    <AppTitle 
      text="Как покорить юную кейпопессу?"
    />
    <div :class="$style.buttonList">
      <AppButton 
        text="50% шанс стать ее чаги~а"
        @click="openModal()"
      />
      <AppButton 
        text="100% шанс стать ее чаги~а"
      />
      <AppModal 
        :isOpen="isOpenModal"
        @close="closeModal()" />
      <!-- <MemberCard 
        v-for="member in Memberlist"
        :key="member.id"
        :image="member.img"
        :member="member"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import AppButton from '@/components/ui/AppButton.vue';
// import MemberCard from '@/components/ui/MemberCard.vue';
import { ref } from 'vue';
import AppModal from '@/components/ui/AppModal.vue';

// import LeeMinho from '@/assets/img/leeminho.jpg';
// import HanJisung from '@/assets/img/HanJisung.jpg';
// import KimSeungmin from '@/assets/img/kimseungmin.jpg';
// import YangJeongIn from '@/assets/img/YangJeong-in.jpg';
// import HwangHyunjin from '@/assets/img/HwangHyunjin.jpg';
// import SeoChangBin from '@/assets/img/SeoChang-bin.jpg';

// const Memberlist = [
//   {id: 1, img: LeeMinho, text: 'ляляля', name: 'Ли Минхо'},
//   {id: 2, img: HanJisung, text: 'ляляля', name: 'Хан Джисон'},
//   {id: 3, img: KimSeungmin, text: 'ляляля', name:'Ким Сынмин'},
//   {id: 4, img: YangJeongIn, text: 'ляляля', name:'Ян Чонин'},
//   {id: 5, img: HwangHyunjin, text: 'ляляля', name:'Хван Хенджин'},
//   {id: 6, img: SeoChangBin, text: 'ляляля', name:'Со Чанбин'},
// ];

const isOpenModal = ref(false);

const openModal = () => {
  isOpenModal.value = true;
};
const closeModal = () => {
  isOpenModal.value = false;
}

</script>

<style module>
.buttonList {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
}
</style>