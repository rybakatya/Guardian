<template>
  <div class="checkbox-container">
    <label :class="labelClass">
      <input
        class="checkMark"
        :name="question"
        type="checkbox"
        :checked="modelValue"
        @change="onChange"
      />
      [{{ label }}]: <span :class="styleClass">{{ question }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  styleClass?: string;
  labelClass?: string;
  label?: string;
  question?: string;
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

function onChange(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
}
</script>

<style>
.checkMark {
  margin-left: 0px;
}
</style>
