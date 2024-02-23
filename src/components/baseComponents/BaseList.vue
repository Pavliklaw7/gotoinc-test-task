<template>
  <p v-if="label" class="mb-1">
    <strong>{{ label }}</strong>
  </p>
  <ol class="list-group list-group-numbered list-group-item-warning">
    <li v-for="item in list" :key="item.id" class="list-group-item">
      {{ `${item.originCity} > ${item.targetCity}, ${dateFormat(item.dispatchDate)} | ${item.type}` }}
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { RequestDto } from '@/models';
import { dateFormat } from '@/utils/format';

const { list } = defineProps({
  label: {
    type: String,
    default: ''
  },
  list: {
    type: Array as () => RequestDto[],
    default: () => []
  }
});
</script>
