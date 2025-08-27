<template>
  <div :class="[$style.modal, isOpen && $style.modalOpen]">
    <div :class="$style.modalWrapper">
      <header :class="$style.modalHeader">
        <div>Заголовок</div>
        <button>X</button>
      </header>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();
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
}
</style>