<template>
  <div>
    <label v-if="label" class="base-textarea__label d-block mb-1">{{ label }}</label>
    <textarea
      :value="modelValue"
      rows="3"
      class="form-control"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'describe...'
  },
  label: {
    type: String,
    default: ''
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value.trim());
};
</script>

<style lang="scss" scoped>
.form-control {
  resize: none;
}
.base-textarea {
  display: flex;
  flex-direction: column;
  align-items: start;
  &__textarea {
    resize: none;
  }
}
</style>
