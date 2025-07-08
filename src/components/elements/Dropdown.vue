<template>
    <div>
      <label :class="labelStyle">{{ label }}</label>
      <select class="dropdown-select" @change="onChange">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </template>
  
<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps<{
    options: string[];
    label: string;
    labelStyle : string;
  }>();
  
  const emit = defineEmits<{
    (e: 'selectionChanged', value: string): void;
  }>();
  
  function onChange(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    emit('selectionChanged', selected);
  }
</script>
  
<style>
  .dropdown-select
  {
    margin-right: 10px;
    align-items: center;
  }
</style>
  
  