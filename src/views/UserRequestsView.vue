<template>
  <div class="d-flex flex-column h-100 w-100">
    <TheHeader title="All your request" :is-nav="!!historyStack" />
    <BaseSelect
      v-model="sortBy"
      custom-label-class="me-2"
      label="sort:"
      class="d-flex align-items-center mt-4"
      :options="sortByOptions"
    />
    <div class="d-flex align-items-center flex-grow-1 my-3 pe-3 overflow-y-auto" data-simplebar>
      <div v-if="sortedRequests.length">
        <RequestCard
          v-for="request in sortedRequests"
          :key="request.id"
          :request="request"
          @delete="openDeleteModal"
          @edit="openEditModal"
        />
      </div>
      <div v-else class="mt-4 text-center">There are no requests yet 😢</div>
    </div>
    <BaseButton class="mx-auto" title="Create new request" @click="router.push(`/${route.params.userId}/create`)" />
  </div>
  <BaseModal :is-modal-open="isEditModalOpen" size="md" @close="isEditModalOpen = false">
    <template #body>
      <form>
        <BaseSelect
          v-model="editedRequest.originCity"
          label="Select the city from which the parcel is sent"
          class="mt-4"
          :options="citiesStore.cities"
        />
        <BaseSelect
          v-model="editedRequest.targetCity"
          label="Select the city to which the parcel is sent"
          class="mt-4"
          :options="citiesStore.cities"
        />
        <BaseSelect
          v-if="editedRequest.type == 'order'"
          v-model="editedRequest.parcelType"
          label="Type of parcel"
          class="mt-4"
          :options="parcelStore.parcelTypes"
        />
        <BaseDatePicker
          v-model="editedRequest.dispatchDate"
          label="Date of dispatch"
          class="create-delivery__datepicker mt-4"
          :picked-data="editedRequest.parcelType"
        />
        <BaseTextarea
          v-if="editedRequest.type == 'order'"
          v-model="editedRequest.description"
          label="Parcel description"
          placeholder="laptop"
          class="mt-4"
        />
      </form>
    </template>
    <template #footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="isEditModalOpen = false">
        Close
      </button>
      <button type="button" class="btn btn-primary" @click="onUpdate">Save changes</button>
    </template>
  </BaseModal>
  <BaseModal :is-modal-open="isDeleteModalOpen" size="md" @close="isDeleteModalOpen = false">
    <template #body>
      Are you sure <br />
      You want to delelte this erquest?
    </template>
    <template #footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="isDeleteModalOpen = false">
        Close
      </button>
      <button type="button" class="btn btn-danger" @click="onDelete">delete</button>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import { computed, reactive, ref } from 'vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import RequestCard from '@/components/requests/RequestCard.vue';
import { useCitiesStore } from '@/stores/citiesStore';
import BaseModal from '@/components/baseComponents/BaseModal.vue';
import BaseSelect from '@/components/baseComponents/BaseSelect.vue';
import BaseTextarea from '@/components/baseComponents/BaseTextarea.vue';
import BaseDatePicker from '@/components/baseComponents/BaseDatePicker.vue';
import { useParcelStore } from '@/stores/parcelStore';
import { useRequestStore } from '@/stores/requestStore';
import type { RequestDto } from '@/models';

const historyStack = window.history.length;

const route = useRoute();

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);

let editedRequest = reactive({
  id: '',
  dispatchDate: 0,
  description: '',
  originCity: '',
  targetCity: '',
  parcelType: '',
  type: '',
  creatorId: '',
  creationDate: 0
});

const sortBy = ref('by creation date');
const sortByOptions = ref(['by sending date', 'by creation date']);

const citiesStore = useCitiesStore();
const parcelStore = useParcelStore();
const requestStore = useRequestStore();

const sortedRequests = computed(() => {
  return requestStore.sortedRequests(sortBy.value).filter((item: RequestDto) => {
    return item.creatorId === route.params.userId;
  });
});

const onUpdate = () => {
  console.log();
  requestStore.updateRequest(editedRequest);
  isEditModalOpen.value = false;
};

const onDelete = () => {
  requestStore.deleteRequest(editedRequest.id);
  isDeleteModalOpen.value = false;
};

const openDeleteModal = (id: string) => {
  isDeleteModalOpen.value = true;
  editedRequest.id = id;
};

const openEditModal = (id: string) => {
  isEditModalOpen.value = true;
  const targetRequest = requestStore.currentRequest(id)!;
  editedRequest = targetRequest;
};
</script>
