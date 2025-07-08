<template>
  <div class="quiz-container">
    <p class="quiz" :class="styleClass">{{ question }}</p>
    <div>
      <label
        v-for="(option, index) in options"
        :key="index"
        :class="styleClass"
      >
        <input
          type="radio"
          :name="'quiz-options-' + question"
          :value="index"
          :checked="modelValue === index"
          @change="onSelect(index)"
        />
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  styleClass?: string;
  question: string;
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const options = ['Yes', 'No'];

function onSelect(index: number) {
  if (props.modelValue !== index) {
    emit('update:modelValue', index);
  }
}
</script>

<style>
.quiz {
  margin-left: 0;
}
</style>