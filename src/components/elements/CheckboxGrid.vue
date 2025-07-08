<template>
  <div v-if="items?.length" class="checkbox-grid">
    <div
      v-for="item in items"
      :key="item"
      class="checkbox-item"
    >
      <input
        type="checkbox"
        :value="item"
        :checked="selected.includes(item)"
        @change="toggle(item)"
      />
      <label class="text">{{ item }}</label>
    </div>
  </div>
  <p v-else>Loading checkboxes...</p>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  items: string[];           // checkbox labels
  selected: string[];        // selected labels from parent
}>();

const emit = defineEmits<{
  (e: 'update:selected', value: string[]): void;
}>();

function toggle(label: string) {
  const newSelection = props.selected.includes(label)
    ? props.selected.filter(l => l !== label)
    : [...props.selected, label];

  emit('update:selected', newSelection);
}
</script>

<style scoped>
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 0rem;
  padding: 0rem;
  margin: 10px;
  border-bottom: 1px solid rgba(61, 68, 77, 0.75);
  border-top: 1px solid rgba(61, 68, 77, 0.75);
}

.checkbox-item {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.checkbox-item input[type="checkbox"] {
  margin: 0;
}
</style>
