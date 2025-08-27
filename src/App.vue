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
//   {id: 1, 
//    img: LeeMinho, 
//    point1: 'Покажи ей фото/видео с котиками. Идеально, если это твой котик.', 
//    point2: '«Надеюсь, тёплый сарказм — это твоя любовь к Минхо? Потому что я сейчас попробую...»', 
//    point3: 'Подари ей маленький милый сувенир с котом.', 
//    name: 'Ли Минхо'
//   },
//   {id: 2, 
//    img: HanJisung, 
//    point1: 'Дай ей понять, что ты видишь в ней что-то особенное, что отличает её от других.', 
//    point2: 'Покажи свой ум и творческую сторону.', 
//    point3: 'Подари ей мягкий брелок или стикерпак с белками, это добавит тебе плюсик в карму.', 
//    name: 'Хан Джисон'
//   },
//   {id: 3, 
//    img: KimSeungmin, 
//    point1: '«Твой биас — Сынмин? О, я слышал, он король сарказма. Надеюсь, ты ко мне будешь помягче?».', 
//    point2: 'Подшучивай над ситуацией или над собой легко и без злобы.', 
//    point3: 'Поговори с ней о любви к милым щеночкам', 
//    name:'Ким Сынмин'
//   },
//   {id: 4, 
//    img: YangJeongIn, 
//    point1: '«Говорят, фанатки Чонина такие же милые и хитрые, как лисы. Это правда?»', 
//    point2: 'Если рассмешишь её, скажи: «У тебя такой же заразительный смех, как у Чонина!».', 
//    point3: 'Подари ей милые носочки с лисичками, «Чтобы напоминали тебе о биасе, и ножки не мерзли».', 
//    name:'Ян Чонин'
//   },
//   {id: 5, 
//    img: HwangHyunjin, 
//    point1: 'Отведи ее на свидание в студию лепки из керамики, на МК по рисованию или на выставку.', 
//    point2: 'Спроси, что её вдохновляет или что трогает до слёз.', 
//    point3: 'Подари что-то связанное с искусством: блокнот для эскизов, засушенный цветок или книгу стихов.', 
//    name:'Хван Хенджин'
//   },
//   {id: 6, 
//    img: SeoChangBin, 
//    point1: 'Предложи совместную активность: «Давай в зал, как Чанбин? Или на прогулку?».', 
//    point2: 'Легко подшучивайте над собой или над ситуацией.', 
//    point3: '«Надеюсь, моё чувство юмора такое же криповое, как у Чанбина!».', 
//    name:'Со Чанбин'
//   },
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