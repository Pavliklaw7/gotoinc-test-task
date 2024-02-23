<template>
  <div>
    <label v-if="label" class="mb-1">{{ label }}</label>
    <button :class="[`btn btn-${size} btn-warning`, { 'w-100': fullWidth }]" :disabled="disabled" @click="onClck">
      {{ title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';

const onClck = () => {
  emit('click');
};

defineProps({
  title: {
    type: String,
    default: 'Submit'
  },
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'lg'
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);
</script>
