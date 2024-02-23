<template>
  <div>
    <label v-if="label" :class="[`d-block mb-1`, customLabelClass]">{{ label }}</label>
    <select :value="modelValue" class="form-select" @change="onSelect">
      <option v-if="!modelValue" value="">{{ defaultOption }}</option>
      <option v-for="option in options" :key="String(option)" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { options, modelValue } = defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  },
  defaultOption: {
    type: String,
    default: 'Select'
  },
  customLabelClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const onSelect = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>
