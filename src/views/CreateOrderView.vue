<template>
  <div class="d-flex flex-column h-100">
    <TheHeader title="Make Order Request" />
    <form class="mt-4 flex-grow-1">
      <BaseSelect
        v-model="selectedOriginCity"
        label="Select the city from which the parcel is sent"
        placeholder="---"
        class="mt-4"
        :options="citiesStore.cities"
      />
      <BaseSelect
        v-model="selectedTargetCity"
        label="Select the city to which the parcel is sent"
        placeholder="---"
        class="mt-4"
        :options="citiesStore.cities"
      />
      <BaseSelect v-model="selectedParcelType" label="Type of parcel" class="mt-4" :options="parcelTypes" />
      <BaseDatePicker v-model="dispatchDate" label="Date of dispatch" class="mt-4" />
      <BaseTextarea v-model="parcelDescription" label="Parcel description" placeholder="laptop" class="mt-4" />
    </form>
    <BaseButton
      :disabled="createDisabled"
      type="submit"
      :full-width="true"
      title="Create new request"
      @click="createOrder"
    />
  </div>
  <BaseModal />
  <BaseToast v-if="toastShow" title="Order request created" text="visit your requests to see this created one" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RequestDto } from '@/models';
import { useCitiesStore } from '@/stores/citiesStore';
import TheHeader from '../components/TheHeader.vue';
import BaseModal from '@/components/baseComponents/BaseModal.vue';
import BaseToast from '@/components/baseComponents/BaseToast.vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import BaseSelect from '@/components/baseComponents/BaseSelect.vue';
import BaseTextarea from '@/components/baseComponents/BaseTextarea.vue';
import BaseDatePicker from '@/components/baseComponents/BaseDatePicker.vue';
import { useRequestStore } from '@/stores/requestStore';

const route = useRoute();

const toastShow = ref(false);

const dispatchDate = ref(Date.now());
const parcelDescription = ref('');
const selectedOriginCity = ref('');
const selectedTargetCity = ref('');
const selectedParcelType = ref('');

const citiesStore = useCitiesStore();
const parcelTypes = ref(['Gadgets', 'Drinks', 'Clothes', 'Medicines', 'Other']);
const requestStore = useRequestStore();

const createDisabled = computed(() => {
  return !(selectedOriginCity.value && selectedTargetCity.value && dispatchDate.value);
});

const createOrder = () => {
  const orderData: RequestDto = {
    id: String(Date.now()),
    type: 'order',
    creatorId: route.params.userId as string,
    originCity: selectedOriginCity.value,
    targetCity: selectedTargetCity.value,
    parcelType: selectedParcelType.value,
    dispatchDate: dispatchDate.value,
    description: parcelDescription.value,
    creationDate: Date.now()
  };

  requestStore.addRequest(orderData);

  toastShow.value = true;

  resetForm();

  setTimeout(() => {
    toastShow.value = false;
  }, 4000);
};

const resetForm = () => {
  dispatchDate.value = Date.now();
  parcelDescription.value = '';
  selectedOriginCity.value = '';
  selectedTargetCity.value = '';
  selectedParcelType.value = '';
};
</script>
