<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100">
    <p class="mb-5">Page Not Fount 🧐</p>
    <router-link to="/requests" class="text-decoration-none">
      <BaseButton title="Go to request" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/baseComponents/BaseButton.vue';
</script>
