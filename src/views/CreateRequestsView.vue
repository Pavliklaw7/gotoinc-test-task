<template>
  <div class="d-flex flex-column h-100">
    <TheHeader title="Choose request type" />
    <div class="flex-grow-1 mt-5">
      <BaseButton
        class="mb-5"
        title="Make Order"
        label="To send a parcel choose 'Make order'"
        :full-width="true"
        @click="router.push(`/${route.params.userId}/create-order`)"
      />
      <BaseButton
        title="Make deliver"
        label="To make delivery request choose 'Make deliver'"
        :full-width="true"
        @click="router.push(`/${route.params.userId}/create-deliver`)"
      />
    </div>
    <BaseButton class="w-100 mb-5" title="View all requests" :full-width="true" @click="router.push(`/requests`)" />
    <BaseButton
      title="View your requests"
      :full-width="true"
      @click="router.push(`/${route.params.userId}/requests`)"
    />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';

import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
