<template>
  <div class="d-flex flex-column h-100">
    <TheHeader title="Make Delivery Request" />
    <form action="" class="mt-4 flex-grow-1">
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
      <BaseDatePicker v-model="dispatchDate" label="Date of dispatch" class="mt-4" />
    </form>
    <BaseButton
      type="submit"
      :full-width="true"
      :disabled="createDisabled"
      title="Create delivery request"
      @click="createDelivery"
    />
  </div>
  <BaseToast v-if="toastShow" title="Deliveery request created" text="Visit your requests to see this created one" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RequestDto } from '@/models';
import { useCitiesStore } from '@/stores/citiesStore';
import TheHeader from '../components/TheHeader.vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import BaseSelect from '@/components/baseComponents/BaseSelect.vue';
import BaseToast from '@/components/baseComponents/BaseToast.vue';
import BaseDatePicker from '@/components/baseComponents/BaseDatePicker.vue';
import { useRequestStore } from '@/stores/requestStore';

const route = useRoute();
const toastShow = ref(false);
const dispatchDate = ref(Date.now());
const selectedOriginCity = ref('');
const selectedTargetCity = ref('');
const citiesStore = useCitiesStore();
const requestStore = useRequestStore();

const createDisabled = computed(() => {
  return !(selectedOriginCity.value && selectedTargetCity.value && dispatchDate.value);
});

const createDelivery = () => {
  const deliveryData: RequestDto = {
    id: String(Date.now()),
    type: 'delivery',
    creatorId: route.params.userId as string,
    originCity: selectedOriginCity.value,
    targetCity: selectedTargetCity.value,
    dispatchDate: dispatchDate.value,
    creationDate: Date.now(),
    parcelType: '',
    description: ''
  };

  requestStore.addRequest(deliveryData);

  toastShow.value = true;

  resetForm();

  setTimeout(() => {
    toastShow.value = false;
  }, 4000);
};

const resetForm = () => {
  dispatchDate.value = Date.now();
  selectedOriginCity.value = '';
  selectedTargetCity.value = '';
};
</script>
