<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainWrapperLayout from '@/layouts/MainWrapper.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
});
</script>

<template>
  <MainWrapperLayout>
    <div class="d-flex flex-column w-100">
      <RouterView />
    </div>
  </MainWrapperLayout>
</template>

<style scoped></style>
