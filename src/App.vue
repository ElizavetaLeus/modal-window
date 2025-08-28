<template>
  <div class="container">
    <AppTitle 
      text="Как покорить юную кейпопессу?"
    />
    <div :class="$style.buttonList">
      <AppButton 
        text="База общения с кейпопессой"
        @click="openModalContent()"
      />
      <AppButton 
        text="100% шанс стать ее чаги~а"
        @click="openModalMembers()"
      />
      <AppModal
        :isOpen="isOpenModalMembers"
        @close="closeModalMembers()"
        title="Как подкатить в зависимости от ее биаса"
      >
        <template v-slot:content>
          <div :class="$style.cardList">
            <MemberCard 
              v-for="member in memberlist"
              :key="member.id"
              :member="member"
            />
          </div>
        </template>
      </AppModal>
      <AppModal
        :isOpen="isOpenModalContent"
        @close="closeModalContent()"
        title="Краткая инструкция по общению с юной фанаткой Stray Kids"
      >
        <template v-slot:content>
          <ModalContent />
        </template>
      </AppModal>

    </div>
  </div>
</template>

<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import AppButton from '@/components/ui/AppButton.vue';
import MemberCard from '@/components/ui/MemberCard.vue';
import AppModal from '@/components/ui/AppModal.vue';
import { memberlist } from '@/components/data/MemberList';
import ModalContent from './components/ModalContent.vue';
import createTogler from '@/utils/createTogler';


const [isOpenModalMembers, openModalMembers, closeModalMembers] = createTogler();
const [isOpenModalContent, openModalContent, closeModalContent] = createTogler();
</script>

<style module>
.buttonList {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
}
.cardList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>