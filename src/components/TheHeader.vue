<template>
  <header class="w-100 header">
    <button v-if="isNav" class="btn" @click="router.back()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#fff"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        />
      </svg>
    </button>
    <h2 v-if="title" class="flex-grow-1 header__title">
      {{ title }}
    </h2>
  </header>
</template>

<script setup lang="ts">
import router from '@/router';

defineProps({
  isNav: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: 'Title'
  }
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  &__title {
    flex-grow: 1;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
