<template>
  <div class="d-flex flex-column w-100 h-100">
    <TheHeader title="All created requests" />
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
      <p v-else class="flex-grow-1 mt-5 text-center">There are no requests yet 😢</p>
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
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import RequestCard from '@/components/requests/RequestCard.vue';
import router from '@/router';
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import BaseModal from '@/components/baseComponents/BaseModal.vue';
import { useCitiesStore } from '@/stores/citiesStore';
import BaseSelect from '@/components/baseComponents/BaseSelect.vue';
import BaseTextarea from '@/components/baseComponents/BaseTextarea.vue';
import BaseDatePicker from '@/components/baseComponents/BaseDatePicker.vue';
import { useParcelStore } from '@/stores/parcelStore';
import { useRequestStore } from '@/stores/requestStore';
import type { RequestDto } from '@/models';

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
}) as RequestDto;

const sortBy = ref('by creation date');
const sortByOptions = ref(['by sending date', 'by creation date']);

const citiesStore = useCitiesStore();
const parcelStore = useParcelStore();
const requestStore = useRequestStore();

const sortedRequests = computed(() => requestStore.sortedRequests(sortBy.value));

const onUpdate = () => {
  isEditModalOpen.value = false;
  requestStore.updateRequest(editedRequest);
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
  const targetRequest = requestStore.requests.find((item: RequestDto) => item.id === id)!;
  editedRequest = targetRequest;
};
</script>
