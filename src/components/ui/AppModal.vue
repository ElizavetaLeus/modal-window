<template>
  <div :class="[$style.modal, isOpen && $style.modalOpen]">
    <div :class="$style.modalWrapper">
      <header :class="$style.modalHeader">
        <div>Заголовок</div>
        <button @click="closeModal()">X</button>
      </header>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}
interface Emits {
  (event: 'close'): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

const closeModal = () => {
  emits('close');
}
</script>

<style module>
.modal {
  position: absolute;
  top: 100px;
  left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
}
.modalOpen {
  opacity: 1;
  visibility: visible;
}
.modalWrapper {
  max-width: 60%;
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 10px;
  transform: translateY(100px);
  opacity: 0;
}
.modalOpen .modalWrapper {
  transform: translateY(0);
  opacity: 1;
}
.modalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
</style>