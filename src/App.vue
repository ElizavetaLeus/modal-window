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
              v-for="member in Memberlist"
              :key="member.id"
              :image="member.img"
              :member="member"
            />
          </div>
        </template>
      </AppModal>


    </div>
  </div>
</template>

<script setup lang="ts">
import AppTitle from '@/components/AppTitle.vue';
import AppButton from '@/components/ui/AppButton.vue';
import MemberCard from '@/components/ui/MemberCard.vue';
import { ref } from 'vue';
import AppModal from '@/components/ui/AppModal.vue';
import Memberlist from '@/components/data/MemberList';

const isOpenModalMembers = ref(false);

const openModalMembers = () => {
  isOpenModalMembers.value = true;
};
const closeModalMembers = () => {
  isOpenModalMembers.value = false;
}

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