<template>
  <div>
    <label v-if="label" for="startDate" class="mb-1">{{ label }}</label>
    <input
      :value="new Date(modelValue).toISOString().substring(0, 10)"
      class="form-control"
      type="date"
      timezone="US"
      min="2023-02-20"
      max="2999-12-31"
      @change="onPick"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

const onPick = (event: Event) => {
  const targe = event.target as HTMLInputElement;
  emit('update:modelValue', new Date(targe.value).getTime());
};
</script>
