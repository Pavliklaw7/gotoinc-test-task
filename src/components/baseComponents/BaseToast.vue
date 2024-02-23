<template>
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div id="liveToast" :class="['toast', { show }]" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <div class="me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-archive"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <strong class="me-auto">{{ title }}</strong>
        <!-- <small>11 mins ago</small> -->
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ text }}
        <BaseButton
          class="create-delivery-request__submit mt-2"
          type="submit"
          title="View my requests"
          size="sm"
          @click="router.push(`/${route.params.userId}/requests`)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const show = ref(true);

defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  text: {
    type: String,
    default: 'Hello, world! This is a toast message.'
  }
});
</script>

<style scoped></style>
