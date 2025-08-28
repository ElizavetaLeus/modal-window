<template>
  <div 
    :class="[$style.modal, isOpen && $style.modalOpen]"
    @click="closeModal()"
  >
    <div :class="$style.modalWrapper" @click.stop>
      <header :class="$style.modalHeader">
        <div :class="$style.title">{{ title }}</div>
        <button 
          :class="$style.button"
          @click="closeModal()"
        >
          X
        </button>
      </header>
      <div>
        <slot name="content">content</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
  title: string;
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
  display: flex;
  gap: 20px;
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
  position: absolute;
  top: 70px;
  max-width: 90%;
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
  gap: 20px;
}
.title {
  font-family: var(--font-family-primary);
  font-size: 36px;
  color: var(--color-black);
}
.button {
  color: var(--color-white);
  background-color: var(--color-dark-gray);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
}
</style>