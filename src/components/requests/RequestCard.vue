<template>
  <div class="card text-bg-warning mb-3">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="card-title mb-0">{{ `${capitalize(request.type)} Request` }}</h5>
      <div class="d-flex">
        <button type="button" class="btn" aria-label="delete" @click="deleteHandler">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
          </svg>
        </button>
        <button type="button" class="btn" aria-label="edit" @click="editHandler">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000"
            class="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text mb-2"><span class="fw-bold me-1">From:</span>{{ request.originCity }}</p>
      <p class="card-text mb-2"><span class="fw-bold me-1">To:</span>{{ request.targetCity }}</p>
      <p v-if="request.parcelType" class="card-text mb-2">
        <span class="fw-bold me-1">parcel Type:</span>{{ request.parcelType }}
      </p>
      <p class="card-text mb-2">
        <span class="fw-bold me-1">Date of sending:</span>{{ dateFormat(request.dispatchDate) }}
      </p>
      <p class="card-text mb-2">
        <span class="fw-bold me-1">Date of creation:</span>{{ dateTimeFormat(request.creationDate) }}
      </p>
      <p v-if="request.description" class="card-text mb-2">
        <span class="fw-bold me-1"> Description: </span>
        {{ request.description }}
      </p>
      <BaseList v-if="matches.length" label="Simmilar requests:" :list="matches" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRequestStore } from '@/stores/requestStore';
import BaseList from '../baseComponents/BaseList.vue';
import type { RequestDto } from '@/models';
import { dateFormat, dateTimeFormat } from '@/utils/format';
import { computed } from 'vue';

const { request } = defineProps<{
  request: RequestDto;
}>();

const emit = defineEmits(['edit', 'delete']);

const requestStore = useRequestStore();

const matches = computed(() => {
  return requestStore.matchedRequests(request);
});

const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

const editHandler = () => {
  emit('edit', request.id);
};

const deleteHandler = () => {
  emit('delete', request.id);
};
</script>
