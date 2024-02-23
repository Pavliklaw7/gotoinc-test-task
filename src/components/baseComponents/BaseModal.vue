<template>
  <transition name="modal">
    <div v-if="isModalOpen" class="d-block modal" tabindex="1" style="background-color: rgba(0, 0, 0, 0.5)">
      <div ref="modal" :class="[`modal-dialog modal-${size}`]">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="onClose"></button>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const modal = ref(null);

const emit = defineEmits(['close']);

onClickOutside(modal, () => emit('close'));

const onClose = () => {
  emit('close');
};

defineProps({
  title: {
    type: String,
    default: 'Modal title'
  },
  test: {
    type: String,
    default: 'Modal text'
  },
  isModalOpen: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  }
});
</script>

<style lang="scss" scoped>
.modal-active-enter,
.modal-leave-active {
  transition: all 0.3s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
